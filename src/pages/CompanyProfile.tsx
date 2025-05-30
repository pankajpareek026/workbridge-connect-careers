
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Building, MapPin, Globe, Users, Edit, Save, X, Plus } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { useToast } from '@/hooks/use-toast';

const CompanyProfile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [companyData, setCompanyData] = useState({
    name: 'TechCorp Solutions',
    industry: 'Technology',
    size: '100-500 employees',
    location: 'San Francisco, CA',
    website: 'https://techcorp.com',
    description: 'We are a leading technology company focused on creating innovative solutions for the modern workplace. Our team of dedicated professionals works on cutting-edge projects that impact millions of users worldwide.',
    benefits: ['Health Insurance', 'Remote Work', '401k Matching', 'Professional Development', 'Flexible Hours'],
    founded: '2015',
    revenue: '$10M - $50M'
  });

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your company profile has been successfully updated."
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original data if needed
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation userType="employer" userName="TechCorp" />

      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 space-y-4 md:space-y-0">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Company Profile</h1>
            <p className="text-gray-600">Manage your company information and attract top talent</p>
          </div>
          <div className="flex space-x-2">
            {!isEditing ? (
              <Button onClick={() => setIsEditing(true)} className="bg-workbridge-primary hover:bg-workbridge-primary/90">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            ) : (
              <div className="flex space-x-2">
                <Button onClick={handleSave} className="bg-workbridge-primary hover:bg-workbridge-primary/90">
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline" onClick={handleCancel}>
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Main Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building className="h-5 w-5" />
                  <span>Company Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    {isEditing ? (
                      <Input 
                        value={companyData.name}
                        onChange={(e) => setCompanyData({...companyData, name: e.target.value})}
                      />
                    ) : (
                      <p className="text-gray-900">{companyData.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                    {isEditing ? (
                      <Input 
                        value={companyData.industry}
                        onChange={(e) => setCompanyData({...companyData, industry: e.target.value})}
                      />
                    ) : (
                      <p className="text-gray-900">{companyData.industry}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                    {isEditing ? (
                      <Input 
                        value={companyData.size}
                        onChange={(e) => setCompanyData({...companyData, size: e.target.value})}
                      />
                    ) : (
                      <p className="text-gray-900">{companyData.size}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Founded</label>
                    {isEditing ? (
                      <Input 
                        value={companyData.founded}
                        onChange={(e) => setCompanyData({...companyData, founded: e.target.value})}
                      />
                    ) : (
                      <p className="text-gray-900">{companyData.founded}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  {isEditing ? (
                    <Input 
                      value={companyData.location}
                      onChange={(e) => setCompanyData({...companyData, location: e.target.value})}
                    />
                  ) : (
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>{companyData.location}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                  {isEditing ? (
                    <Input 
                      value={companyData.website}
                      onChange={(e) => setCompanyData({...companyData, website: e.target.value})}
                    />
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-gray-500" />
                      <a href={companyData.website} target="_blank" rel="noopener noreferrer" className="text-workbridge-primary hover:underline">
                        {companyData.website}
                      </a>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Description</label>
                  {isEditing ? (
                    <Textarea 
                      value={companyData.description}
                      onChange={(e) => setCompanyData({...companyData, description: e.target.value})}
                      rows={4}
                    />
                  ) : (
                    <p className="text-gray-700 leading-relaxed">{companyData.description}</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Benefits & Perks */}
            <Card>
              <CardHeader>
                <CardTitle>Benefits & Perks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {companyData.benefits.map((benefit, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {benefit}
                    </Badge>
                  ))}
                </div>
                {isEditing && (
                  <Button variant="outline" className="mt-4">
                    Add Benefit
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Stats */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Company Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Active Jobs</span>
                  <span className="font-semibold">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Applications</span>
                  <span className="font-semibold">73</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Profile Views</span>
                  <span className="font-semibold">245</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Founded</span>
                  <span className="font-semibold">{companyData.founded}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-workbridge-primary hover:bg-workbridge-primary/90">
                  <Plus className="h-4 w-4 mr-2" />
                  Post New Job
                </Button>
                <Button variant="outline" className="w-full">
                  <Users className="h-4 w-4 mr-2" />
                  View Applications
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
