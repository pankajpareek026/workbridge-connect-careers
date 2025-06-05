import nodemailer from 'nodemailer';
import { config } from '../config/config';

// Create reusable transporter
const transporter = nodemailer.createTransport({
    host: config.email.host,
    port: config.email.port,
    secure: config.email.secure,
    auth: {
        user: config.email.user,
        pass: config.email.password
    }
});

interface EmailTemplateData {
    name?: string;
    token?: string;
    jobTitle?: string;
    companyName?: string;
    status?: string;
}

// Email templates
const templates = {
    welcome: (data: EmailTemplateData) => ({
        subject: 'Welcome to WorkBridge!',
        html: `
            <h1>Welcome to WorkBridge, ${data.name}!</h1>
            <p>We're excited to have you join our community of job seekers and employers.</p>
            <p>Get started by completing your profile and exploring opportunities.</p>
        `
    }),
    verification: (data: EmailTemplateData) => ({
        subject: 'Verify Your Email',
        html: `
            <h1>Hello ${data.name},</h1>
            <p>Please verify your email address by clicking the link below:</p>
            <a href="${config.clientUrl}/verify-email?token=${data.token}">Verify Email</a>
        `
    }),
    resetPassword: (data: EmailTemplateData) => ({
        subject: 'Reset Your Password',
        html: `
            <h1>Hello ${data.name},</h1>
            <p>You requested to reset your password. Click the link below to proceed:</p>
            <a href="${config.clientUrl}/reset-password?token=${data.token}">Reset Password</a>
            <p>If you didn't request this, please ignore this email.</p>
        `
    }),
    applicationReceived: (data: EmailTemplateData) => ({
        subject: 'Application Received',
        html: `
            <h1>Hello ${data.name},</h1>
            <p>Your application for ${data.jobTitle} at ${data.companyName} has been received.</p>
            <p>We'll keep you updated on the status of your application.</p>
        `
    }),
    applicationStatus: (data: EmailTemplateData) => ({
        subject: 'Application Status Update',
        html: `
            <h1>Hello ${data.name},</h1>
            <p>Your application status for ${data.jobTitle} at ${data.companyName} has been updated to: ${data.status}</p>
        `
    })
};

type EmailTemplate = keyof typeof templates;

// Send email function
export const sendEmail = async (
    to: string,
    template: EmailTemplate,
    data: EmailTemplateData
): Promise<void> => {
    try {
        const { subject, html } = templates[template](data);

        const mailOptions = {
            from: `"WorkBridge" <${config.email.from}>`,
            to,
            subject,
            html
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Email sending failed:', error);
        throw new Error('Failed to send email');
    }
}; 