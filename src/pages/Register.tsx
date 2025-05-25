
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Briefcase, User, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (userType: 'jobseeker' | 'employer') => {
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Registration Successful",
        description: `Welcome to WorkBridge! Setting up your ${userType} profile.`,
      });
      
      if (userType === 'jobseeker') {
        navigate('/job-seeker-onboarding');
      } else {
        navigate('/employer-onboarding');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Briefcase className="h-8 w-8 text-workbridge-primary" />
            <h1 className="text-2xl font-bold text-workbridge-primary">WorkBridge</h1>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Join WorkBridge</h2>
          <p className="text-gray-600 mt-2">Create your account to get started</p>
        </div>

        <Card className="shadow-lg border-0">
          <CardContent className="p-6">
            <Tabs defaultValue="jobseeker" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="jobseeker" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Job Seeker</span>
                </TabsTrigger>
                <TabsTrigger value="employer" className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Employer</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="jobseeker">
                <form onSubmit={(e) => { e.preventDefault(); handleRegister('jobseeker'); }}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address (Optional)</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="password">Create Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Create a strong password"
                        className="mt-1"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-workbridge-primary hover:bg-workbridge-primary/90"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating Account..." : "Create Job Seeker Account"}
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="employer">
                <form onSubmit={(e) => { e.preventDefault(); handleRegister('employer'); }}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="company-name">Company Name</Label>
                      <Input
                        id="company-name"
                        type="text"
                        placeholder="Enter company name"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-person">Contact Person</Label>
                      <Input
                        id="contact-person"
                        type="text"
                        placeholder="Enter contact person name"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="employer-phone">Phone Number</Label>
                      <Input
                        id="employer-phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="employer-email">Company Email</Label>
                      <Input
                        id="employer-email"
                        type="email"
                        placeholder="company@example.com"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="employer-password">Create Password</Label>
                      <Input
                        id="employer-password"
                        type="password"
                        placeholder="Create a strong password"
                        className="mt-1"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-workbridge-primary hover:bg-workbridge-primary/90"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating Account..." : "Create Employer Account"}
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <div className="text-sm text-gray-600">
                Already have an account?{' '}
                <Button 
                  variant="link" 
                  className="text-workbridge-primary p-0"
                  onClick={() => navigate('/login')}
                >
                  Sign in here
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
