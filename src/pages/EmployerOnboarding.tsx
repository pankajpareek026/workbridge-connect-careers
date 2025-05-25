
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Briefcase, Building, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const EmployerOnboarding = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const [companyData, setCompanyData] = useState({
    companyName: '',
    industry: '',
    companySize: '',
    website: '',
    description: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    gstNumber: '',
    contactPerson: '',
    designation: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Company Profile Created",
        description: "Welcome to WorkBridge! Your employer account is ready.",
      });
      navigate('/employer-dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Briefcase className="h-8 w-8 text-workbridge-primary" />
            <h1 className="text-2xl font-bold text-workbridge-primary">WorkBridge</h1>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Setup Your Company Profile</h2>
          <p className="text-gray-600 mt-2">Tell us about your organization</p>
        </div>

        <Card className="shadow-lg border-0">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Building className="h-5 w-5 mr-2" />
                  Company Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      value={companyData.companyName}
                      onChange={(e) => setCompanyData({...companyData, companyName: e.target.value})}
                      placeholder="Enter company name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="industry">Industry *</Label>
                    <Select onValueChange={(value) => setCompanyData({...companyData, industry: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="it">Information Technology</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="finance">Finance & Banking</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="construction">Construction</SelectItem>
                        <SelectItem value="hospitality">Hospitality</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="companySize">Company Size *</Label>
                    <Select onValueChange={(value) => setCompanyData({...companyData, companySize: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="500+">500+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="website">Company Website</Label>
                    <Input
                      id="website"
                      value={companyData.website}
                      onChange={(e) => setCompanyData({...companyData, website: e.target.value})}
                      placeholder="https://www.company.com"
                    />
                  </div>
                </div>
                
                <div className="mt-4">
                  <Label htmlFor="description">Company Description</Label>
                  <Textarea
                    id="description"
                    value={companyData.description}
                    onChange={(e) => setCompanyData({...companyData, description: e.target.value})}
                    placeholder="Describe your company, mission, and values"
                    rows={4}
                  />
                </div>

                <div className="mt-4">
                  <Label>Company Logo</Label>
                  <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">Upload company logo</p>
                    <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 2MB</p>
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Company Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Street Address *</Label>
                    <Input
                      id="address"
                      value={companyData.address}
                      onChange={(e) => setCompanyData({...companyData, address: e.target.value})}
                      placeholder="Enter complete address"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={companyData.city}
                      onChange={(e) => setCompanyData({...companyData, city: e.target.value})}
                      placeholder="City"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      value={companyData.state}
                      onChange={(e) => setCompanyData({...companyData, state: e.target.value})}
                      placeholder="State"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="pincode">PIN Code *</Label>
                    <Input
                      id="pincode"
                      value={companyData.pincode}
                      onChange={(e) => setCompanyData({...companyData, pincode: e.target.value})}
                      placeholder="PIN Code"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="gstNumber">GST Number (Optional)</Label>
                    <Input
                      id="gstNumber"
                      value={companyData.gstNumber}
                      onChange={(e) => setCompanyData({...companyData, gstNumber: e.target.value})}
                      placeholder="GST Number"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Person */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Primary Contact Person</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contactPerson">Contact Person Name *</Label>
                    <Input
                      id="contactPerson"
                      value={companyData.contactPerson}
                      onChange={(e) => setCompanyData({...companyData, contactPerson: e.target.value})}
                      placeholder="Full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="designation">Designation *</Label>
                    <Input
                      id="designation"
                      value={companyData.designation}
                      onChange={(e) => setCompanyData({...companyData, designation: e.target.value})}
                      placeholder="Job title"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={companyData.phone}
                      onChange={(e) => setCompanyData({...companyData, phone: e.target.value})}
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={companyData.email}
                      onChange={(e) => setCompanyData({...companyData, email: e.target.value})}
                      placeholder="contact@company.com"
                      required
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-workbridge-primary hover:bg-workbridge-primary/90"
                disabled={isLoading}
              >
                {isLoading ? "Creating Profile..." : "Complete Setup"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmployerOnboarding;
