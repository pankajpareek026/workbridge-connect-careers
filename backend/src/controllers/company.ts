import { Request, Response } from 'express';
import { Company } from '../models/Company';
import { User } from '../models/User';
import { Job } from '../models/Job';
import { validateRequest } from '../utils/validateRequest';

// Create a new company
export const createCompany = async (req: Request, res: Response) => {
    try {
        const { name, website, description, location, size, industry, socialMedia } = req.body;

        // Check if user already has a company
        const existingCompany = await Company.findOne({ owner: req.user?.id });
        if (existingCompany) {
            return res.status(400).json({
                success: false,
                message: 'You already have a company profile'
            });
        }

        const company = await Company.create({
            name,
            owner: req.user?.id,
            website,
            description,
            location,
            size,
            industry,
            socialMedia
        });

        // Update user's company reference
        await User.findByIdAndUpdate(req.user?.id, {
            'company.id': company._id,
            'company.name': company.name
        });

        res.status(201).json({
            success: true,
            data: company
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating company profile',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

// Get company profile
export const getCompany = async (req: Request, res: Response) => {
    try {
        const company = await Company.findById(req.params.id)
            .populate('owner', 'name email')
            .populate('jobs');

        if (!company) {
            return res.status(404).json({
                success: false,
                message: 'Company not found'
            });
        }

        res.status(200).json({
            success: true,
            data: company
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching company profile',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

// Update company profile
export const updateCompany = async (req: Request, res: Response) => {
    try {
        const company = await Company.findById(req.params.id);

        if (!company) {
            return res.status(404).json({
                success: false,
                message: 'Company not found'
            });
        }

        // Check ownership
        if (company.owner.toString() !== req.user?.id) {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to update this company'
            });
        }

        const updatedCompany = await Company.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        // Update user's company reference if name changed
        if (req.body.name) {
            await User.findByIdAndUpdate(req.user?.id, {
                'company.name': req.body.name
            });
        }

        res.status(200).json({
            success: true,
            data: updatedCompany
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating company profile',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

// Delete company
export const deleteCompany = async (req: Request, res: Response) => {
    try {
        const company = await Company.findById(req.params.id);

        if (!company) {
            return res.status(404).json({
                success: false,
                message: 'Company not found'
            });
        }

        // Check ownership
        if (company.owner.toString() !== req.user?.id) {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to delete this company'
            });
        }

        // Delete all jobs associated with the company
        await Job.deleteMany({ company: company._id });

        // Remove company reference from user
        await User.findByIdAndUpdate(req.user?.id, {
            $unset: { company: 1 }
        });

        await company.remove();

        res.status(200).json({
            success: true,
            message: 'Company profile deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting company profile',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

// Add company review
export const addReview = async (req: Request, res: Response) => {
    try {
        const { rating, title, content, pros, cons } = req.body;
        const company = await Company.findById(req.params.id);

        if (!company) {
            return res.status(404).json({
                success: false,
                message: 'Company not found'
            });
        }

        // Check if user has already reviewed
        const existingReview = company.reviews.find(
            review => review.user.toString() === req.user?.id
        );

        if (existingReview) {
            return res.status(400).json({
                success: false,
                message: 'You have already reviewed this company'
            });
        }

        company.reviews.push({
            user: req.user?.id,
            rating,
            title,
            content,
            pros,
            cons
        });

        await company.save();

        res.status(201).json({
            success: true,
            data: company
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error adding review',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

// Follow/Unfollow company
export const toggleFollow = async (req: Request, res: Response) => {
    try {
        const company = await Company.findById(req.params.id);

        if (!company) {
            return res.status(404).json({
                success: false,
                message: 'Company not found'
            });
        }

        const followerIndex = company.followers.indexOf(req.user?.id);

        if (followerIndex === -1) {
            company.followers.push(req.user?.id);
        } else {
            company.followers.splice(followerIndex, 1);
        }

        await company.save();

        res.status(200).json({
            success: true,
            data: company
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error toggling follow status',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

// Search companies
export const searchCompanies = async (req: Request, res: Response) => {
    try {
        const { query, industry, location, size, page = 1, limit = 10 } = req.query;

        const searchQuery: any = {};

        if (query) {
            searchQuery.$text = { $search: query };
        }
        if (industry) searchQuery.industry = industry;
        if (location) searchQuery.location = location;
        if (size) searchQuery.size = size;

        const companies = await Company.find(searchQuery)
            .sort({ averageRating: -1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit))
            .populate('owner', 'name email')
            .populate('jobs');

        const total = await Company.countDocuments(searchQuery);

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
            message: 'Error searching companies',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}; 