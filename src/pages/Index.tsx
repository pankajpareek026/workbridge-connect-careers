
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Users, Search, User, CheckCircle, Star, TrendingUp, Globe } from 'lucide-react';
import AdminContact from '@/components/AdminContact';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-workbridge-primary to-workbridge-secondary rounded-lg flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-workbridge-primary to-workbridge-secondary bg-clip-text text-transparent">
                WorkBridge
              </h1>
            </div>
            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                onClick={() => navigate('/login')}
                className="border-workbridge-primary/20 hover:bg-workbridge-primary/5 hover:border-workbridge-primary/40 transition-all duration-200"
              >
                Sign In
              </Button>
              <Button 
                onClick={() => navigate('/register')}
                className="bg-gradient-to-r from-workbridge-primary to-workbridge-secondary hover:from-workbridge-primary/90 hover:to-workbridge-secondary/90 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-workbridge-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-workbridge-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="animate-fade-in max-w-4xl mx-auto">
            <Badge className="mb-6 bg-workbridge-primary/10 text-workbridge-primary border-workbridge-primary/20 hover:bg-workbridge-primary/20 transition-colors">
              🚀 Trusted by 50,000+ professionals
            </Badge>
            
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Connect Talent with 
              <span className="bg-gradient-to-r from-workbridge-primary to-workbridge-secondary bg-clip-text text-transparent block">
                Opportunity
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              WorkBridge is the modern platform that brings together job seekers and employers, 
              creating meaningful connections in today's evolving workforce.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button 
                size="lg" 
                onClick={() => navigate('/register')}
                className="bg-gradient-to-r from-workbridge-primary to-workbridge-secondary hover:from-workbridge-primary/90 hover:to-workbridge-secondary/90 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <User className="mr-2 h-5 w-5" />
                Find Your Dream Job
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/register')}
                className="border-2 border-workbridge-primary text-workbridge-primary hover:bg-workbridge-primary hover:text-white px-8 py-6 text-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                <Users className="mr-2 h-5 w-5" />
                Hire Top Talent
              </Button>
            </div>
            
            <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Free to join</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Quick setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>AI-powered matching</span>
              </div>
            </div>
            
            <div className="mt-8">
              <Button 
                variant="link" 
                onClick={() => navigate('/jobs')}
                className="text-workbridge-primary hover:text-workbridge-secondary font-medium text-lg"
              >
                Or browse jobs without signing up →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-workbridge-secondary/10 text-workbridge-secondary border-workbridge-secondary/20">
              ✨ Premium Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose WorkBridge?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for the modern job market with cutting-edge features that deliver results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-workbridge-primary/10 to-workbridge-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Search className="h-8 w-8 text-workbridge-primary" />
                </div>
                <CardTitle className="text-xl">Smart Matching</CardTitle>
                <CardDescription className="text-base">
                  AI-powered recommendations that find your perfect match
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-workbridge-secondary/10 to-workbridge-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8 text-workbridge-secondary" />
                </div>
                <CardTitle className="text-xl">Career Growth</CardTitle>
                <CardDescription className="text-base">
                  Tools and insights to accelerate your professional journey
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-workbridge-accent/10 to-workbridge-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-8 w-8 text-workbridge-accent" />
                </div>
                <CardTitle className="text-xl">Global Reach</CardTitle>
                <CardDescription className="text-base">
                  Connect with opportunities worldwide across all industries
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/10 to-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Star className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-xl">Premium Support</CardTitle>
                <CardDescription className="text-base">
                  24/7 support team dedicated to your success
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-workbridge-primary via-workbridge-secondary to-workbridge-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-blue-100">Join thousands of successful professionals</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-blue-100 text-lg">Active Jobs</div>
            </div>
            <div className="animate-fade-in bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <div className="text-blue-100 text-lg">Job Seekers</div>
            </div>
            <div className="animate-fade-in bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold mb-2">5K+</div>
              <div className="text-blue-100 text-lg">Companies</div>
            </div>
            <div className="animate-fade-in bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-blue-100 text-lg">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Contact Section */}
      <AdminContact />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-workbridge-primary to-workbridge-secondary rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Briefcase className="h-10 w-10 text-white" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Join thousands of professionals who found their dream job through WorkBridge. 
                Your next opportunity is just one click away.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg"
                  onClick={() => navigate('/register')}
                  className="bg-gradient-to-r from-workbridge-primary to-workbridge-secondary hover:from-workbridge-primary/90 hover:to-workbridge-secondary/90 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                >
                  Start Your Journey Today
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/jobs')}
                  className="border-2 border-workbridge-primary text-workbridge-primary hover:bg-workbridge-primary hover:text-white px-8 py-6 text-lg font-semibold transition-all duration-200"
                >
                  Explore Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-workbridge-primary to-workbridge-secondary rounded-lg flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-white" />
                </div>
                <span className="text-2xl font-bold">WorkBridge</span>
              </div>
              <p className="text-gray-400 max-w-md mb-6">
                Connecting talent with opportunity through innovative technology and personalized matching.
              </p>
              <div className="flex space-x-4">
                <Badge variant="outline" className="border-gray-600 text-gray-300">
                  Trusted Platform
                </Badge>
                <Badge variant="outline" className="border-gray-600 text-gray-300">
                  Secure & Private
                </Badge>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Button variant="link" className="p-0 h-auto text-gray-400 hover:text-white" onClick={() => navigate('/jobs')}>Browse Jobs</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-gray-400 hover:text-white" onClick={() => navigate('/register')}>Join Now</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-gray-400 hover:text-white" onClick={() => navigate('/login')}>Sign In</Button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-lg">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 WorkBridge. All rights reserved.
            </div>
            <div className="text-sm text-gray-500">
              Built with ❤️ for the modern workforce
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
