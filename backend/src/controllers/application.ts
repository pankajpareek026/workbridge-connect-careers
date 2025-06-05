import { Request, Response, NextFunction } from 'express';
import { Application } from '../models/Application';
import { Job } from '../models/Job';
import { User } from '../models/User';

// @desc    Submit a job application
// @route   POST /api/applications
// @access  Private (Job Seeker)
export const submitApplication = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {
            jobId,
            resume,
            coverLetter,
            experience,
            education,
            skills,
        } = req.body;

        // Check if job exists and is active
        const job = await Job.findOne({ _id: jobId, status: 'active' });
        if (!job) {
            return res.status(404).json({
                success: false,
                message: 'Job not found or not active',
            });
        }

        // Check if already applied
        const existingApplication = await Application.findOne({
            job: jobId,
            applicant: req.user._id,
        });

        if (existingApplication) {
            return res.status(400).json({
                success: false,
                message: 'You have already applied for this job',
            });
        }

        // Create application
        const application = await Application.create({
            job: jobId,
            applicant: req.user._id,
            resume,
            coverLetter,
            experience,
            education,
            skills,
        });

        // Update job's applications count
        await Job.findByIdAndUpdate(jobId, {
            $inc: { applicationsCount: 1 },
        });

        res.status(201).json({
            success: true,
            data: application,
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get all applications for a job (employer)
// @route   GET /api/applications/job/:jobId
// @access  Private (Employer)
export const getJobApplications = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { jobId } = req.params;
        const { status, page = 1, limit = 10 } = req.query;

        // Check if job exists and belongs to employer
        const job = await Job.findOne({
            _id: jobId,
            employer: req.user._id,
        });

        if (!job) {
            return res.status(404).json({
                success: false,
                message: 'Job not found or not authorized',
            });
        }

        // Build query
        const query: any = { job: jobId };
        if (status) {
            query.status = status;
        }

        // Get applications
        const applications = await Application.find(query)
            .populate('applicant', 'firstName lastName email')
            .sort('-createdAt')
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        // Get total count
        const total = await Application.countDocuments(query);

        res.json({
            success: true,
            data: applications,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / Number(limit)),
            },
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get all applications by a user
// @route   GET /api/applications/my-applications
// @access  Private (Job Seeker)
export const getMyApplications = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { status, page = 1, limit = 10 } = req.query;

        // Build query
        const query: any = { applicant: req.user._id };
        if (status) {
            query.status = status;
        }

        // Get applications
        const applications = await Application.find(query)
            .populate('job', 'title company location type')
            .sort('-createdAt')
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        // Get total count
        const total = await Application.countDocuments(query);

        res.json({
            success: true,
            data: applications,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / Number(limit)),
            },
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get single application
// @route   GET /api/applications/:id
// @access  Private (Job Seeker & Employer)
export const getApplication = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const application = await Application.findById(req.params.id)
            .populate('job', 'title company location type employer')
            .populate('applicant', 'firstName lastName email');

        if (!application) {
            return res.status(404).json({
                success: false,
                message: 'Application not found',
            });
        }

        // Check authorization
        const isEmployer = application.job.employer.toString() === req.user._id.toString();
        const isApplicant = application.applicant._id.toString() === req.user._id.toString();

        if (!isEmployer && !isApplicant) {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to view this application',
            });
        }

        res.json({
            success: true,
            data: application,
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Update application status
// @route   PUT /api/applications/:id/status
// @access  Private (Employer)
export const updateApplicationStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { status } = req.body;

        const application = await Application.findById(req.params.id)
            .populate('job', 'employer');

        if (!application) {
            return res.status(404).json({
                success: false,
                message: 'Application not found',
            });
        }

        // Check if employer owns the job
        if (application.job.employer.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to update this application',
            });
        }

        // Update status
        application.status = status;
        await application.save();

        res.json({
            success: true,
            data: application,
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Withdraw application
// @route   DELETE /api/applications/:id
// @access  Private (Job Seeker)
export const withdrawApplication = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const application = await Application.findById(req.params.id);

        if (!application) {
            return res.status(404).json({
                success: false,
                message: 'Application not found',
            });
        }

        // Check if user is the applicant
        if (application.applicant.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to withdraw this application',
            });
        }

        // Check if application can be withdrawn
        if (['accepted', 'rejected'].includes(application.status)) {
            return res.status(400).json({
                success: false,
                message: 'Cannot withdraw an application that has been accepted or rejected',
            });
        }

        // Delete application
        await application.deleteOne();

        // Update job's applications count
        await Job.findByIdAndUpdate(application.job, {
            $inc: { applicationsCount: -1 },
        });

        res.json({
            success: true,
            data: {},
        });
    } catch (error) {
        next(error);
    }
}; 