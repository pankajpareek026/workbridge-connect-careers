
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Briefcase, Search, MapPin, Clock, DollarSign, Bookmark, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const SavedJobs = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');

  const [savedJobs, setSavedJobs] = useState([
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $150k",
      description: "We're looking for an experienced Frontend Developer to join our growing team...",
      requirements: ["React", "TypeScript", "5+ years experience"],
      savedDate: "2024-01-20",
      featured: true
    },
    {
      id: 2,
      title: "UX Designer",
      company: "Design Studio Inc",
      location: "New York, NY",
      type: "Contract",
      salary: "$80k - $100k",
      description: "Create beautiful and intuitive user experiences...",
      requirements: ["Figma", "User Research", "Portfolio required"],
      savedDate: "2024-01-18",
      featured: false
    },
    {
      id: 3,
      title: "Backend Engineer",
      company: "CloudTech",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$100k - $130k",
      description: "Build scalable backend systems and APIs...",
      requirements: ["Node.js", "AWS", "4+ years experience"],
      savedDate: "2024-01-15",
      featured: false
    }
  ]);

  const removeFromSaved = (jobId: number) => {
    setSavedJobs(prev => prev.filter(job => job.id !== jobId));
    toast({
      title: "Job removed",
      description: "Job has been removed from your saved jobs"
    });
  };

  const filteredJobs = savedJobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Briefcase className="h-8 w-8 text-workbridge-primary" />
              <h1 className="text-2xl font-bold text-workbridge-primary">WorkBridge</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate('/job-seeker-dashboard')}>
                Dashboard
              </Button>
              <Button variant="outline" onClick={() => navigate('/jobs')}>
                Browse Jobs
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Saved Jobs</h1>
          <p className="text-gray-600">Jobs you've bookmarked for later review</p>
        </div>

        {/* Search */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search saved jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="mt-4 text-sm text-gray-600">
              {filteredJobs.length} saved job{filteredJobs.length !== 1 ? 's' : ''}
            </div>
          </CardContent>
        </Card>

        {/* Saved Jobs List */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className={`hover:shadow-lg transition-shadow ${job.featured ? 'ring-2 ring-workbridge-primary/20' : ''}`}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <CardTitle className="text-xl text-gray-900">{job.title}</CardTitle>
                      {job.featured && (
                        <Badge className="bg-workbridge-primary text-white">Featured</Badge>
                      )}
                    </div>
                    <p className="text-lg font-medium text-workbridge-primary mb-2">{job.company}</p>
                    <div className="flex items-center space-x-4 text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromSaved(job.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.requirements.map((req, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {req}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Saved on {job.savedDate}</span>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => navigate(`/job/${job.id}`)}
                    >
                      View Details
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-workbridge-primary hover:bg-workbridge-primary/90"
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Bookmark className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Saved Jobs</h3>
              <p className="text-gray-600 mb-6">
                {searchTerm 
                  ? 'No saved jobs match your search'
                  : "You haven't saved any jobs yet"
                }
              </p>
              <Button onClick={() => navigate('/jobs')} className="bg-workbridge-primary hover:bg-workbridge-primary/90">
                Browse Jobs
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SavedJobs;
