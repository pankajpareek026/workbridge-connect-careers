
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Users, Building, TrendingUp, Star, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AdminContact from '@/components/AdminContact';

const Index = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Active Jobs', value: '500+', icon: Briefcase },
    { label: 'Companies', value: '200+', icon: Building },
    { label: 'Job Seekers', value: '10k+', icon: Users },
    { label: 'Success Rate', value: '85%', icon: TrendingUp },
  ];

  const features = [
    {
      title: 'Smart Job Matching',
      description: 'AI-powered algorithm matches your skills with the perfect opportunities',
      icon: TrendingUp
    },
    {
      title: 'Verified Companies',
      description: 'All employers are verified to ensure legitimate job opportunities',
      icon: CheckCircle
    },
    {
      title: 'Real-time Applications',
      description: 'Apply instantly and track your application status in real-time',
      icon: Briefcase
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      company: 'TechCorp',
      content: 'Found my dream job in just 2 weeks! The platform made the entire process seamless.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'HR Director',
      company: 'StartupXYZ',
      content: 'Best platform for finding quality candidates. Highly recommend for any employer.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Briefcase className="h-8 w-8 text-workbridge-primary" />
              <h1 className="text-2xl font-bold text-workbridge-primary">WorkBridge</h1>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/contact-us')}
                className="text-gray-600 hover:text-workbridge-primary text-sm"
              >
                Contact
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => navigate('/admin-dashboard')}
                className="text-gray-600 hover:text-workbridge-primary hidden sm:flex"
              >
                <Shield className="h-4 w-4 mr-2" />
                Admin
              </Button>
              <Button variant="outline" onClick={() => navigate('/login')} className="text-sm">
                Sign In
              </Button>
              <Button onClick={() => navigate('/register')} className="bg-workbridge-primary text-sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-workbridge-primary/10 text-workbridge-primary">
              🚀 Now Connecting 10,000+ Professionals
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Bridge Your Career to 
              <span className="text-workbridge-primary"> Success</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Connect with top employers and discover opportunities that match your skills, 
              ambitions, and career goals. Your next chapter starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-workbridge-primary hover:bg-workbridge-primary/90 text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                onClick={() => navigate('/register')}
              >
                Find Your Dream Job
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                onClick={() => navigate('/register')}
              >
                Post a Job
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-workbridge-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 md:h-8 md:w-8 text-workbridge-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose WorkBridge?</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              We've built the most advanced job matching platform to connect talent with opportunity
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-12 h-12 bg-workbridge-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-workbridge-primary" />
                    </div>
                    <CardTitle className="text-lg md:text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-workbridge-primary/5 to-workbridge-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg md:text-xl text-gray-600">Hear from professionals who found their perfect match</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base md:text-lg italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Contact Section */}
      <AdminContact />

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-workbridge-primary to-workbridge-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Career?</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Join thousands of professionals who have already found their perfect job match
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                onClick={() => navigate('/register')}
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Briefcase className="h-6 w-6" />
                <span className="text-xl font-bold">WorkBridge</span>
              </div>
              <p className="text-gray-400 text-sm">
                Connecting talent with opportunity through innovative job matching technology.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-sm">
                <button onClick={() => navigate('/contact-us')} className="block text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </button>
                <button onClick={() => navigate('/privacy-policy')} className="block text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </button>
                <button onClick={() => navigate('/terms-of-service')} className="block text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Job Seekers</h3>
              <div className="space-y-2 text-sm">
                <button onClick={() => navigate('/jobs')} className="block text-gray-400 hover:text-white transition-colors">
                  Browse Jobs
                </button>
                <button onClick={() => navigate('/register')} className="block text-gray-400 hover:text-white transition-colors">
                  Create Account
                </button>
                <button onClick={() => navigate('/login')} className="block text-gray-400 hover:text-white transition-colors">
                  Sign In
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Employers</h3>
              <div className="space-y-2 text-sm">
                <button onClick={() => navigate('/post-job')} className="block text-gray-400 hover:text-white transition-colors">
                  Post a Job
                </button>
                <button onClick={() => navigate('/register')} className="block text-gray-400 hover:text-white transition-colors">
                  Employer Sign Up
                </button>
                <button onClick={() => navigate('/login')} className="block text-gray-400 hover:text-white transition-colors">
                  Employer Login
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 WorkBridge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
