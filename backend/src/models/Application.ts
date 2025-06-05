import mongoose, { Document, Schema } from 'mongoose';

export interface IApplication extends Document {
    job: mongoose.Types.ObjectId;
    applicant: mongoose.Types.ObjectId;
    status: 'pending' | 'reviewing' | 'shortlisted' | 'rejected' | 'accepted';
    resume: string;
    coverLetter?: string;
    experience: {
        years: number;
        description: string;
    };
    education: {
        degree: string;
        field: string;
        institution: string;
        graduationYear: number;
    };
    skills: string[];
    feedback?: {
        from: mongoose.Types.ObjectId;
        message: string;
        rating?: number;
        createdAt: Date;
    }[];
    notes?: {
        from: mongoose.Types.ObjectId;
        message: string;
        createdAt: Date;
    }[];
    interview?: {
        scheduledAt: Date;
        type: 'phone' | 'video' | 'onsite';
        status: 'scheduled' | 'completed' | 'cancelled';
        feedback?: string;
        rating?: number;
    };
    createdAt: Date;
    updatedAt: Date;
}

const applicationSchema = new Schema<IApplication>({
    job: {
        type: Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    applicant: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'reviewing', 'shortlisted', 'rejected', 'accepted'],
        default: 'pending'
    },
    resume: {
        type: String,
        required: true
    },
    coverLetter: String,
    experience: {
        years: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    education: {
        degree: {
            type: String,
            required: true
        },
        field: {
            type: String,
            required: true
        },
        institution: {
            type: String,
            required: true
        },
        graduationYear: {
            type: Number,
            required: true
        }
    },
    skills: [{
        type: String
    }],
    feedback: [{
        from: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        message: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            min: 1,
            max: 5
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }],
    notes: [{
        from: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        message: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }],
    interview: {
        scheduledAt: Date,
        type: {
            type: String,
            enum: ['phone', 'video', 'onsite']
        },
        status: {
            type: String,
            enum: ['scheduled', 'completed', 'cancelled']
        },
        feedback: String,
        rating: {
            type: Number,
            min: 1,
            max: 5
        }
    }
}, {
    timestamps: true
});

// Create indexes
applicationSchema.index({ job: 1, applicant: 1 }, { unique: true });
applicationSchema.index({ status: 1 });
applicationSchema.index({ 'interview.scheduledAt': 1 });
applicationSchema.index({ createdAt: 1 });

export const Application = mongoose.model<IApplication>('Application', applicationSchema); 