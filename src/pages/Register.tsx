
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Briefcase, User, Users, Building } from 'lucide-react';
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
        description: `Welcome to WorkBridge! Redirecting to your ${userType} onboarding.`,
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
          <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
          <p className="text-gray-600 mt-2">Join thousands of professionals</p>
        </div>

        <Card className="shadow-lg border-0">
          <CardContent className="p-6">
            <Tabs defaultValue="jobseeker" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="jobseeker" className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Job Seeker</span>
                  <span className="sm:hidden">Seeker</span>
                </TabsTrigger>
                <TabsTrigger value="employer" className="flex items-center space-x-1">
                  <Building className="h-4 w-4" />
                  <span className="hidden sm:inline">Employer</span>
                  <span className="sm:hidden">Employer</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="jobseeker">
                <form onSubmit={(e) => { e.preventDefault(); handleRegister('jobseeker'); }}>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="John"
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Doe"
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
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
                      <Label htmlFor="password">Password</Label>
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
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input
                        id="companyName"
                        type="text"
                        placeholder="Your Company Inc."
                        className="mt-1"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contactFirstName">Your First Name</Label>
                        <Input
                          id="contactFirstName"
                          type="text"
                          placeholder="Jane"
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="contactLastName">Your Last Name</Label>
                        <Input
                          id="contactLastName"
                          type="text"
                          placeholder="Smith"
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="companyEmail">Company Email</Label>
                      <Input
                        id="companyEmail"
                        type="email"
                        placeholder="hr@company.com"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="companyPhone">Company Phone</Label>
                      <Input
                        id="companyPhone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="employerPassword">Password</Label>
                      <Input
                        id="employerPassword"
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

            <div className="mt-6 text-center space-y-4">
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
              <div className="text-xs text-gray-500">
                By creating an account, you agree to our{' '}
                <Button variant="link" className="text-workbridge-primary p-0 h-auto text-xs">
                  Terms of Service
                </Button>{' '}
                and{' '}
                <Button variant="link" className="text-workbridge-primary p-0 h-auto text-xs">
                  Privacy Policy
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
