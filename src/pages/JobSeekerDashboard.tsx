
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Bookmark, FileText, User, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const JobSeekerDashboard = () => {
  const navigate = useNavigate();

  const recentApplications = [
    { id: 1, title: "Software Developer", company: "Tech Corp", status: "pending", appliedDate: "2024-01-15" },
    { id: 2, title: "Product Manager", company: "StartupXYZ", status: "shortlisted", appliedDate: "2024-01-12" },
    { id: 3, title: "UX Designer", company: "Design Studio", status: "rejected", appliedDate: "2024-01-10" },
  ];

  const savedJobs = [
    { id: 1, title: "Frontend Developer", company: "WebTech", location: "Remote", type: "Full-time" },
    { id: 2, title: "Marketing Manager", company: "Growth Co", location: "New York", type: "Full-time" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'shortlisted': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'hired': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate('/profile')}>
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
              <Button variant="outline" onClick={() => navigate('/')}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Here's what's happening with your job search</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/jobs')}>
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-workbridge-primary" />
                <CardTitle className="text-lg">Browse Jobs</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Find your next opportunity</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/applications')}>
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-workbridge-secondary" />
                <CardTitle className="text-lg">My Applications</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Track application status</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/saved-jobs')}>
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Bookmark className="h-5 w-5 text-workbridge-accent" />
                <CardTitle className="text-lg">Saved Jobs</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">View bookmarked positions</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Applications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Recent Applications</span>
              </CardTitle>
              <CardDescription>Track your latest job applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentApplications.map((application) => (
                  <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{application.title}</h3>
                      <p className="text-gray-600">{application.company}</p>
                      <p className="text-sm text-gray-500">Applied: {application.appliedDate}</p>
                    </div>
                    <Badge className={getStatusColor(application.status)}>
                      {application.status}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4" onClick={() => navigate('/applications')}>
                View All Applications
              </Button>
            </CardContent>
          </Card>

          {/* Saved Jobs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bookmark className="h-5 w-5" />
                <span>Saved Jobs</span>
              </CardTitle>
              <CardDescription>Jobs you've bookmarked for later</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {savedJobs.map((job) => (
                  <div key={job.id} className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge variant="outline">{job.location}</Badge>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4" onClick={() => navigate('/saved-jobs')}>
                View All Saved Jobs
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerDashboard;
