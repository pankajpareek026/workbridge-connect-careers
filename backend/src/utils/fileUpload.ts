import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { Request } from 'express';

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure storage
const storage = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb) => {
        let uploadPath = uploadsDir;

        // Create subdirectories based on file type
        if (file.fieldname === 'resume') {
            uploadPath = path.join(uploadsDir, 'resumes');
        } else if (file.fieldname === 'profilePicture') {
            uploadPath = path.join(uploadsDir, 'profiles');
        } else if (file.fieldname === 'companyLogo') {
            uploadPath = path.join(uploadsDir, 'logos');
        }

        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: (req: Request, file: Express.Multer.File, cb) => {
        // Generate unique filename
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

// File filter
const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    // Allowed file types
    const allowedTypes = {
        'resume': ['.pdf', '.doc', '.docx'],
        'profilePicture': ['.jpg', '.jpeg', '.png'],
        'companyLogo': ['.jpg', '.jpeg', '.png']
    };

    const ext = path.extname(file.originalname).toLowerCase();
    const allowedExtensions = allowedTypes[file.fieldname as keyof typeof allowedTypes] || [];

    if (allowedExtensions.includes(ext)) {
        cb(null, true);
    } else {
        cb(new Error(`Invalid file type. Allowed types: ${allowedExtensions.join(', ')}`));
    }
};

// Configure upload limits
const limits = {
    fileSize: 5 * 1024 * 1024, // 5MB
    files: 1
};

// Create multer instance
export const upload = multer({
    storage,
    fileFilter,
    limits
});

// Helper function to delete file
export const deleteFile = (filePath: string) => {
    const fullPath = path.join(uploadsDir, filePath);
    if (fs.existsSync(fullPath)) {
        fs.unlinkSync(fullPath);
    }
}; 