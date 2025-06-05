import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export const config = {
    // Server
    port: process.env.PORT || 5000,
    nodeEnv: process.env.NODE_ENV || 'development',

    // Database
    mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/jay-shree-joranath-jobs',

    // JWT
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '30d',

    // Rate Limiting
    rateLimitWindowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 900000, // 15 minutes
    rateLimitMaxRequests: Number(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,

    // File Upload
    maxFileSize: Number(process.env.MAX_FILE_SIZE) || 5 * 1024 * 1024, // 5MB
    allowedFileTypes: ['image/jpeg', 'image/png', 'application/pdf'],
    uploadDir: process.env.UPLOAD_DIR || 'uploads',

    // Email
    email: {
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        user: process.env.SMTP_USER || '',
        password: process.env.SMTP_PASS || '',
        from: process.env.EMAIL_FROM || 'noreply@workbridge.com'
    },

    // Frontend URL (for CORS and email links)
    frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
    clientUrl: process.env.FRONTEND_URL || 'http://localhost:3000', // Alias for email templates
};