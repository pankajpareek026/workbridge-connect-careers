import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import FileUpload from '@/components/FileUpload';

const JobApplicationForm: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        gender: '',
        designation: '',
        experience: '',
        salary: '',
        industry: '',
        city: '',
        area: '',
        availableForInterview: '',
        resume: null as File | null,
    });

    const handleChange = (field: string, value: any) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement submit logic
        if (onClose) onClose();
    };

    return (
        <Card className="max-w-2xl mx-auto shadow-lg border-2 border-blue-100">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <CardTitle className="text-2xl text-gray-900 text-center">Apply for job now</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="firstName">First Name (नाम)</Label>
                            <Input id="firstName" value={form.firstName} onChange={e => handleChange('firstName', e.target.value)} placeholder="First Name (नाम)" required />
                        </div>
                        <div>
                            <Label htmlFor="lastName">Last Name (सरनेम)</Label>
                            <Input id="lastName" value={form.lastName} onChange={e => handleChange('lastName', e.target.value)} placeholder="Last Name (सरनेम)" required />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="mobile">Mobile (मोबाइल नंबर)</Label>
                        <Input id="mobile" value={form.mobile} onChange={e => handleChange('mobile', e.target.value)} placeholder="+91 Enter your mobile number" required />
                    </div>
                    <div>
                        <Label>Gender</Label>
                        <RadioGroup className="flex flex-row gap-6 mt-2" value={form.gender} onValueChange={val => handleChange('gender', val)}>
                            <div className="flex items-center gap-2">
                                <RadioGroupItem value="male" id="male" />
                                <Label htmlFor="male">Male (पुरुष)</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <RadioGroupItem value="female" id="female" />
                                <Label htmlFor="female">Female (स्त्री)</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <div>
                        <Label htmlFor="designation">Designation (पद का नाम)</Label>
                        <Input id="designation" value={form.designation} onChange={e => handleChange('designation', e.target.value)} placeholder="Designation" required />
                    </div>
                    <div>
                        <Label htmlFor="experience">Experience Level (अनुभव)</Label>
                        <Select value={form.experience} onValueChange={val => handleChange('experience', val)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Experience Level" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="fresher">Fresher</SelectItem>
                                <SelectItem value="1-2">1-2 Years</SelectItem>
                                <SelectItem value="2-5">2-5 Years</SelectItem>
                                <SelectItem value="5+">5+ Years</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="salary">Current Salary (Per Month) (वेतन)</Label>
                        <Input id="salary" value={form.salary} onChange={e => handleChange('salary', e.target.value)} placeholder="Enter current salary" />
                    </div>
                    <div>
                        <Label htmlFor="industry">Industry (उद्योग)</Label>
                        <Input id="industry" value={form.industry} onChange={e => handleChange('industry', e.target.value)} placeholder="Industry" />
                    </div>
                    <div>
                        <Label htmlFor="city">City (शहर)</Label>
                        <Input id="city" value={form.city} onChange={e => handleChange('city', e.target.value)} placeholder="City" />
                    </div>
                    <div>
                        <Label htmlFor="area">Area (इलाका)</Label>
                        <Input id="area" value={form.area} onChange={e => handleChange('area', e.target.value)} placeholder="Area" />
                    </div>
                    <div>
                        <Label>Upload Resume</Label>
                        <FileUpload onFileSelect={file => handleChange('resume', file)} currentFile={form.resume} />
                    </div>
                    <div>
                        <Label htmlFor="availableForInterview">क्या आप अगले 5 दिनों में INTERVIEW के लिए उपलब्ध हैं?</Label>
                        <Select value={form.availableForInterview} onValueChange={val => handleChange('availableForInterview', val)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="yes">Yes (हाँ)</SelectItem>
                                <SelectItem value="no">No (नहीं)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded mt-4">Submit</Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default JobApplicationForm; 