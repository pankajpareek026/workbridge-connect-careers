import express from 'express';
import {
    submitApplication,
    getJobApplications,
    getMyApplications,
    getApplication,
    updateApplicationStatus,
    withdrawApplication,
} from '../controllers/application';
import { protect, authorize } from '../middleware/auth';

const router = express.Router();

// All routes are protected
router.use(protect);

// Job seeker routes
router.post('/', authorize('jobSeeker'), submitApplication);
router.get('/my-applications', authorize('jobSeeker'), getMyApplications);
router.delete('/:id', authorize('jobSeeker'), withdrawApplication);

// Employer routes
router.get('/job/:jobId', authorize('employer'), getJobApplications);
router.put('/:id/status', authorize('employer'), updateApplicationStatus);

// Shared routes (both job seeker and employer can access)
router.get('/:id', getApplication);

export default router; 