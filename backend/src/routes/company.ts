import express from 'express';
import {
    createCompany,
    getCompany,
    updateCompany,
    deleteCompany,
    addReview,
    toggleFollow,
    searchCompanies
} from '../controllers/company';
import { protect, authorize } from '../middleware/auth';
import { validateRequest } from '../utils/validateRequest';
import { body, query } from 'express-validator';

const router = express.Router();

// Public routes
router.get('/search', [
    query('page').optional().isInt({ min: 1 }),
    query('limit').optional().isInt({ min: 1, max: 50 }),
    validateRequest
], searchCompanies);

router.get('/:id', getCompany);

// Protected routes
router.use(protect);

// Company management routes (employers only)
router.post('/', [
    authorize('employer'),
    body('name').trim().notEmpty().withMessage('Company name is required'),
    body('website').optional().isURL().withMessage('Invalid website URL'),
    body('description').optional().trim(),
    body('location').optional().trim(),
    body('size').optional().trim(),
    body('industry').optional().trim(),
    body('socialMedia.linkedin').optional().isURL().withMessage('Invalid LinkedIn URL'),
    body('socialMedia.twitter').optional().isURL().withMessage('Invalid Twitter URL'),
    body('socialMedia.facebook').optional().isURL().withMessage('Invalid Facebook URL'),
    body('socialMedia.instagram').optional().isURL().withMessage('Invalid Instagram URL'),
    validateRequest
], createCompany);

router.put('/:id', [
    authorize('employer'),
    body('name').optional().trim().notEmpty().withMessage('Company name cannot be empty'),
    body('website').optional().isURL().withMessage('Invalid website URL'),
    body('description').optional().trim(),
    body('location').optional().trim(),
    body('size').optional().trim(),
    body('industry').optional().trim(),
    body('socialMedia.linkedin').optional().isURL().withMessage('Invalid LinkedIn URL'),
    body('socialMedia.twitter').optional().isURL().withMessage('Invalid Twitter URL'),
    body('socialMedia.facebook').optional().isURL().withMessage('Invalid Facebook URL'),
    body('socialMedia.instagram').optional().isURL().withMessage('Invalid Instagram URL'),
    validateRequest
], updateCompany);

router.delete('/:id', authorize('employer'), deleteCompany);

// Review and follow routes (job seekers only)
router.post('/:id/reviews', [
    authorize('jobseeker'),
    body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),
    body('title').trim().notEmpty().withMessage('Review title is required'),
    body('content').trim().notEmpty().withMessage('Review content is required'),
    body('pros').optional().trim(),
    body('cons').optional().trim(),
    validateRequest
], addReview);

router.post('/:id/follow', authorize('jobseeker'), toggleFollow);

export default router; 