
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Briefcase, Building2, Calendar, Download, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminReports = () => {
  const navigate = useNavigate();

  const monthlyStats = [
    { month: 'Jan', users: 120, jobs: 45, applications: 230 },
    { month: 'Feb', users: 140, jobs: 52, applications: 280 },
    { month: 'Mar', users: 160, jobs: 38, applications: 320 },
    { month: 'Apr', users: 180, jobs: 65, applications: 410 },
    { month: 'May', users: 200, jobs: 72, applications: 450 },
  ];

  const topCompanies = [
    { name: 'TechCorp Solutions', jobs: 15, applications: 125 },
    { name: 'Global Industries', jobs: 12, applications: 98 },
    { name: 'StartupXYZ', jobs: 8, applications: 67 },
    { name: 'Design Studio Pro', jobs: 6, applications: 45 },
  ];

  const reportCards = [
    {
      title: 'User Growth Report',
      description: 'Monthly user registration and activity trends',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Job Posting Analytics',
      description: 'Job posting trends and performance metrics',
      icon: Briefcase,
      color: 'green'
    },
    {
      title: 'Application Insights',
      description: 'Application volume and success rate analysis',
      icon: TrendingUp,
      color: 'purple'
    },
    {
      title: 'Company Performance',
      description: 'Company engagement and hiring metrics',
      icon: Building2,
      color: 'orange'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-8 w-8 text-workbridge-primary" />
              <h1 className="text-2xl font-bold text-workbridge-primary">Reports & Analytics</h1>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports & Analytics</h1>
          <p className="text-gray-600">Comprehensive platform insights and performance metrics</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">1,247</p>
                  <p className="text-gray-600 text-sm">Total Users</p>
                  <p className="text-green-600 text-xs mt-1">+12% this month</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">156</p>
                  <p className="text-gray-600 text-sm">Active Jobs</p>
                  <p className="text-green-600 text-xs mt-1">+8% this month</p>
                </div>
                <Briefcase className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">89</p>
                  <p className="text-gray-600 text-sm">Companies</p>
                  <p className="text-green-600 text-xs mt-1">+15% this month</p>
                </div>
                <Building2 className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">342</p>
                  <p className="text-gray-600 text-sm">Applications</p>
                  <p className="text-green-600 text-xs mt-1">+25% this month</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Report Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {reportCards.map((report, index) => {
            const Icon = report.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 bg-${report.color}-100 rounded-lg`}>
                      <Icon className={`h-6 w-6 text-${report.color}-600`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{report.title}</CardTitle>
                      <CardDescription>{report.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                    <Button variant="ghost" size="sm">
                      View Details →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Monthly Growth Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Monthly Growth Trends</span>
              </CardTitle>
              <CardDescription>User registrations, job postings, and applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyStats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="font-medium">{stat.month} 2024</div>
                    <div className="flex space-x-6 text-sm">
                      <span className="text-blue-600">{stat.users} users</span>
                      <span className="text-green-600">{stat.jobs} jobs</span>
                      <span className="text-purple-600">{stat.applications} apps</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Download className="h-4 w-4 mr-2" />
                Export Monthly Report
              </Button>
            </CardContent>
          </Card>

          {/* Top Companies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Building2 className="h-5 w-5" />
                <span>Top Performing Companies</span>
              </CardTitle>
              <CardDescription>Companies with highest job posting activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topCompanies.map((company, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{company.name}</p>
                      <p className="text-sm text-gray-600">{company.jobs} jobs posted</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-workbridge-primary">{company.applications}</p>
                      <p className="text-xs text-gray-600">applications</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Download className="h-4 w-4 mr-2" />
                Export Company Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminReports;
