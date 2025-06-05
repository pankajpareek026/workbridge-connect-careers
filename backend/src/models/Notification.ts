import mongoose, { Document, Schema } from 'mongoose';

export interface INotification extends Document {
    recipient: mongoose.Types.ObjectId;
    type: 'application' | 'job' | 'company' | 'system';
    title: string;
    message: string;
    data?: {
        jobId?: mongoose.Types.ObjectId;
        companyId?: mongoose.Types.ObjectId;
        applicationId?: mongoose.Types.ObjectId;
    };
    isRead: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const notificationSchema = new Schema<INotification>({
    recipient: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String,
        enum: ['application', 'job', 'company', 'system'],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    data: {
        jobId: {
            type: Schema.Types.ObjectId,
            ref: 'Job'
        },
        companyId: {
            type: Schema.Types.ObjectId,
            ref: 'Company'
        },
        applicationId: {
            type: Schema.Types.ObjectId,
            ref: 'Application'
        }
    },
    isRead: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

// Create indexes
notificationSchema.index({ recipient: 1, createdAt: -1 });
notificationSchema.index({ isRead: 1 });
notificationSchema.index({ type: 1 });

export const Notification = mongoose.model<INotification>('Notification', notificationSchema); 