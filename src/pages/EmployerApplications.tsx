
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Search, Calendar, User, Briefcase, Eye, CheckCircle, XCircle, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { useToast } from '@/hooks/use-toast';

const EmployerApplications = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const applications = [
    {
      id: 1,
      candidateName: "Alice Johnson",
      jobTitle: "Senior Developer",
      appliedDate: "2024-01-15",
      status: "new",
      experience: "5+ years",
      skills: ["React", "Node.js", "TypeScript"],
      email: "alice@email.com",
      resumeUrl: "/resume1.pdf"
    },
    {
      id: 2,
      candidateName: "Bob Smith",
      jobTitle: "Product Manager",
      appliedDate: "2024-01-14",
      status: "reviewed",
      experience: "7+ years",
      skills: ["Product Strategy", "Analytics", "Agile"],
      email: "bob@email.com",
      resumeUrl: "/resume2.pdf"
    },
    {
      id: 3,
      candidateName: "Carol White",
      jobTitle: "UX Designer",
      appliedDate: "2024-01-13",
      status: "shortlisted",
      experience: "4+ years",
      skills: ["Figma", "User Research", "Prototyping"],
      email: "carol@email.com",
      resumeUrl: "/resume3.pdf"
    },
    {
      id: 4,
      candidateName: "David Brown",
      jobTitle: "Senior Developer",
      appliedDate: "2024-01-12",
      status: "rejected",
      experience: "3+ years",
      skills: ["Vue.js", "Python", "AWS"],
      email: "david@email.com",
      resumeUrl: "/resume4.pdf"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'reviewed': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'shortlisted': return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-200';
      case 'hired': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new': return <Clock className="h-4 w-4" />;
      case 'reviewed': return <Eye className="h-4 w-4" />;
      case 'shortlisted': return <CheckCircle className="h-4 w-4" />;
      case 'rejected': return <XCircle className="h-4 w-4" />;
      case 'hired': return <CheckCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const updateApplicationStatus = (applicationId: number, newStatus: string) => {
    toast({
      title: "Status Updated",
      description: `Application status changed to ${newStatus}`
    });
  };

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getApplicationsByStatus = (status: string) => {
    return applications.filter(app => app.status === status);
  };

  const ApplicationCard = ({ application }: { application: any }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex flex-col md:flex-row md:items-start justify-between space-y-4 md:space-y-0">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <User className="h-5 w-5 text-workbridge-primary" />
              <h3 className="text-lg font-semibold text-gray-900">{application.candidateName}</h3>
            </div>
            <div className="flex items-center space-x-4 text-gray-600 mb-3">
              <div className="flex items-center space-x-1">
                <Briefcase className="h-4 w-4" />
                <span>{application.jobTitle}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>Applied {application.appliedDate}</span>
              </div>
            </div>
            <p className="text-gray-600 mb-2">{application.email}</p>
            <p className="text-gray-600 mb-3">{application.experience}</p>
          </div>
          <Badge className={getStatusColor(application.status)}>
            {getStatusIcon(application.status)}
            <span className="ml-1">{application.status.charAt(0).toUpperCase() + application.status.slice(1)}</span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {application.skills.map((skill: string, index: number) => (
            <Badge key={index} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            <FileText className="h-4 w-4 mr-2" />
            View Resume
          </Button>
          <Select onValueChange={(value) => updateApplicationStatus(application.id, value)}>
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="Update Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="reviewed">Reviewed</SelectItem>
              <SelectItem value="shortlisted">Shortlisted</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
              <SelectItem value="hired">Hired</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation userType="employer" userName="TechCorp" />

      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Page Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Applications</h1>
          <p className="text-gray-600">Manage candidate applications for your job postings</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6 md:mb-8">
          <CardContent className="p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search candidates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="reviewed">Reviewed</SelectItem>
                  <SelectItem value="shortlisted">Shortlisted</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                  <SelectItem value="hired">Hired</SelectItem>
                </SelectContent>
              </Select>
              <div className="text-sm text-gray-600 flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                {filteredApplications.length} application{filteredApplications.length !== 1 ? 's' : ''}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs for different views */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="all">All ({applications.length})</TabsTrigger>
            <TabsTrigger value="new">New ({getApplicationsByStatus('new').length})</TabsTrigger>
            <TabsTrigger value="reviewed">Reviewed ({getApplicationsByStatus('reviewed').length})</TabsTrigger>
            <TabsTrigger value="shortlisted">Shortlisted ({getApplicationsByStatus('shortlisted').length})</TabsTrigger>
            <TabsTrigger value="rejected">Rejected ({getApplicationsByStatus('rejected').length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            {filteredApplications.map((application) => (
              <ApplicationCard key={application.id} application={application} />
            ))}
          </TabsContent>

          <TabsContent value="new" className="space-y-6">
            {getApplicationsByStatus('new').map((application) => (
              <ApplicationCard key={application.id} application={application} />
            ))}
          </TabsContent>

          <TabsContent value="reviewed" className="space-y-6">
            {getApplicationsByStatus('reviewed').map((application) => (
              <ApplicationCard key={application.id} application={application} />
            ))}
          </TabsContent>

          <TabsContent value="shortlisted" className="space-y-6">
            {getApplicationsByStatus('shortlisted').map((application) => (
              <ApplicationCard key={application.id} application={application} />
            ))}
          </TabsContent>

          <TabsContent value="rejected" className="space-y-6">
            {getApplicationsByStatus('rejected').map((application) => (
              <ApplicationCard key={application.id} application={application} />
            ))}
          </TabsContent>
        </Tabs>

        {filteredApplications.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Applications Found</h3>
              <p className="text-gray-600 mb-6">
                {searchTerm || statusFilter !== 'all' 
                  ? 'Try adjusting your search or filter criteria'
                  : "No applications received yet"
                }
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default EmployerApplications;
