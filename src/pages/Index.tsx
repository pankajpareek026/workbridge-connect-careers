import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Users, Building, TrendingUp, Star, CheckCircle, ArrowRight, Shield, Phone, Mail, MapPin, Search, FileText, UserCheck, Upload, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import AdminContact from '@/components/AdminContact';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import JobPopup from '@/components/JobPopup';

const Index = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Show popup after a small delay to ensure proper rendering
    const timer = setTimeout(() => {
      const hasPopupBeenShown = localStorage.getItem('jobPopupShown');
      if (!hasPopupBeenShown) {
        setIsPopupOpen(true);
        localStorage.setItem('jobPopupShown', 'true');
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handlePopupClick = () => {
    setIsPopupOpen(false);
    navigate('/jobs');
  };

  const stats = [
    { label: t('stats.activeJobs'), value: '500+', icon: Briefcase },
    { label: t('stats.companies'), value: '200+', icon: Building },
    { label: t('stats.jobSeekers'), value: '10k+', icon: Users },
    { label: t('stats.successRate'), value: '85%', icon: TrendingUp },
  ];

  const features = [
    {
      title: t('features.smartMatching'),
      description: t('features.smartMatchingDesc'),
      icon: Search
    },
    {
      title: t('features.verifiedCompanies'),
      description: t('features.verifiedCompaniesDesc'),
      icon: UserCheck
    },
    {
      title: t('features.realTimeApps'),
      description: t('features.realTimeAppsDesc'),
      icon: FileText
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      company: 'TechCorp',
      content: t('testimonials.sarah'),
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'HR Director',
      company: 'StartupXYZ',
      content: t('testimonials.mike'),
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Briefcase className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
              </div>
              <h1 className="text-lg sm:text-2xl font-bold text-blue-600">
                Jay shree joranath jobs
              </h1>
            </div>
            
            {/* Navigation Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600 text-sm">
                FEMALE JOBS
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600 text-sm">
                URGENT JOBS
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600 text-sm">
                FRESHERS JOBS
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600 text-sm">
                ALL JOBS
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600 text-sm">
                CAREER GUIDE
              </Button>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <LanguageSwitcher />
              <Button variant="ghost" onClick={() => navigate('/login')} className="text-blue-600 hover:text-blue-700 text-sm sm:text-base">
                <User className="h-4 w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Login</span>
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-3 sm:px-6 text-sm sm:text-base">
                <span className="hidden sm:inline">Hire Staff</span>
                <span className="sm:hidden">Hire</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Clean and Centered Design */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Main Search Card */}
            <Card className="bg-white shadow-2xl border-0 rounded-lg overflow-hidden">
              <CardHeader className="text-center py-8 px-6">
                <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-2">
                  Find Jobs In Your City
                </CardTitle>
              </CardHeader>
              
              <CardContent className="px-6 pb-8">
                {/* Search Form */}
                <div className="space-y-6">
                  {/* Job Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Which Job?
                    </label>
                    <Input 
                      placeholder="Designation, Job Title or any keyword"
                      className="h-12 text-base border-gray-300"
                    />
                  </div>
                  
                  {/* Location Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Where?
                    </label>
                    <Input 
                      placeholder="Area, City or Pincode"
                      className="h-12 text-base border-gray-300"
                    />
                  </div>
                  
                  {/* Find Jobs Button */}
                  <Button 
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg"
                    onClick={() => navigate('/jobs')}
                  >
                    FIND JOBS
                  </Button>
                  
                  {/* Upload Resume Button */}
                  <Button 
                    className="w-full h-12 bg-red-500 hover:bg-red-600 text-white font-semibold text-lg"
                    onClick={() => navigate('/register')}
                  >
                    <Upload className="h-5 w-5 mr-2" />
                    UPLOAD RESUME
                  </Button>
                  <p className="text-xs text-red-500 text-center">
                    Allowed: pdf, doc or docx. Max: 2MB
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Floating Search Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button 
          size="lg"
          className="w-16 h-16 rounded-full bg-white text-blue-600 hover:bg-gray-50 shadow-lg border border-gray-200"
          onClick={() => navigate('/jobs')}
        >
          <div className="text-center">
            <Search className="h-6 w-6 mx-auto mb-1" />
            <span className="text-xs font-medium">JOBS</span>
          </div>
        </Button>
      </div>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t('features.title')}</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start your journey? Contact us today!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">Available 24/7 for urgent queries</p>
                  <div className="space-y-2">
                    <a 
                      href="tel:+919227049220" 
                      className="block text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm sm:text-base"
                    >
                      +91 92270 49220
                    </a>
                    <a 
                      href="tel:+919157668193" 
                      className="block text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm sm:text-base"
                    >
                      +91 91576 68193
                    </a>
                    <span className="text-xs text-blue-600 font-medium">(Priority Line)</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">We respond within 24 hours</p>
                  <a 
                    href="mailto:support@jaijonath.com" 
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm sm:text-base"
                  >
                    support@jaijonath.com
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Office Location</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">Visit us during business hours</p>
                  <p className="text-sm sm:text-base text-gray-700">
                    Business Hub<br />
                    Professional Center<br />
                    India
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t('testimonials.title')}</h2>
            <p className="text-lg sm:text-xl text-gray-600">{t('testimonials.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border border-gray-200 shadow-sm">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base sm:text-lg italic text-gray-700">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-blue-600 text-sm sm:text-base">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{t('cta.title')}</h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => navigate('/register')}
              >
                {t('cta.startJourney')}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <span className="text-lg sm:text-xl font-bold">Jay shree joranath jobs</span>
              </div>
              <p className="text-gray-400 text-sm">
                {t('footer.description')}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm sm:text-base">{t('footer.company')}</h3>
              <div className="space-y-2 text-sm">
                <button onClick={() => navigate('/contact-us')} className="block text-gray-400 hover:text-white transition-colors">
                  {t('footer.contactUs')}
                </button>
                <button onClick={() => navigate('/privacy-policy')} className="block text-gray-400 hover:text-white transition-colors">
                  {t('footer.privacyPolicy')}
                </button>
                <button onClick={() => navigate('/terms-of-service')} className="block text-gray-400 hover:text-white transition-colors">
                  {t('footer.termsOfService')}
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm sm:text-base">{t('footer.jobSeekers')}</h3>
              <div className="space-y-2 text-sm">
                <button onClick={() => navigate('/jobs')} className="block text-gray-400 hover:text-white transition-colors">
                  {t('footer.browseJobs')}
                </button>
                <button onClick={() => navigate('/register')} className="block text-gray-400 hover:text-white transition-colors">
                  {t('footer.createAccount')}
                </button>
                <button onClick={() => navigate('/login')} className="block text-gray-400 hover:text-white transition-colors">
                  {t('nav.signIn')}
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm sm:text-base">{t('footer.employers')}</h3>
              <div className="space-y-2 text-sm">
                <button onClick={() => navigate('/post-job')} className="block text-gray-400 hover:text-white transition-colors">
                  {t('hero.postJob')}
                </button>
                <button onClick={() => navigate('/register')} className="block text-gray-400 hover:text-white transition-colors">
                  {t('footer.employerSignUp')}
                </button>
                <button onClick={() => navigate('/login')} className="block text-gray-400 hover:text-white transition-colors">
                  {t('footer.employerLogin')}
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400 text-sm">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>

      <JobPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} onButtonClick={handlePopupClick} />
    </div>
  );
};

export default Index;
