import { Request, Response, NextFunction } from 'express';
import { Job } from '../models/Job';
import { User } from '../models/User';

// @desc    Create a new job
// @route   POST /api/jobs
// @access  Private (Employer)
export const createJob = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {
            title,
            company,
            location,
            type,
            salary,
            description,
            requirements,
            responsibilities,
            benefits,
            expiresAt,
        } = req.body;

        // Create job
        const job = await Job.create({
            title,
            company,
            location,
            type,
            salary,
            description,
            requirements,
            responsibilities,
            benefits,
            employer: req.user._id,
            expiresAt: new Date(expiresAt),
        });

        // Update employer's posted jobs
        await User.findByIdAndUpdate(req.user._id, {
            $push: { postedJobs: job._id },
        });

        res.status(201).json({
            success: true,
            data: job,
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get all jobs with filters
// @route   GET /api/jobs
// @access  Public
export const getJobs = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {
            search,
            location,
            type,
            minSalary,
            maxSalary,
            page = 1,
            limit = 10,
            sort = '-createdAt',
        } = req.query;

        // Build query
        const query: any = { status: 'active' };

        if (search) {
            query.$text = { $search: search as string };
        }

        if (location) {
            query.location = new RegExp(location as string, 'i');
        }

        if (type) {
            query.type = type;
        }

        if (minSalary || maxSalary) {
            query.salary = {};
            if (minSalary) query.salary.$gte = Number(minSalary);
            if (maxSalary) query.salary.$lte = Number(maxSalary);
        }

        // Execute query
        const jobs = await Job.find(query)
            .sort(sort as string)
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit))
            .populate('employer', 'company position');

        // Get total count
        const total = await Job.countDocuments(query);

        res.json({
            success: true,
            data: jobs,
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

// @desc    Get single job
// @route   GET /api/jobs/:id
// @access  Public
export const getJob = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const job = await Job.findById(req.params.id)
            .populate('employer', 'company position')
            .populate('applications');

        if (!job) {
            return res.status(404).json({
                success: false,
                message: 'Job not found',
            });
        }

        // Increment views
        job.views += 1;
        await job.save();

        res.json({
            success: true,
            data: job,
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Update job
// @route   PUT /api/jobs/:id
// @access  Private (Employer)
export const updateJob = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let job = await Job.findById(req.params.id);

        if (!job) {
            return res.status(404).json({
                success: false,
                message: 'Job not found',
            });
        }

        // Check ownership
        if (job.employer.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to update this job',
            });
        }

        // Update job
        job = await Job.findByIdAndUpdate(
            req.params.id,
            { ...req.body, expiresAt: req.body.expiresAt ? new Date(req.body.expiresAt) : undefined },
            { new: true, runValidators: true }
        );

        res.json({
            success: true,
            data: job,
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Delete job
// @route   DELETE /api/jobs/:id
// @access  Private (Employer)
export const deleteJob = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const job = await Job.findById(req.params.id);

        if (!job) {
            return res.status(404).json({
                success: false,
                message: 'Job not found',
            });
        }

        // Check ownership
        if (job.employer.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to delete this job',
            });
        }

        await job.deleteOne();

        res.json({
            success: true,
            data: {},
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Save/unsave job
// @route   POST /api/jobs/:id/save
// @access  Private (Job Seeker)
export const toggleSaveJob = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const job = await Job.findById(req.params.id);

        if (!job) {
            return res.status(404).json({
                success: false,
                message: 'Job not found',
            });
        }

        const isSaved = job.savedBy.includes(req.user._id);

        if (isSaved) {
            // Unsave job
            job.savedBy = job.savedBy.filter(
                (id) => id.toString() !== req.user._id.toString()
            );
        } else {
            // Save job
            job.savedBy.push(req.user._id);
        }

        await job.save();

        res.json({
            success: true,
            data: {
                saved: !isSaved,
            },
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get saved jobs
// @route   GET /api/jobs/saved
// @access  Private (Job Seeker)
export const getSavedJobs = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const jobs = await Job.find({ savedBy: req.user._id })
            .populate('employer', 'company position');

        res.json({
            success: true,
            data: jobs,
        });
    } catch (error) {
        next(error);
    }
}; 