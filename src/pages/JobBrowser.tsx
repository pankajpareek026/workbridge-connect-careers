
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Briefcase, Search, MapPin, Clock, DollarSign, Filter, Bookmark, Grid, List } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const JobBrowser = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const jobs = [
    {
      id: 1,
      title: "Senior Software Developer",
      company: "TechCorp Solutions",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      salary: "₹8-12 LPA",
      postedDate: "2 days ago",
      description: "We are looking for an experienced software developer to join our team...",
      skills: ["React", "Node.js", "MongoDB", "AWS"],
      experience: "3-5 years"
    },
    {
      id: 2,
      title: "Marketing Manager",
      company: "Digital Growth Co",
      location: "Delhi, Delhi",
      type: "Full-time",
      salary: "₹6-9 LPA",
      postedDate: "1 week ago",
      description: "Lead our marketing initiatives and drive brand growth...",
      skills: ["Digital Marketing", "SEO", "Content Strategy", "Analytics"],
      experience: "2-4 years"
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Creative Studio",
      location: "Bangalore, Karnataka",
      type: "Contract",
      salary: "₹40-60k/month",
      postedDate: "3 days ago",
      description: "Design beautiful and intuitive user experiences...",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
      experience: "1-3 years"
    },
    {
      id: 4,
      title: "Data Analyst",
      company: "Analytics Hub",
      location: "Pune, Maharashtra",
      type: "Full-time",
      salary: "₹5-8 LPA",
      postedDate: "5 days ago",
      description: "Analyze data to provide actionable business insights...",
      skills: ["Python", "SQL", "Tableau", "Excel"],
      experience: "1-2 years"
    },
    {
      id: 5,
      title: "Sales Executive",
      company: "Growth Partners",
      location: "Chennai, Tamil Nadu",
      type: "Full-time",
      salary: "₹3-5 LPA + Incentives",
      postedDate: "1 day ago",
      description: "Drive sales growth and build client relationships...",
      skills: ["Sales", "Communication", "CRM", "Negotiation"],
      experience: "0-2 years"
    },
    {
      id: 6,
      title: "Content Writer",
      company: "Media House",
      location: "Remote",
      type: "Part-time",
      salary: "₹15-25k/month",
      postedDate: "4 days ago",
      description: "Create engaging content for various digital platforms...",
      skills: ["Content Writing", "SEO", "Social Media", "WordPress"],
      experience: "1-2 years"
    }
  ];

  const JobCard = ({ job, isListView = false }: { job: any, isListView?: boolean }) => (
    <Card className={`hover:shadow-lg transition-shadow cursor-pointer ${isListView ? 'mb-4' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-lg mb-1">{job.title}</CardTitle>
            <p className="text-gray-600 font-medium">{job.company}</p>
          </div>
          <Button variant="ghost" size="sm">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            {job.location}
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-600">
              <Clock className="h-4 w-4 mr-1" />
              {job.type}
            </div>
            <div className="flex items-center text-green-600 font-medium">
              <DollarSign className="h-4 w-4 mr-1" />
              {job.salary}
            </div>
          </div>

          {!isListView && (
            <p className="text-sm text-gray-600 line-clamp-2">{job.description}</p>
          )}

          <div className="flex flex-wrap gap-1">
            {job.skills.slice(0, 3).map((skill: string) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {job.skills.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{job.skills.length - 3} more
              </Badge>
            )}
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="text-xs text-gray-500">{job.postedDate}</span>
            <div className="space-x-2">
              <Button variant="outline" size="sm" onClick={() => navigate(`/job/${job.id}`)}>
                View Details
              </Button>
              <Button size="sm" className="bg-workbridge-primary hover:bg-workbridge-primary/90">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

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
            <Button variant="outline" onClick={() => navigate('/job-seeker-dashboard')}>
              Back to Dashboard
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Filter className="h-5 w-5" />
                  <span>Filters</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Location</label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="All locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                      <SelectItem value="pune">Pune</SelectItem>
                      <SelectItem value="chennai">Chennai</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium">Job Type</label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="All types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full Time</SelectItem>
                      <SelectItem value="part-time">Part Time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium">Experience Level</label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="All levels" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5+">5+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium">Category</label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="All categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="it">Information Technology</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="content">Content</SelectItem>
                      <SelectItem value="analytics">Analytics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full bg-workbridge-primary hover:bg-workbridge-primary/90">
                  Apply Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Search and View Controls */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="flex-1 w-full sm:max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search jobs, companies, or skills..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <p className="text-gray-600">{jobs.length} jobs found</p>
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by relevance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="date">Date Posted</SelectItem>
                    <SelectItem value="salary">Salary</SelectItem>
                    <SelectItem value="company">Company</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Job Listings */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-4'}>
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} isListView={viewMode === 'list'} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" className="px-8">
                Load More Jobs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBrowser;
