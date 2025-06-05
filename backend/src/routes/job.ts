import express from 'express';
import {
    createJob,
    getJobs,
    getJob,
    updateJob,
    deleteJob,
    toggleSaveJob,
    getSavedJobs,
} from '../controllers/job';
import { protect, authorize } from '../middleware/auth';

const router = express.Router();

// Public routes
router.get('/', getJobs);
router.get('/:id', getJob);

// Protected routes
router.use(protect);

// Job seeker routes
router.get('/saved', authorize('jobSeeker'), getSavedJobs);
router.post('/:id/save', authorize('jobSeeker'), toggleSaveJob);

// Employer routes
router.post('/', authorize('employer'), createJob);
router.put('/:id', authorize('employer'), updateJob);
router.delete('/:id', authorize('employer'), deleteJob);

export default router; 