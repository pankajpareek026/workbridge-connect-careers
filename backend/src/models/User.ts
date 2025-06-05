import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: 'jobSeeker' | 'employer' | 'admin';
    isActive: boolean;
    isVerified: boolean;
    verificationToken?: string;
    verificationTokenExpires?: Date;
    resetPasswordToken?: string;
    resetPasswordExpires?: Date;
    profileCompleted: boolean;
    lastLogin?: Date;
    company?: {
        name: string;
        website?: string;
        description?: string;
        logo?: string;
        location?: string;
        size?: string;
        industry?: string;
        isVerified: boolean;
    };
    jobSeeker?: {
        title?: string;
        location?: string;
        bio?: string;
        skills?: string[];
        experience?: {
            title: string;
            company: string;
            startDate: Date;
            endDate?: Date;
            description?: string;
        }[];
        education?: {
            school: string;
            degree: string;
            field: string;
            startDate: Date;
            endDate?: Date;
        }[];
        resume?: string;
        profilePicture?: string;
    };
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        enum: ['jobSeeker', 'employer', 'admin'],
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: String,
    verificationTokenExpires: Date,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    profileCompleted: {
        type: Boolean,
        default: false
    },
    lastLogin: Date,
    company: {
        name: String,
        website: String,
        description: String,
        logo: String,
        location: String,
        size: String,
        industry: String,
        isVerified: {
            type: Boolean,
            default: false
        }
    },
    jobSeeker: {
        title: String,
        location: String,
        bio: String,
        skills: [String],
        experience: [{
            title: {
                type: String,
                required: true
            },
            company: {
                type: String,
                required: true
            },
            startDate: {
                type: Date,
                required: true
            },
            endDate: Date,
            description: String
        }],
        education: [{
            school: {
                type: String,
                required: true
            },
            degree: {
                type: String,
                required: true
            },
            field: {
                type: String,
                required: true
            },
            startDate: {
                type: Date,
                required: true
            },
            endDate: Date
        }],
        resume: String,
        profilePicture: String
    }
}, {
    timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error as Error);
    }
});

// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password);
};

// Create indexes
userSchema.index({ email: 1 });
userSchema.index({ role: 1 });
userSchema.index({ 'company.name': 'text' });
userSchema.index({ 'jobSeeker.skills': 1 });
userSchema.index({ 'jobSeeker.location': 1 });

export const User = mongoose.model<IUser>('User', userSchema); 