import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Users, Plus, FileText, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EmployerDashboard = () => {
  const navigate = useNavigate();

  const activeJobs = [
    { id: 1, title: "Senior Developer", applications: 24, views: 156, posted: "2024-01-10", deadline: "2024-02-10" },
    { id: 2, title: "Product Manager", applications: 18, views: 203, posted: "2024-01-08", deadline: "2024-02-08" },
    { id: 3, title: "UX Designer", applications: 31, views: 189, posted: "2024-01-05", deadline: "2024-02-05" },
  ];

  const recentApplications = [
    { id: 1, jobTitle: "Senior Developer", candidateName: "Alice Johnson", appliedDate: "2024-01-15", status: "new" },
    { id: 2, jobTitle: "Product Manager", candidateName: "Bob Smith", appliedDate: "2024-01-14", status: "reviewed" },
    { id: 3, jobTitle: "UX Designer", candidateName: "Carol White", appliedDate: "2024-01-13", status: "shortlisted" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'reviewed': return 'bg-yellow-100 text-yellow-800';
      case 'shortlisted': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
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
              <Briefcase className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-blue-600">Jay shree joranath job</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate('/company-profile')}>
                <Users className="h-4 w-4 mr-2" />
                Company Profile
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Tech Corp!</h1>
          <p className="text-gray-600">Manage your job postings and find the best talent</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-blue-600/10 rounded-lg">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                  <p className="text-gray-600 text-sm">Active Jobs</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <Users className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">73</p>
                  <p className="text-gray-600 text-sm">Total Applications</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-green-600/10 rounded-lg">
                  <Eye className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">548</p>
                  <p className="text-gray-600 text-sm">Total Views</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-purple-600/10 rounded-lg">
                  <FileText className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                  <p className="text-gray-600 text-sm">Shortlisted</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <Button
            onClick={() => navigate('/post-job')}
            className="bg-blue-600 hover:bg-blue-700"
            size="lg"
          >
            <Plus className="h-5 w-5 mr-2" />
            Post New Job
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Active Jobs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Briefcase className="h-5 w-5" />
                <span>Active Job Postings</span>
              </CardTitle>
              <CardDescription>Manage your current job listings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeJobs.map((job) => (
                  <div key={job.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{job.title}</h3>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-2">
                      <div>Applications: {job.applications}</div>
                      <div>Views: {job.views}</div>
                      <div>Posted: {job.posted}</div>
                      <div>Deadline: {job.deadline}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4" onClick={() => navigate('/my-jobs')}>
                View All Job Postings
              </Button>
            </CardContent>
          </Card>

          {/* Recent Applications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Recent Applications</span>
              </CardTitle>
              <CardDescription>New candidate applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentApplications.map((application) => (
                  <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{application.candidateName}</h3>
                      <p className="text-gray-600">{application.jobTitle}</p>
                      <p className="text-sm text-gray-500">Applied: {application.appliedDate}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getStatusColor(application.status)}>
                        {application.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4" onClick={() => navigate('/applications')}>
                View All Applications
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
