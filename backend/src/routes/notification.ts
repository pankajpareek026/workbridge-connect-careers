import express from 'express';
import {
    getNotifications,
    markAsRead,
    markAllAsRead,
    deleteNotification
} from '../controllers/notification';
import { protect } from '../middleware/auth';
import { validateRequest } from '../utils/validateRequest';
import { query } from 'express-validator';

const router = express.Router();

// Protect all notification routes
router.use(protect);

// Get notifications
router.get('/', [
    query('page').optional().isInt({ min: 1 }),
    query('limit').optional().isInt({ min: 1, max: 50 }),
    query('type').optional().isIn(['application', 'job', 'company', 'system']),
    query('isRead').optional().isBoolean(),
    validateRequest
], getNotifications);

// Mark notification as read
router.put('/:id/read', markAsRead);

// Mark all notifications as read
router.put('/read-all', markAllAsRead);

// Delete notification
router.delete('/:id', deleteNotification);

export default router; 