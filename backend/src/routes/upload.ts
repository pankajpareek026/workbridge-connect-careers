import express from 'express';
import { protect } from '../middleware/auth';
import { upload } from '../utils/fileUpload';
import { AppError } from '../middleware/error';

const router = express.Router();

// Upload profile picture
router.post(
    '/profile-picture',
    protect,
    upload.single('profilePicture'),
    (req, res) => {
        if (!req.file) {
            throw new AppError('Please upload a file', 400);
        }
        res.status(200).json({
            success: true,
            data: {
                url: `/uploads/profile-pictures/${req.file.filename}`
            }
        });
    }
);

// Upload company logo
router.post(
    '/company-logo',
    protect,
    upload.single('companyLogo'),
    (req, res) => {
        if (!req.file) {
            throw new AppError('Please upload a file', 400);
        }
        res.status(200).json({
            success: true,
            data: {
                url: `/uploads/company-logos/${req.file.filename}`
            }
        });
    }
);

// Upload resume
router.post(
    '/resume',
    protect,
    upload.single('resume'),
    (req, res) => {
        if (!req.file) {
            throw new AppError('Please upload a file', 400);
        }
        res.status(200).json({
            success: true,
            data: {
                url: `/uploads/resumes/${req.file.filename}`
            }
        });
    }
);

export default router; 