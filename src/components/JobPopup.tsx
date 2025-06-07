import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';

interface JobPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const JobPopup: React.FC<JobPopupProps> = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent
                hideClose
                className="sm:max-w-[425px] max-w-[90vw] mx-4 bg-white border-2 border-gray-200 shadow-xl left-1/2 top-8 translate-x-[-50%] translate-y-0"
            >
                <DialogHeader>
                    <DialogTitle className="text-center text-xl sm:text-2xl font-bold text-gray-900 px-2">
                        सूरत में जॉब के लिए
                    </DialogTitle>
                    <DialogDescription className="text-center text-gray-600 text-sm sm:text-base px-2">
                        Click the button below to find jobs in your city.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4 px-2">
                    <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded text-sm sm:text-base"
                        onClick={() => {
                            navigate('/job-application');
                            onClose();
                        }}
                    >
                        CLICK HERE FOR JOBS
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default JobPopup;
