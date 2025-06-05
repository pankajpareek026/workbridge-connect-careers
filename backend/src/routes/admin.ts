import express from 'express';
import {
    getUsers,
    updateUser,
    getCompanies,
    verifyCompany,
    getJobs,
    updateJobStatus,
    getReviews,
    verifyReview,
    getDashboardStats
} from '../controllers/admin';
import { protect, authorize } from '../middleware/auth';
import { validateRequest } from '../utils/validateRequest';
import { body, query } from 'express-validator';

const router = express.Router();

// Protect all admin routes
router.use(protect);
router.use(authorize('admin'));

// Dashboard
router.get('/dashboard', getDashboardStats);

// User Management
router.get('/users', [
    query('page').optional().isInt({ min: 1 }),
    query('limit').optional().isInt({ min: 1, max: 50 }),
    query('role').optional().isIn(['jobSeeker', 'employer', 'admin']),
    validateRequest
], getUsers);

router.put('/users/:id', [
    body('isActive').optional().isBoolean(),
    body('role').optional().isIn(['jobSeeker', 'employer', 'admin']),
    body('isVerified').optional().isBoolean(),
    validateRequest
], updateUser);

// Company Management
router.get('/companies', [
    query('page').optional().isInt({ min: 1 }),
    query('limit').optional().isInt({ min: 1, max: 50 }),
    query('isVerified').optional().isBoolean(),
    validateRequest
], getCompanies);

router.put('/companies/:id/verify', [
    body('isVerified').isBoolean(),
    validateRequest
], verifyCompany);

// Job Management
router.get('/jobs', [
    query('page').optional().isInt({ min: 1 }),
    query('limit').optional().isInt({ min: 1, max: 50 }),
    query('status').optional().isIn(['active', 'closed', 'draft']),
    validateRequest
], getJobs);

router.put('/jobs/:id/status', [
    body('status').isIn(['active', 'closed', 'draft']),
    validateRequest
], updateJobStatus);

// Review Management
router.get('/reviews', [
    query('page').optional().isInt({ min: 1 }),
    query('limit').optional().isInt({ min: 1, max: 50 }),
    query('isVerified').optional().isBoolean(),
    validateRequest
], getReviews);

router.put('/companies/:companyId/reviews/:reviewId/verify', [
    body('isVerified').isBoolean(),
    validateRequest
], verifyReview);

export default router; 