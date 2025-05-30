
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Briefcase, User, Users, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (userType: 'jobseeker' | 'employer' | 'admin') => {
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful",
        description: `Welcome back! Redirecting to your ${userType} dashboard.`,
      });
      
      if (userType === 'jobseeker') {
        navigate('/job-seeker-dashboard');
      } else if (userType === 'employer') {
        navigate('/employer-dashboard');
      } else {
        navigate('/admin-dashboard');
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
          <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-600 mt-2">Sign in to your account</p>
        </div>

        <Card className="shadow-lg border-0">
          <CardContent className="p-6">
            <Tabs defaultValue="jobseeker" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="jobseeker" className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>Job Seeker</span>
                </TabsTrigger>
                <TabsTrigger value="employer" className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>Employer</span>
                </TabsTrigger>
                <TabsTrigger value="admin" className="flex items-center space-x-1">
                  <Shield className="h-4 w-4" />
                  <span>Admin</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="jobseeker">
                <form onSubmit={(e) => { e.preventDefault(); handleLogin('jobseeker'); }}>
                  <div className="space-y-4">
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
                        placeholder="Enter your password"
                        className="mt-1"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-workbridge-primary hover:bg-workbridge-primary/90"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing In..." : "Sign In as Job Seeker"}
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="employer">
                <form onSubmit={(e) => { e.preventDefault(); handleLogin('employer'); }}>
                  <div className="space-y-4">
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
                      <Label htmlFor="employer-password">Password</Label>
                      <Input
                        id="employer-password"
                        type="password"
                        placeholder="Enter your password"
                        className="mt-1"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-workbridge-primary hover:bg-workbridge-primary/90"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing In..." : "Sign In as Employer"}
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="admin">
                <form onSubmit={(e) => { e.preventDefault(); handleLogin('admin'); }}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="admin-email">Admin Email</Label>
                      <Input
                        id="admin-email"
                        type="email"
                        placeholder="admin@workbridge.com"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="admin-password">Admin Password</Label>
                      <Input
                        id="admin-password"
                        type="password"
                        placeholder="Enter admin password"
                        className="mt-1"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing In..." : "Sign In as Admin"}
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center space-y-4">
              <Button variant="link" className="text-workbridge-primary">
                Forgot your password?
              </Button>
              <div className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Button 
                  variant="link" 
                  className="text-workbridge-primary p-0"
                  onClick={() => navigate('/register')}
                >
                  Sign up here
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
