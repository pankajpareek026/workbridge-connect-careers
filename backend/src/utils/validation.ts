import { body, param, query } from 'express-validator';
import { validateRequest } from './validateRequest';

// User validation
export const registerValidation = [
    body('email')
        .isEmail()
        .withMessage('Please provide a valid email'),
    body('password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long'),
    body('firstName')
        .notEmpty()
        .withMessage('First name is required'),
    body('lastName')
        .notEmpty()
        .withMessage('Last name is required'),
    body('role')
        .isIn(['jobSeeker', 'employer'])
        .withMessage('Invalid role'),
    validateRequest,
];

export const loginValidation = [
    body('email')
        .isEmail()
        .withMessage('Please provide a valid email'),
    body('password')
        .notEmpty()
        .withMessage('Password is required'),
    validateRequest,
];

// Job validation
export const createJobValidation = [
    body('title')
        .notEmpty()
        .withMessage('Job title is required'),
    body('company')
        .notEmpty()
        .withMessage('Company name is required'),
    body('location')
        .notEmpty()
        .withMessage('Location is required'),
    body('type')
        .isIn(['Full-time', 'Part-time', 'Contract', 'Remote'])
        .withMessage('Invalid job type'),
    body('salary.min')
        .isNumeric()
        .withMessage('Minimum salary must be a number'),
    body('salary.max')
        .isNumeric()
        .withMessage('Maximum salary must be a number'),
    body('description')
        .notEmpty()
        .withMessage('Job description is required'),
    body('requirements')
        .isArray()
        .withMessage('Requirements must be an array'),
    body('responsibilities')
        .isArray()
        .withMessage('Responsibilities must be an array'),
    body('expiresAt')
        .isISO8601()
        .withMessage('Invalid expiration date'),
    validateRequest,
];

// Application validation
export const submitApplicationValidation = [
    body('jobId')
        .isMongoId()
        .withMessage('Invalid job ID'),
    body('resume')
        .notEmpty()
        .withMessage('Resume is required'),
    body('experience.years')
        .isNumeric()
        .withMessage('Experience years must be a number'),
    body('experience.description')
        .notEmpty()
        .withMessage('Experience description is required'),
    body('education.degree')
        .notEmpty()
        .withMessage('Degree is required'),
    body('education.field')
        .notEmpty()
        .withMessage('Field of study is required'),
    body('education.institution')
        .notEmpty()
        .withMessage('Institution is required'),
    body('education.graduationYear')
        .isNumeric()
        .withMessage('Graduation year must be a number'),
    body('skills')
        .isArray()
        .withMessage('Skills must be an array'),
    validateRequest,
];

// Query validation
export const paginationValidation = [
    query('page')
        .optional()
        .isInt({ min: 1 })
        .withMessage('Page must be a positive integer'),
    query('limit')
        .optional()
        .isInt({ min: 1, max: 100 })
        .withMessage('Limit must be between 1 and 100'),
    validateRequest,
];

// Parameter validation
export const idValidation = [
    param('id')
        .isMongoId()
        .withMessage('Invalid ID format'),
    validateRequest,
]; 