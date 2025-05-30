
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, DollarSign, Bookmark, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface MobileJobCardProps {
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    description: string;
    requirements: string[];
    featured?: boolean;
  };
  onSave?: (jobId: number) => void;
  onApply?: (jobId: number) => void;
  showSaveButton?: boolean;
}

const MobileJobCard = ({ job, onSave, onApply, showSaveButton = true }: MobileJobCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className={`w-full hover:shadow-lg transition-shadow ${job.featured ? 'ring-2 ring-workbridge-primary/20' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <CardTitle className="text-lg leading-tight pr-2">{job.title}</CardTitle>
              {job.featured && (
                <Badge className="bg-workbridge-primary text-white text-xs">Featured</Badge>
              )}
            </div>
            <div className="flex items-center space-x-1 text-workbridge-primary mb-2">
              <Building className="h-4 w-4 flex-shrink-0" />
              <span className="font-medium truncate">{job.company}</span>
            </div>
          </div>
          {showSaveButton && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onSave?.(job.id)}
              className="flex-shrink-0 ml-2"
            >
              <Bookmark className="h-4 w-4" />
            </Button>
          )}
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-1 text-gray-600">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span className="text-sm truncate">{job.location}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1 text-gray-600">
              <Clock className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm">{job.type}</span>
            </div>
            <div className="flex items-center space-x-1 text-green-600">
              <DollarSign className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm font-medium">{job.salary}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-gray-700 text-sm line-clamp-2 mb-3">{job.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {job.requirements.slice(0, 3).map((req, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {req}
            </Badge>
          ))}
          {job.requirements.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{job.requirements.length - 3} more
            </Badge>
          )}
        </div>
        
        <div className="flex flex-col space-y-2">
          <Button 
            onClick={() => navigate(`/job/${job.id}`)}
            variant="outline" 
            size="sm"
            className="w-full"
          >
            View Details
          </Button>
          <Button 
            onClick={() => onApply?.(job.id)}
            size="sm" 
            className="w-full bg-workbridge-primary hover:bg-workbridge-primary/90"
          >
            Apply Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MobileJobCard;
