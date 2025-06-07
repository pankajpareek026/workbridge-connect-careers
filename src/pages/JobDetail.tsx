import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Briefcase, MapPin, Clock, DollarSign, Calendar, Users, ArrowLeft, Bookmark, Share2, Building } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const JobDetail = () => {
  const navigate = useNavigate();
  const { jobId } = useParams();
  const { toast } = useToast();
  const [isApplying, setIsApplying] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Mock job data - in real app this would come from an API
  const job = {
    id: parseInt(jobId || '1'),
    title: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    description: `We are seeking a talented Senior Frontend Developer to join our innovative team. You will be responsible for developing high-quality web applications using modern technologies and best practices.

As a Senior Frontend Developer, you will work closely with our design and backend teams to create seamless user experiences. You'll have the opportunity to mentor junior developers and contribute to architectural decisions.`,
    responsibilities: [
      "Develop responsive web applications using React, TypeScript, and modern CSS",
      "Collaborate with UX/UI designers to implement pixel-perfect designs",
      "Write clean, maintainable, and well-tested code",
      "Optimize applications for maximum speed and scalability",
      "Mentor junior developers and conduct code reviews",
      "Participate in agile development processes and team meetings"
    ],
    requirements: [
      "5+ years of experience in frontend development",
      "Expert knowledge of React, TypeScript, and modern JavaScript",
      "Experience with state management libraries (Redux, Zustand)",
      "Proficiency in CSS frameworks (Tailwind CSS, styled-components)",
      "Experience with testing frameworks (Jest, React Testing Library)",
      "Knowledge of build tools (Webpack, Vite) and CI/CD processes",
      "Strong understanding of web performance optimization",
      "Excellent communication and collaboration skills"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company matching",
      "Flexible working hours and remote work options",
      "Professional development budget ($2,000/year)",
      "Modern equipment and ergonomic workspace",
      "Unlimited PTO policy",
      "Team building events and company retreats"
    ],
    companyInfo: {
      name: "TechCorp Solutions",
      size: "200-500 employees",
      industry: "Software Technology",
      founded: "2015",
      description: "TechCorp Solutions is a leading software company specializing in enterprise solutions and cutting-edge web applications."
    },
    postedDate: "2024-01-15",
    deadline: "2024-02-15",
    applicants: 47,
    featured: true
  };

  const handleApply = async () => {
    setIsApplying(true);

    setTimeout(() => {
      setIsApplying(false);
      toast({
        title: "Application Submitted!",
        description: "Your application has been successfully submitted. We'll be in touch soon.",
      });
      navigate('/job-seeker-dashboard');
    }, 1500);
  };

  const toggleSave = () => {
    setIsSaved(!isSaved);
    toast({
      title: isSaved ? "Job Removed" : "Job Saved",
      description: isSaved ? "Job removed from your saved list." : "Job added to your saved list.",
    });
  };

  const shareJob = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied",
      description: "Job link copied to clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate('/jobs')}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Jobs
              </Button>
              <div className="flex items-center space-x-2">
                <Briefcase className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-blue-600">Jay shree joranath job</h1>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={shareJob}>
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" onClick={toggleSave}>
                <Bookmark className={`h-4 w-4 mr-2 ${isSaved ? 'fill-current' : ''}`} />
                {isSaved ? 'Saved' : 'Save'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <CardTitle className="text-2xl text-gray-900">{job.title}</CardTitle>
                      {job.featured && (
                        <Badge className="bg-blue-600 text-white">Featured</Badge>
                      )}
                    </div>
                    <p className="text-xl font-medium text-blue-600 mb-4">{job.company}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>{job.applicants} applicants</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Job Description */}
            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{job.description}</p>
                </div>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle>Key Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Benefits & Perks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Button */}
            <Card>
              <CardContent className="p-6">
                <Button
                  onClick={handleApply}
                  disabled={isApplying}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
                >
                  {isApplying ? "Submitting..." : "Apply for this Job"}
                </Button>
                <p className="text-sm text-gray-500 mt-3 text-center">
                  Application deadline: {new Date(job.deadline).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>

            {/* Job Details */}
            <Card>
              <CardHeader>
                <CardTitle>Job Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Posted</span>
                  <span className="font-medium">{new Date(job.postedDate).toLocaleDateString()}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-gray-600">Deadline</span>
                  <span className="font-medium">{new Date(job.deadline).toLocaleDateString()}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-gray-600">Job Type</span>
                  <span className="font-medium">{job.type}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-gray-600">Location</span>
                  <span className="font-medium">{job.location}</span>
                </div>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building className="h-5 w-5" />
                  <span>About {job.companyInfo.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700 text-sm">{job.companyInfo.description}</p>
                <Separator />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Industry</span>
                    <span className="font-medium">{job.companyInfo.industry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Company Size</span>
                    <span className="font-medium">{job.companyInfo.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Founded</span>
                    <span className="font-medium">{job.companyInfo.founded}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View Company Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
