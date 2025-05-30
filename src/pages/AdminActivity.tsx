
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Activity, Clock, Filter, Search, User, Briefcase, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminActivity = () => {
  const navigate = useNavigate();
  const [activities] = useState([
    {
      id: 1,
      type: 'user_registration',
      user: 'john.doe@email.com',
      action: 'User registered',
      details: 'New job seeker account created',
      timestamp: '2024-01-15 14:23:00',
      ip: '192.168.1.100'
    },
    {
      id: 2,
      type: 'job_posted',
      user: 'hr@techcorp.com',
      action: 'Job posted',
      details: 'Senior React Developer position',
      timestamp: '2024-01-15 13:45:00',
      ip: '192.168.1.101'
    },
    {
      id: 3,
      type: 'application_submitted',
      user: 'jane.smith@email.com',
      action: 'Application submitted',
      details: 'Applied to Product Manager role',
      timestamp: '2024-01-15 12:30:00',
      ip: '192.168.1.102'
    },
    {
      id: 4,
      type: 'company_verified',
      user: 'admin@workbridge.com',
      action: 'Company verified',
      details: 'StartupXYZ verification approved',
      timestamp: '2024-01-15 11:15:00',
      ip: '192.168.1.103'
    },
    {
      id: 5,
      type: 'login',
      user: 'sarah.wilson@startup.com',
      action: 'User login',
      details: 'Employer dashboard access',
      timestamp: '2024-01-15 10:45:00',
      ip: '192.168.1.104'
    },
    {
      id: 6,
      type: 'job_application_viewed',
      user: 'hr@global.com',
      action: 'Application viewed',
      details: 'Viewed application for Data Scientist',
      timestamp: '2024-01-15 09:30:00',
      ip: '192.168.1.105'
    },
    {
      id: 7,
      type: 'profile_updated',
      user: 'mike.johnson@email.com',
      action: 'Profile updated',
      details: 'Job seeker profile information changed',
      timestamp: '2024-01-15 08:20:00',
      ip: '192.168.1.106'
    },
    {
      id: 8,
      type: 'password_reset',
      user: 'lost.user@email.com',
      action: 'Password reset',
      details: 'Password reset link requested',
      timestamp: '2024-01-15 07:45:00',
      ip: '192.168.1.107'
    }
  ]);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'user_registration':
      case 'login':
      case 'profile_updated':
      case 'password_reset':
        return User;
      case 'job_posted':
      case 'application_submitted':
      case 'job_application_viewed':
        return Briefcase;
      case 'company_verified':
        return Building2;
      default:
        return Activity;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'user_registration': return 'bg-blue-100 text-blue-800';
      case 'job_posted': return 'bg-green-100 text-green-800';
      case 'application_submitted': return 'bg-purple-100 text-purple-800';
      case 'company_verified': return 'bg-orange-100 text-orange-800';
      case 'login': return 'bg-cyan-100 text-cyan-800';
      case 'job_application_viewed': return 'bg-indigo-100 text-indigo-800';
      case 'profile_updated': return 'bg-yellow-100 text-yellow-800';
      case 'password_reset': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const activityStats = {
    totalToday: activities.length,
    userActions: activities.filter(a => a.type.includes('user') || a.type === 'login').length,
    jobActions: activities.filter(a => a.type.includes('job') || a.type.includes('application')).length,
    adminActions: activities.filter(a => a.type.includes('verified')).length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Activity className="h-8 w-8 text-workbridge-primary" />
              <h1 className="text-2xl font-bold text-workbridge-primary">Activity Monitor</h1>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Activity Monitor</h1>
          <p className="text-gray-600">Real-time platform activity and user actions</p>
        </div>

        {/* Activity Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Activity className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{activityStats.totalToday}</p>
                  <p className="text-gray-600 text-sm">Total Today</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-green-100 rounded-lg">
                  <User className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{activityStats.userActions}</p>
                  <p className="text-gray-600 text-sm">User Actions</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Briefcase className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{activityStats.jobActions}</p>
                  <p className="text-gray-600 text-sm">Job Actions</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Building2 className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{activityStats.adminActions}</p>
                  <p className="text-gray-600 text-sm">Admin Actions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search activities by user or action..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-workbridge-primary focus:border-transparent"
              />
            </div>
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Activity Feed */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Recent Activity</span>
            </CardTitle>
            <CardDescription>Real-time feed of platform activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.map((activity) => {
                const Icon = getActivityIcon(activity.type);
                return (
                  <div key={activity.id} className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-gray-50">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Icon className="h-4 w-4 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-900">{activity.action}</h3>
                        <Badge className={getActivityColor(activity.type)}>
                          {activity.type.replace('_', ' ')}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-2">{activity.details}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>User: {activity.user}</span>
                        <span>IP: {activity.ip}</span>
                        <span>{activity.timestamp}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminActivity;
