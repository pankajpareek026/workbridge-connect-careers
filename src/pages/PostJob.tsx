
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Briefcase, Plus, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PostJob = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isDraft, setIsDraft] = useState(false);

  const [jobData, setJobData] = useState({
    title: '',
    category: '',
    location: '',
    jobType: '',
    workMode: '',
    experience: '',
    salaryMin: '',
    salaryMax: '',
    currency: 'INR',
    description: '',
    requirements: '',
    responsibilities: '',
    benefits: '',
    skills: '',
    applicationDeadline: '',
    contactEmail: '',
    urgentHiring: false
  });

  const handleSubmit = (e: React.FormEvent, saveAsDraft = false) => {
    e.preventDefault();
    setIsLoading(true);
    setIsDraft(saveAsDraft);
    
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: saveAsDraft ? "Job Saved as Draft" : "Job Posted Successfully",
        description: saveAsDraft 
          ? "Your job posting has been saved as draft."
          : "Your job posting is now live and visible to job seekers.",
      });
      navigate('/employer-dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Briefcase className="h-8 w-8 text-workbridge-primary" />
              <h1 className="text-2xl font-bold text-workbridge-primary">WorkBridge</h1>
            </div>
            <Button variant="outline" onClick={() => navigate('/employer-dashboard')}>
              Back to Dashboard
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Post a New Job</h1>
          <p className="text-gray-600">Fill in the details to create your job posting</p>
        </div>

        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Plus className="h-5 w-5" />
              <span>Job Details</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-6">
              {/* Basic Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="title">Job Title *</Label>
                    <Input
                      id="title"
                      value={jobData.title}
                      onChange={(e) => setJobData({...jobData, title: e.target.value})}
                      placeholder="e.g., Senior Software Developer"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="category">Job Category *</Label>
                    <Select onValueChange={(value) => setJobData({...jobData, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="it">Information Technology</SelectItem>
                        <SelectItem value="marketing">Marketing & Sales</SelectItem>
                        <SelectItem value="finance">Finance & Accounting</SelectItem>
                        <SelectItem value="hr">Human Resources</SelectItem>
                        <SelectItem value="design">Design & Creative</SelectItem>
                        <SelectItem value="operations">Operations</SelectItem>
                        <SelectItem value="customer-service">Customer Service</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      value={jobData.location}
                      onChange={(e) => setJobData({...jobData, location: e.target.value})}
                      placeholder="City, State"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="jobType">Job Type *</Label>
                    <Select onValueChange={(value) => setJobData({...jobData, jobType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full Time</SelectItem>
                        <SelectItem value="part-time">Part Time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="internship">Internship</SelectItem>
                        <SelectItem value="freelance">Freelance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="workMode">Work Mode *</Label>
                    <Select onValueChange={(value) => setJobData({...jobData, workMode: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select work mode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="onsite">On-site</SelectItem>
                        <SelectItem value="remote">Remote</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="experience">Experience Required *</Label>
                    <Select onValueChange={(value) => setJobData({...jobData, experience: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years (Fresher)</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-8">5-8 years</SelectItem>
                        <SelectItem value="8+">8+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Salary Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Salary Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="salaryMin">Minimum Salary *</Label>
                    <Input
                      id="salaryMin"
                      type="number"
                      value={jobData.salaryMin}
                      onChange={(e) => setJobData({...jobData, salaryMin: e.target.value})}
                      placeholder="50000"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="salaryMax">Maximum Salary *</Label>
                    <Input
                      id="salaryMax"
                      type="number"
                      value={jobData.salaryMax}
                      onChange={(e) => setJobData({...jobData, salaryMax: e.target.value})}
                      placeholder="80000"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="currency">Currency</Label>
                    <Select onValueChange={(value) => setJobData({...jobData, currency: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="INR" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="INR">INR (₹)</SelectItem>
                        <SelectItem value="USD">USD ($)</SelectItem>
                        <SelectItem value="EUR">EUR (€)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Job Description */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Job Description</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="description">Job Description *</Label>
                    <Textarea
                      id="description"
                      value={jobData.description}
                      onChange={(e) => setJobData({...jobData, description: e.target.value})}
                      placeholder="Describe the role, company culture, and what makes this opportunity unique..."
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="responsibilities">Key Responsibilities *</Label>
                    <Textarea
                      id="responsibilities"
                      value={jobData.responsibilities}
                      onChange={(e) => setJobData({...jobData, responsibilities: e.target.value})}
                      placeholder="List the main responsibilities and duties..."
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="requirements">Requirements & Qualifications *</Label>
                    <Textarea
                      id="requirements"
                      value={jobData.requirements}
                      onChange={(e) => setJobData({...jobData, requirements: e.target.value})}
                      placeholder="List the required skills, qualifications, and experience..."
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="skills">Required Skills (comma-separated)</Label>
                    <Input
                      id="skills"
                      value={jobData.skills}
                      onChange={(e) => setJobData({...jobData, skills: e.target.value})}
                      placeholder="React, Node.js, MongoDB, AWS"
                    />
                  </div>

                  <div>
                    <Label htmlFor="benefits">Benefits & Perks</Label>
                    <Textarea
                      id="benefits"
                      value={jobData.benefits}
                      onChange={(e) => setJobData({...jobData, benefits: e.target.value})}
                      placeholder="Health insurance, flexible working hours, professional development..."
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="applicationDeadline">Application Deadline</Label>
                    <Input
                      id="applicationDeadline"
                      type="date"
                      value={jobData.applicationDeadline}
                      onChange={(e) => setJobData({...jobData, applicationDeadline: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactEmail">Contact Email</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      value={jobData.contactEmail}
                      onChange={(e) => setJobData({...jobData, contactEmail: e.target.value})}
                      placeholder="hr@company.com"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2 mt-4">
                  <Checkbox
                    id="urgentHiring"
                    checked={jobData.urgentHiring}
                    onCheckedChange={(checked) => setJobData({...jobData, urgentHiring: checked as boolean})}
                  />
                  <Label htmlFor="urgentHiring">Mark as urgent hiring</Label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between pt-6 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={(e) => handleSubmit(e, true)}
                  disabled={isLoading}
                  className="flex items-center space-x-2"
                >
                  <Save className="h-4 w-4" />
                  <span>{isLoading && isDraft ? "Saving..." : "Save as Draft"}</span>
                </Button>
                
                <Button
                  type="submit"
                  className="bg-workbridge-primary hover:bg-workbridge-primary/90"
                  disabled={isLoading}
                >
                  {isLoading && !isDraft ? "Publishing..." : "Publish Job"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PostJob;
