
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Briefcase, Building2, TrendingUp, UserCheck, AlertTriangle, Calendar, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AdminNavigation from '@/components/AdminNavigation';
import AdminNotifications from '@/components/AdminNotifications';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = {
    totalUsers: 1247,
    totalJobs: 156,
    totalCompanies: 89,
    activeApplications: 342,
    newUsersToday: 23,
    pendingReviews: 12,
    monthlyRevenue: 15420,
    jobsPostedThisWeek: 28
  };

  const recentActivity = [
    { id: 1, type: 'user_registration', message: 'New user registered: john.doe@email.com', time: '2 mins ago' },
    { id: 2, type: 'job_posted', message: 'TechCorp posted "Senior Developer" job', time: '15 mins ago' },
    { id: 3, type: 'application', message: 'New application for "Product Manager" role', time: '1 hour ago' },
    { id: 4, type: 'company_verified', message: 'StartupXYZ company verification completed', time: '2 hours ago' },
  ];

  const pendingReviews = [
    { id: 1, type: 'Company Verification', company: 'TechStart Inc.', submitted: '2024-01-15' },
    { id: 2, type: 'Job Report', job: 'Senior Developer at ABC Corp', submitted: '2024-01-14' },
    { id: 3, type: 'User Report', user: 'suspicious.user@email.com', submitted: '2024-01-13' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavigation />

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Monitor and manage the WorkBridge platform</p>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</p>
                  <p className="text-gray-600 text-sm">Total Users</p>
                  <p className="text-green-600 text-xs">+{stats.newUsersToday} today</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Briefcase className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalJobs}</p>
                  <p className="text-gray-600 text-sm">Active Jobs</p>
                  <p className="text-green-600 text-xs">+{stats.jobsPostedThisWeek} this week</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Building2 className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalCompanies}</p>
                  <p className="text-gray-600 text-sm">Companies</p>
                  <p className="text-yellow-600 text-xs">{stats.pendingReviews} pending</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <DollarSign className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">${stats.monthlyRevenue.toLocaleString()}</p>
                  <p className="text-gray-600 text-sm">Monthly Revenue</p>
                  <p className="text-green-600 text-xs">+12% vs last month</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Recent Activity */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>Recent Activity</span>
              </CardTitle>
              <CardDescription>Latest platform activities and events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {activity.type.replace('_', ' ')}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4" onClick={() => navigate('/admin-activity')}>
                View All Activity
              </Button>
            </CardContent>
          </Card>

          {/* Admin Notifications */}
          <div className="space-y-6">
            <AdminNotifications />
          </div>
        </div>

        {/* Pending Reviews */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5" />
              <span>Pending Reviews</span>
            </CardTitle>
            <CardDescription>Items requiring admin attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pendingReviews.map((review) => (
                <div key={review.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">{review.type}</h3>
                    <Badge variant="secondary" className="text-xs">Pending</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{review.company || review.job || review.user}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-500">Submitted: {review.submitted}</p>
                    <Button variant="outline" size="sm">
                      Review
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" onClick={() => navigate('/admin-reviews')}>
              View All Reviews
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button variant="outline" onClick={() => navigate('/admin-users')} className="h-auto p-4 flex-col space-y-2">
                <Users className="h-6 w-6" />
                <span>Manage Users</span>
              </Button>
              <Button variant="outline" onClick={() => navigate('/admin-companies')} className="h-auto p-4 flex-col space-y-2">
                <Building2 className="h-6 w-6" />
                <span>Manage Companies</span>
              </Button>
              <Button variant="outline" onClick={() => navigate('/admin-jobs')} className="h-auto p-4 flex-col space-y-2">
                <Briefcase className="h-6 w-6" />
                <span>Manage Jobs</span>
              </Button>
              <Button variant="outline" onClick={() => navigate('/admin-settings')} className="h-auto p-4 flex-col space-y-2">
                <TrendingUp className="h-6 w-6" />
                <span>Settings</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
