
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Briefcase, Users, Plus, Edit, Eye, Trash2, Calendar, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MyJobs = () => {
  const navigate = useNavigate();
  const [jobs] = useState([
    { 
      id: 1, 
      title: "Senior Developer", 
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      salary: "$80,000 - $120,000",
      applications: 24, 
      views: 156, 
      posted: "2024-01-10", 
      deadline: "2024-02-10",
      status: "active"
    },
    { 
      id: 2, 
      title: "Product Manager", 
      department: "Product",
      type: "Full-time",
      location: "New York, NY",
      salary: "$90,000 - $130,000",
      applications: 18, 
      views: 203, 
      posted: "2024-01-08", 
      deadline: "2024-02-08",
      status: "active"
    },
    { 
      id: 3, 
      title: "UX Designer", 
      department: "Design",
      type: "Contract",
      location: "San Francisco, CA",
      salary: "$70,000 - $100,000",
      applications: 31, 
      views: 189, 
      posted: "2024-01-05", 
      deadline: "2024-02-05",
      status: "closed"
    },
    { 
      id: 4, 
      title: "Marketing Specialist", 
      department: "Marketing",
      type: "Part-time",
      location: "Chicago, IL",
      salary: "$40,000 - $60,000",
      applications: 12, 
      views: 87, 
      posted: "2024-01-12", 
      deadline: "2024-02-12",
      status: "draft"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-red-100 text-red-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time': return 'bg-blue-100 text-blue-800';
      case 'Part-time': return 'bg-purple-100 text-purple-800';
      case 'Contract': return 'bg-orange-100 text-orange-800';
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
              <Button variant="outline" onClick={() => navigate('/employer-dashboard')}>
                Back to Dashboard
              </Button>
              <Button variant="outline" onClick={() => navigate('/')}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Job Postings</h1>
            <p className="text-gray-600">Manage all your job listings</p>
          </div>
          <Button 
            onClick={() => navigate('/post-job')}
            className="bg-workbridge-primary hover:bg-workbridge-primary/90"
          >
            <Plus className="h-5 w-5 mr-2" />
            Post New Job
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-workbridge-primary/10 rounded-lg">
                  <Briefcase className="h-5 w-5 text-workbridge-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{jobs.filter(j => j.status === 'active').length}</p>
                  <p className="text-gray-600 text-sm">Active Jobs</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-workbridge-secondary/10 rounded-lg">
                  <Users className="h-5 w-5 text-workbridge-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{jobs.reduce((sum, job) => sum + job.applications, 0)}</p>
                  <p className="text-gray-600 text-sm">Total Applications</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-workbridge-accent/10 rounded-lg">
                  <Eye className="h-5 w-5 text-workbridge-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{jobs.reduce((sum, job) => sum + job.views, 0)}</p>
                  <p className="text-gray-600 text-sm">Total Views</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-workbridge-success/10 rounded-lg">
                  <Calendar className="h-5 w-5 text-workbridge-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{jobs.filter(j => j.status === 'draft').length}</p>
                  <p className="text-gray-600 text-sm">Draft Jobs</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Jobs Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Job Postings</CardTitle>
            <CardDescription>Complete list of your job postings with detailed information</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Job Title</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Salary</TableHead>
                  <TableHead>Applications</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Posted</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobs.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell className="font-medium">{job.title}</TableCell>
                    <TableCell>{job.department}</TableCell>
                    <TableCell>
                      <Badge className={getTypeColor(job.type)}>
                        {job.type}
                      </Badge>
                    </TableCell>
                    <TableCell>{job.location}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1 text-green-600" />
                        <span className="text-sm">{job.salary}</span>
                      </div>
                    </TableCell>
                    <TableCell>{job.applications}</TableCell>
                    <TableCell>{job.views}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(job.status)}>
                        {job.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{job.posted}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" onClick={() => navigate(`/job/${job.id}`)}>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MyJobs;
