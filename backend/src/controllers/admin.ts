import { Request, Response } from 'express';
import { User } from '../models/User';
import { Company } from '../models/Company';
import { Job } from '../models/Job';
import { Application } from '../models/Application';

// User Management
export const getUsers = async (req: Request, res: Response) => {
    try {
        const { page = 1, limit = 10, role, search } = req.query;
        const query: any = {};

        if (role) query.role = role;
        if (search) {
            query.$or = [
                { firstName: { $regex: search, $options: 'i' } },
                { lastName: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } }
            ];
        }

        const users = await User.find(query)
            .select('-password')
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit))
            .sort({ createdAt: -1 });

        const total = await User.countDocuments(query);

        res.status(200).json({
            success: true,
            data: users,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / Number(limit))
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching users',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { isActive, role, isVerified } = req.body;

        const user = await User.findByIdAndUpdate(
            id,
            { isActive, role, isVerified },
            { new: true, runValidators: true }
        ).select('-password');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating user',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

// Company Management
export const getCompanies = async (req: Request, res: Response) => {
    try {
        const { page = 1, limit = 10, isVerified, search } = req.query;
        const query: any = {};

        if (isVerified !== undefined) query.isVerified = isVerified;
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } }
            ];
        }

        const companies = await Company.find(query)
            .populate('owner', 'name email')
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit))
            .sort({ createdAt: -1 });

        const total = await Company.countDocuments(query);

        res.status(200).json({
            success: true,
            data: companies,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / Number(limit))
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching companies',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

export const verifyCompany = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { isVerified } = req.body;

        const company = await Company.findByIdAndUpdate(
            id,
            { isVerified },
            { new: true }
        );

        if (!company) {
            return res.status(404).json({
                success: false,
                message: 'Company not found'
            });
        }

        // Update user's company verification status
        await User.findOneAndUpdate(
            { 'company.id': id },
            { 'company.isVerified': isVerified }
        );

        res.status(200).json({
            success: true,
            data: company
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error verifying company',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

// Job Management
export const getJobs = async (req: Request, res: Response) => {
    try {
        const { page = 1, limit = 10, status, search } = req.query;
        const query: any = {};

        if (status) query.status = status;
        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } }
            ];
        }

        const jobs = await Job.find(query)
            .populate('company.id', 'name logo')
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit))
            .sort({ createdAt: -1 });

        const total = await Job.countDocuments(query);

        res.status(200).json({
            success: true,
            data: jobs,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / Number(limit))
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching jobs',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

export const updateJobStatus = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const job = await Job.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!job) {
            return res.status(404).json({
                success: false,
                message: 'Job not found'
            });
        }

        res.status(200).json({
            success: true,
            data: job
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating job status',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

// Review Management
export const getReviews = async (req: Request, res: Response) => {
    try {
        const { page = 1, limit = 10, isVerified, search } = req.query;
        const query: any = {};

        if (isVerified !== undefined) query['reviews.isVerified'] = isVerified;
        if (search) {
            query.$or = [
                { 'reviews.title': { $regex: search, $options: 'i' } },
                { 'reviews.content': { $regex: search, $options: 'i' } }
            ];
        }

        const companies = await Company.find(query)
            .populate('reviews.user', 'name email')
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit))
            .sort({ 'reviews.createdAt': -1 });

        const total = await Company.countDocuments(query);

        res.status(200).json({
            success: true,
            data: companies,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / Number(limit))
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching reviews',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

export const verifyReview = async (req: Request, res: Response) => {
    try {
        const { companyId, reviewId } = req.params;
        const { isVerified } = req.body;

        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(404).json({
                success: false,
                message: 'Company not found'
            });
        }

        const review = company.reviews.id(reviewId);
        if (!review) {
            return res.status(404).json({
                success: false,
                message: 'Review not found'
            });
        }

        review.isVerified = isVerified;
        await company.save();

        res.status(200).json({
            success: true,
            data: review
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error verifying review',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

// Reports and Analytics
export const getDashboardStats = async (req: Request, res: Response) => {
    try {
        const [
            totalUsers,
            totalCompanies,
            totalJobs,
            totalApplications,
            activeJobs,
            verifiedCompanies,
            recentUsers,
            recentJobs
        ] = await Promise.all([
            User.countDocuments(),
            Company.countDocuments(),
            Job.countDocuments(),
            Application.countDocuments(),
            Job.countDocuments({ status: 'active' }),
            Company.countDocuments({ isVerified: true }),
            User.find().sort({ createdAt: -1 }).limit(5).select('-password'),
            Job.find().sort({ createdAt: -1 }).limit(5).populate('company.id', 'name logo')
        ]);

        res.status(200).json({
            success: true,
            data: {
                totalUsers,
                totalCompanies,
                totalJobs,
                totalApplications,
                activeJobs,
                verifiedCompanies,
                recentUsers,
                recentJobs
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching dashboard stats',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}; 