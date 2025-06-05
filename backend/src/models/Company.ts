import mongoose, { Document, Schema } from 'mongoose';

export interface ICompany extends Document {
    name: string;
    owner: mongoose.Types.ObjectId;
    website?: string;
    description?: string;
    logo?: string;
    location?: string;
    size?: string;
    industry?: string;
    isVerified: boolean;
    verificationDocuments?: string[];
    socialMedia?: {
        linkedin?: string;
        twitter?: string;
        facebook?: string;
        instagram?: string;
    };
    reviews: {
        user: mongoose.Types.ObjectId;
        rating: number;
        title: string;
        content: string;
        pros?: string;
        cons?: string;
        isVerified: boolean;
        createdAt: Date;
    }[];
    averageRating: number;
    totalReviews: number;
    jobs: mongoose.Types.ObjectId[];
    followers: mongoose.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}

const companySchema = new Schema<ICompany>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    website: String,
    description: String,
    logo: String,
    location: String,
    size: String,
    industry: String,
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationDocuments: [String],
    socialMedia: {
        linkedin: String,
        twitter: String,
        facebook: String,
        instagram: String
    },
    reviews: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        pros: String,
        cons: String,
        isVerified: {
            type: Boolean,
            default: false
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }],
    averageRating: {
        type: Number,
        default: 0
    },
    totalReviews: {
        type: Number,
        default: 0
    },
    jobs: [{
        type: Schema.Types.ObjectId,
        ref: 'Job'
    }],
    followers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
});

// Create indexes
companySchema.index({ name: 'text', description: 'text' });
companySchema.index({ industry: 1 });
companySchema.index({ location: 1 });
companySchema.index({ isVerified: 1 });
companySchema.index({ averageRating: -1 });

// Update average rating and total reviews before saving
companySchema.pre('save', function (next) {
    if (this.reviews.length > 0) {
        const totalRating = this.reviews.reduce((sum, review) => sum + review.rating, 0);
        this.averageRating = totalRating / this.reviews.length;
        this.totalReviews = this.reviews.length;
    }
    next();
});

export const Company = mongoose.model<ICompany>('Company', companySchema); 