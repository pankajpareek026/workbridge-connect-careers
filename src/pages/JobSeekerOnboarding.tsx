import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Briefcase, User, Plus, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import FileUpload from '@/components/FileUpload';

const JobSeekerOnboarding = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    location: '',
    phoneNumber: '',
    email: ''
  });

  const [education, setEducation] = useState([
    { degree: '', institution: '', year: '', grade: '' }
  ]);

  const [experience, setExperience] = useState([
    { jobTitle: '', company: '', duration: '', description: '' }
  ]);

  const [preferences, setPreferences] = useState({
    preferredLocations: '',
    jobCategories: '',
    expectedSalary: '',
    jobType: ''
  });

  const addEducation = () => {
    setEducation([...education, { degree: '', institution: '', year: '', grade: '' }]);
  };

  const removeEducation = (index: number) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  const addExperience = () => {
    setExperience([...experience, { jobTitle: '', company: '', duration: '', description: '' }]);
  };

  const removeExperience = (index: number) => {
    setExperience(experience.filter((_, i) => i !== index));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Profile Setup Complete",
        description: "Welcome to WorkBridge! Your profile has been created successfully.",
      });
      navigate('/job-seeker-dashboard');
    }, 2000);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  value={personalInfo.fullName}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, fullName: e.target.value })}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={personalInfo.dateOfBirth}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, dateOfBirth: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="gender">Gender</Label>
                <Select onValueChange={(value) => setPersonalInfo({ ...personalInfo, gender: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="location">Current Location</Label>
                <Input
                  id="location"
                  value={personalInfo.location}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, location: e.target.value })}
                  placeholder="City, State"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Education</h3>
              <Button onClick={addEducation} variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Education
              </Button>
            </div>
            {education.map((edu, index) => (
              <Card key={index} className="p-4">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-medium">Education {index + 1}</h4>
                  {education.length > 1 && (
                    <Button onClick={() => removeEducation(index)} variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Degree/Qualification</Label>
                    <Input
                      value={edu.degree}
                      onChange={(e) => {
                        const newEducation = [...education];
                        newEducation[index].degree = e.target.value;
                        setEducation(newEducation);
                      }}
                      placeholder="e.g., Bachelor's in Computer Science"
                    />
                  </div>
                  <div>
                    <Label>Institution</Label>
                    <Input
                      value={edu.institution}
                      onChange={(e) => {
                        const newEducation = [...education];
                        newEducation[index].institution = e.target.value;
                        setEducation(newEducation);
                      }}
                      placeholder="University/College name"
                    />
                  </div>
                  <div>
                    <Label>Year of Completion</Label>
                    <Input
                      value={edu.year}
                      onChange={(e) => {
                        const newEducation = [...education];
                        newEducation[index].year = e.target.value;
                        setEducation(newEducation);
                      }}
                      placeholder="2023"
                    />
                  </div>
                  <div>
                    <Label>Grade/CGPA</Label>
                    <Input
                      value={edu.grade}
                      onChange={(e) => {
                        const newEducation = [...education];
                        newEducation[index].grade = e.target.value;
                        setEducation(newEducation);
                      }}
                      placeholder="8.5 CGPA or 85%"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Work Experience</h3>
              <Button onClick={addExperience} variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Experience
              </Button>
            </div>
            {experience.map((exp, index) => (
              <Card key={index} className="p-4">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-medium">Experience {index + 1}</h4>
                  {experience.length > 1 && (
                    <Button onClick={() => removeExperience(index)} variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Job Title</Label>
                    <Input
                      value={exp.jobTitle}
                      onChange={(e) => {
                        const newExperience = [...experience];
                        newExperience[index].jobTitle = e.target.value;
                        setExperience(newExperience);
                      }}
                      placeholder="e.g., Software Developer"
                    />
                  </div>
                  <div>
                    <Label>Company</Label>
                    <Input
                      value={exp.company}
                      onChange={(e) => {
                        const newExperience = [...experience];
                        newExperience[index].company = e.target.value;
                        setExperience(newExperience);
                      }}
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <Label>Duration</Label>
                    <Input
                      value={exp.duration}
                      onChange={(e) => {
                        const newExperience = [...experience];
                        newExperience[index].duration = e.target.value;
                        setExperience(newExperience);
                      }}
                      placeholder="Jan 2020 - Dec 2022"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label>Job Description</Label>
                    <Textarea
                      value={exp.description}
                      onChange={(e) => {
                        const newExperience = [...experience];
                        newExperience[index].description = e.target.value;
                        setExperience(newExperience);
                      }}
                      placeholder="Describe your responsibilities and achievements"
                      rows={3}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Job Preferences & Resume</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="preferredLocations">Preferred Locations</Label>
                <Input
                  id="preferredLocations"
                  value={preferences.preferredLocations}
                  onChange={(e) => setPreferences({ ...preferences, preferredLocations: e.target.value })}
                  placeholder="e.g., Mumbai, Delhi, Bangalore"
                />
              </div>
              <div>
                <Label htmlFor="jobCategories">Job Categories</Label>
                <Input
                  id="jobCategories"
                  value={preferences.jobCategories}
                  onChange={(e) => setPreferences({ ...preferences, jobCategories: e.target.value })}
                  placeholder="e.g., IT, Sales, Marketing"
                />
              </div>
              <div>
                <Label htmlFor="expectedSalary">Expected Salary (per month)</Label>
                <Input
                  id="expectedSalary"
                  value={preferences.expectedSalary}
                  onChange={(e) => setPreferences({ ...preferences, expectedSalary: e.target.value })}
                  placeholder="e.g., 50000"
                />
              </div>
              <div>
                <Label htmlFor="jobType">Preferred Job Type</Label>
                <Select onValueChange={(value) => setPreferences({ ...preferences, jobType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select job type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full Time</SelectItem>
                    <SelectItem value="part-time">Part Time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-6">
              <Label>Upload Resume</Label>
              <div className="mt-2">
                <FileUpload
                  onFileSelect={setResumeFile}
                  currentFile={resumeFile}
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Briefcase className="h-8 w-8 text-workbridge-primary" />
            <h1 className="text-2xl font-bold text-workbridge-primary">Jay shree joranath jobs</h1>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Complete Your Profile</h2>
          <p className="text-gray-600 mt-2">Step {currentStep} of 4</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`flex items-center ${step <= currentStep ? 'text-workbridge-primary' : 'text-gray-400'
                  }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step <= currentStep
                      ? 'border-workbridge-primary bg-workbridge-primary text-white'
                      : 'border-gray-300'
                    }`}
                >
                  {step}
                </div>
                <span className="ml-2 text-sm hidden md:block">
                  {step === 1 && 'Personal Info'}
                  {step === 2 && 'Education'}
                  {step === 3 && 'Experience'}
                  {step === 4 && 'Preferences'}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-workbridge-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Content */}
        <Card className="shadow-lg border-0">
          <CardContent className="p-6">
            {renderStep()}

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              <Button
                onClick={handleNext}
                className="bg-workbridge-primary hover:bg-workbridge-primary/90"
                disabled={isLoading}
              >
                {isLoading ? "Setting up..." : currentStep === 4 ? "Complete Profile" : "Next"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JobSeekerOnboarding;
