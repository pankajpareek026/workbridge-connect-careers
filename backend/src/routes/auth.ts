import express from 'express';
import {
    register,
    login,
    getMe,
    forgotPassword,
    resetPassword,
    updatePassword,
} from '../controllers/auth';
import { protect } from '../middleware/auth';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.put('/update-password', protect, updatePassword);

export default router; 