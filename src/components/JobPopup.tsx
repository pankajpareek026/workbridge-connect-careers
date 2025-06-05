import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface JobPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onButtonClick: () => void;
}

const JobPopup: React.FC<JobPopupProps> = ({ isOpen, onClose, onButtonClick }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-center text-2xl font-bold text-gray-900">सूरत में जॉब के लिए</DialogTitle>
                    <DialogDescription className="text-center text-gray-600">
                        Click the button below to find jobs in Surat.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                            // Handle navigation or action when button is clicked
                            onButtonClick();
                            onClose();
                        }}
                    >
                        CLICK HERE
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default JobPopup;