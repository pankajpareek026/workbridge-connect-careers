
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Briefcase, Search, Filter, Eye, Ban, CheckCircle, Building2, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminJobs = () => {
  const navigate = useNavigate();
  const [jobs] = useState([
    {
      id: 1,
      title: 'Senior React Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $150k',
      status: 'active',
      postedDate: '2024-01-15',
      applications: 23,
      views: 145
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'StartupXYZ',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$100k - $130k',
      status: 'pending',
      postedDate: '2024-01-14',
      applications: 12,
      views: 89
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Design Studio Pro',
      location: 'Los Angeles, CA',
      type: 'Contract',
      salary: '$80k - $100k',
      status: 'rejected',
      postedDate: '2024-01-13',
      applications: 5,
      views: 67
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'Global Industries',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$110k - $140k',
      status: 'expired',
      postedDate: '2024-01-10',
      applications: 18,
      views: 203
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'expired': return 'bg-gray-100 text-gray-800';
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

  const stats = {
    totalJobs: jobs.length,
    activeJobs: jobs.filter(j => j.status === 'active').length,
    pendingJobs: jobs.filter(j => j.status === 'pending').length,
    expiredJobs: jobs.filter(j => j.status === 'expired').length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Briefcase className="h-8 w-8 text-workbridge-primary" />
              <h1 className="text-2xl font-bold text-workbridge-primary">Job Management</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate('/admin-dashboard')}>
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Job Management</h1>
          <p className="text-gray-600">Monitor and manage all job postings on the platform</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalJobs}</p>
                  <p className="text-gray-600 text-sm">Total Jobs</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats.activeJobs}</p>
                  <p className="text-gray-600 text-sm">Active Jobs</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Clock className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats.pendingJobs}</p>
                  <p className="text-gray-600 text-sm">Pending Review</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Ban className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats.expiredJobs}</p>
                  <p className="text-gray-600 text-sm">Expired</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search jobs by title or company..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-workbridge-primary focus:border-transparent"
              />
            </div>
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Jobs Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Jobs</CardTitle>
            <CardDescription>Complete list of job postings</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Job Title</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Salary</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Posted</TableHead>
                  <TableHead>Applications</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobs.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell className="font-medium">{job.title}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Building2 className="h-4 w-4 text-gray-400" />
                        <span>{job.company}</span>
                      </div>
                    </TableCell>
                    <TableCell>{job.location}</TableCell>
                    <TableCell>
                      <Badge className={getTypeColor(job.type)}>
                        {job.type}
                      </Badge>
                    </TableCell>
                    <TableCell>{job.salary}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(job.status)}>
                        {job.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{job.postedDate}</TableCell>
                    <TableCell>{job.applications}</TableCell>
                    <TableCell>{job.views}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Ban className="h-4 w-4" />
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

export default AdminJobs;
