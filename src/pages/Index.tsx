
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Users, Search, User } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Briefcase className="h-8 w-8 text-workbridge-primary" />
              <h1 className="text-2xl font-bold text-workbridge-primary">WorkBridge</h1>
            </div>
            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                onClick={() => navigate('/login')}
                className="hover:bg-primary-50"
              >
                Sign In
              </Button>
              <Button 
                onClick={() => navigate('/register')}
                className="bg-workbridge-primary hover:bg-workbridge-primary/90"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Connect Talent with 
            <span className="text-workbridge-primary"> Opportunity</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            WorkBridge brings together job seekers and employers in a seamless, 
            modern platform designed for today's workforce.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              onClick={() => navigate('/job-seeker-register')}
              className="bg-workbridge-primary hover:bg-workbridge-primary/90 px-8 py-6 text-lg"
            >
              <User className="mr-2 h-5 w-5" />
              Find Jobs
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/employer-register')}
              className="border-workbridge-primary text-workbridge-primary hover:bg-workbridge-primary hover:text-white px-8 py-6 text-lg"
            >
              <Users className="mr-2 h-5 w-5" />
              Hire Talent
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose WorkBridge?</h2>
          <p className="text-lg text-gray-600">
            Built for the modern job market with features that matter
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-all duration-300 animate-slide-in border-l-4 border-l-workbridge-primary">
            <CardHeader>
              <div className="w-12 h-12 bg-workbridge-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-workbridge-primary" />
              </div>
              <CardTitle>Smart Job Matching</CardTitle>
              <CardDescription>
                AI-powered recommendations to find the perfect job or candidate
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 animate-slide-in border-l-4 border-l-workbridge-secondary">
            <CardHeader>
              <div className="w-12 h-12 bg-workbridge-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <User className="h-6 w-6 text-workbridge-secondary" />
              </div>
              <CardTitle>Easy Profile Setup</CardTitle>
              <CardDescription>
                Quick registration with phone verification and resume upload
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 animate-slide-in border-l-4 border-l-workbridge-accent">
            <CardHeader>
              <div className="w-12 h-12 bg-workbridge-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-workbridge-accent" />
              </div>
              <CardTitle>All Industries</CardTitle>
              <CardDescription>
                From IT to retail, find opportunities across all sectors
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-workbridge-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Active Jobs</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold mb-2">50,000+</div>
              <div className="text-blue-100">Job Seekers</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold mb-2">5,000+</div>
              <div className="text-blue-100">Companies</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of professionals who found their dream job through WorkBridge
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/register')}
            className="bg-workbridge-primary hover:bg-workbridge-primary/90 px-8 py-6 text-lg"
          >
            Start Your Journey Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Briefcase className="h-6 w-6" />
              <span className="text-xl font-bold">WorkBridge</span>
            </div>
            <div className="text-gray-400">
              © 2024 WorkBridge. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
