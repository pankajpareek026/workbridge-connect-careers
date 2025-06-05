import mongoose, { Document, Schema } from 'mongoose';

export interface IJob extends Document {
    title: string;
    company: {
        id: mongoose.Types.ObjectId;
        name: string;
        logo?: string;
    };
    location: string;
    type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
    salary: {
        min: number;
        max: number;
        currency: string;
    };
    description: string;
    requirements: string[];
    responsibilities: string[];
    benefits: string[];
    skills: string[];
    experience: {
        min: number;
        max: number;
    };
    education: string[];
    status: 'active' | 'closed' | 'draft';
    applications: mongoose.Types.ObjectId[];
    savedBy: mongoose.Types.ObjectId[];
    views: number;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
}

const jobSchema = new Schema<IJob>(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        company: {
            id: {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            logo: String,
        },
        location: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            enum: ['Full-time', 'Part-time', 'Contract', 'Remote'],
            required: true,
        },
        salary: {
            min: {
                type: Number,
                required: true,
            },
            max: {
                type: Number,
                required: true,
            },
            currency: {
                type: String,
                default: 'USD',
            },
        },
        description: {
            type: String,
            required: true,
        },
        requirements: [{
            type: String,
            required: true,
        }],
        responsibilities: [{
            type: String,
            required: true,
        }],
        benefits: [{
            type: String,
        }],
        skills: [{
            type: String,
        }],
        experience: {
            min: {
                type: Number,
                required: true,
            },
            max: {
                type: Number,
                required: true,
            },
        },
        education: [{
            type: String,
        }],
        status: {
            type: String,
            enum: ['active', 'closed', 'draft'],
            default: 'active',
        },
        applications: [{
            type: Schema.Types.ObjectId,
            ref: 'Application',
        }],
        savedBy: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        }],
        views: {
            type: Number,
            default: 0,
        },
        expiresAt: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

// Create indexes
jobSchema.index({ title: 'text', company: 'text', description: 'text' });
jobSchema.index({ location: 1 });
jobSchema.index({ type: 1 });
jobSchema.index({ 'salary.min': 1, 'salary.max': 1 });
jobSchema.index({ skills: 1 });
jobSchema.index({ status: 1 });
jobSchema.index({ expiresAt: 1 });

// Add text index for search functionality
jobSchema.index(
    { title: 'text', company: 'text', description: 'text' },
    { weights: { title: 10, company: 5, description: 1 } }
);

export const Job = mongoose.model<IJob>('Job', jobSchema); 