
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
            <DialogContent className="sm:max-w-[425px] max-w-[90vw] mx-4">
                <DialogHeader>
                    <DialogTitle className="text-center text-xl sm:text-2xl font-bold text-gray-900 px-2">
                        सूरत में जॉब के लिए
                    </DialogTitle>
                    <DialogDescription className="text-center text-gray-600 text-sm sm:text-base px-2">
                        Click the button below to find jobs in Surat.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4 px-2">
                    <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded text-sm sm:text-base"
                        onClick={() => {
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
