import React from 'react';
import JobApplicationForm from '@/components/JobApplicationForm';
import { Briefcase, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const JobApplication: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Page Header */}
            <header className="bg-white border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Button variant="ghost" onClick={() => navigate('/jobs')}>
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Jobs
                            </Button>
                            <div className="flex items-center space-x-2">
                                <Briefcase className="h-8 w-8 text-blue-600" />
                                <h1 className="text-2xl font-bold text-blue-700">Jay shree joranath jobs</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Apply for a Job</h1>
                        <p className="text-gray-600 text-lg">Fill in your details to apply for your desired position</p>
                    </div>
                    <JobApplicationForm />
                </div>
            </div>
        </div>
    );
};

export default JobApplication; 