import { Request, Response } from 'express';
import { Notification } from '../models/Notification';

// Get user's notifications
export const getNotifications = async (req: Request, res: Response) => {
    try {
        const { page = 1, limit = 10, type, isRead } = req.query;
        const query: any = { recipient: req.user?.id };

        if (type) query.type = type;
        if (isRead !== undefined) query.isRead = isRead;

        const notifications = await Notification.find(query)
            .sort({ createdAt: -1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        const total = await Notification.countDocuments(query);
        const unreadCount = await Notification.countDocuments({
            recipient: req.user?.id,
            isRead: false
        });

        res.status(200).json({
            success: true,
            data: notifications,
            unreadCount,
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
            message: 'Error fetching notifications',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

// Mark notification as read
export const markAsRead = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const notification = await Notification.findOneAndUpdate(
            { _id: id, recipient: req.user?.id },
            { isRead: true },
            { new: true }
        );

        if (!notification) {
            return res.status(404).json({
                success: false,
                message: 'Notification not found'
            });
        }

        res.status(200).json({
            success: true,
            data: notification
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error marking notification as read',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

// Mark all notifications as read
export const markAllAsRead = async (req: Request, res: Response) => {
    try {
        await Notification.updateMany(
            { recipient: req.user?.id, isRead: false },
            { isRead: true }
        );

        res.status(200).json({
            success: true,
            message: 'All notifications marked as read'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error marking all notifications as read',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

// Delete notification
export const deleteNotification = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const notification = await Notification.findOneAndDelete({
            _id: id,
            recipient: req.user?.id
        });

        if (!notification) {
            return res.status(404).json({
                success: false,
                message: 'Notification not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Notification deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting notification',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

// Create notification (internal use)
export const createNotification = async (
    recipientId: string,
    type: 'application' | 'job' | 'company' | 'system',
    title: string,
    message: string,
    data?: {
        jobId?: string;
        companyId?: string;
        applicationId?: string;
    }
) => {
    try {
        const notification = await Notification.create({
            recipient: recipientId,
            type,
            title,
            message,
            data
        });

        return notification;
    } catch (error) {
        console.error('Error creating notification:', error);
        return null;
    }
}; 