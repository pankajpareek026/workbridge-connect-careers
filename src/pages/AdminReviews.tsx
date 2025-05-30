
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AlertTriangle, CheckCircle, XCircle, Eye, Clock, Building2, User, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminReviews = () => {
  const navigate = useNavigate();
  const [reviews] = useState([
    {
      id: 1,
      type: 'Company Verification',
      subject: 'TechStart Inc.',
      description: 'New company registration requiring verification',
      submittedBy: 'System',
      submittedDate: '2024-01-15',
      priority: 'high',
      status: 'pending'
    },
    {
      id: 2,
      type: 'Job Report',
      subject: 'Senior Developer at ABC Corp',
      description: 'Job posting reported for misleading salary information',
      submittedBy: 'john.doe@email.com',
      submittedDate: '2024-01-14',
      priority: 'medium',
      status: 'pending'
    },
    {
      id: 3,
      type: 'User Report',
      subject: 'suspicious.user@email.com',
      description: 'User reported for spam applications',
      submittedBy: 'hr@company.com',
      submittedDate: '2024-01-13',
      priority: 'high',
      status: 'under_review'
    },
    {
      id: 4,
      type: 'Content Moderation',
      subject: 'Inappropriate Profile Content',
      description: 'User profile contains inappropriate content',
      submittedBy: 'System',
      submittedDate: '2024-01-12',
      priority: 'medium',
      status: 'pending'
    },
    {
      id: 5,
      type: 'Company Verification',
      subject: 'Global Solutions LLC',
      description: 'Company verification documentation submitted',
      submittedBy: 'System',
      submittedDate: '2024-01-11',
      priority: 'low',
      status: 'approved'
    },
    {
      id: 6,
      type: 'Job Report',
      subject: 'Marketing Manager at XYZ Inc',
      description: 'Job posting reported as duplicate',
      submittedBy: 'jane.smith@email.com',
      submittedDate: '2024-01-10',
      priority: 'low',
      status: 'rejected'
    }
  ]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Company Verification': return Building2;
      case 'Job Report': return Briefcase;
      case 'User Report': return User;
      case 'Content Moderation': return AlertTriangle;
      default: return AlertTriangle;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Company Verification': return 'bg-blue-100 text-blue-800';
      case 'Job Report': return 'bg-green-100 text-green-800';
      case 'User Report': return 'bg-red-100 text-red-800';
      case 'Content Moderation': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'under_review': return 'bg-blue-100 text-blue-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const stats = {
    totalReviews: reviews.length,
    pendingReviews: reviews.filter(r => r.status === 'pending').length,
    underReview: reviews.filter(r => r.status === 'under_review').length,
    highPriority: reviews.filter(r => r.priority === 'high').length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-8 w-8 text-workbridge-primary" />
              <h1 className="text-2xl font-bold text-workbridge-primary">Review Center</h1>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Review Center</h1>
          <p className="text-gray-600">Manage pending reviews, reports, and moderation tasks</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalReviews}</p>
                  <p className="text-gray-600 text-sm">Total Reviews</p>
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
                  <p className="text-2xl font-bold text-gray-900">{stats.pendingReviews}</p>
                  <p className="text-gray-600 text-sm">Pending</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Eye className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats.underReview}</p>
                  <p className="text-gray-600 text-sm">Under Review</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-red-100 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats.highPriority}</p>
                  <p className="text-gray-600 text-sm">High Priority</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Building2 className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Company Verifications</h3>
                  <p className="text-sm text-gray-600">Review pending company registrations</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Briefcase className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Job Reports</h3>
                  <p className="text-sm text-gray-600">Handle reported job postings</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <User className="h-8 w-8 text-red-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">User Reports</h3>
                  <p className="text-sm text-gray-600">Moderate user behavior issues</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reviews Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Reviews</CardTitle>
            <CardDescription>Complete list of reviews requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Submitted By</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reviews.map((review) => {
                  const Icon = getTypeIcon(review.type);
                  return (
                    <TableRow key={review.id}>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Icon className="h-4 w-4 text-gray-400" />
                          <Badge className={getTypeColor(review.type)}>
                            {review.type}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{review.subject}</TableCell>
                      <TableCell className="max-w-xs truncate">{review.description}</TableCell>
                      <TableCell>{review.submittedBy}</TableCell>
                      <TableCell>{review.submittedDate}</TableCell>
                      <TableCell>
                        <Badge className={getPriorityColor(review.priority)}>
                          {review.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(review.status)}>
                          {review.status.replace('_', ' ')}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          {review.status === 'pending' && (
                            <>
                              <Button variant="outline" size="sm">
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <XCircle className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminReviews;
