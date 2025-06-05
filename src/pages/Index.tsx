
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Users, Building, TrendingUp, Star, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import AdminContact from '@/components/AdminContact';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import JobPopup from '@/components/JobPopup';
import React, { useState, useEffect } from 'react';

const Index = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const hasPopupBeenShown = localStorage.getItem('jobPopupShown');
    if (!hasPopupBeenShown) {
      setIsPopupOpen(true);
      localStorage.setItem('jobPopupShown', 'true');
    }
  }, []);

  const handlePopupClick = () => {
    setIsPopupOpen(false);
    navigate('/job-browser'); // Redirect to job browser page
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
      icon: TrendingUp
    },
    {
      title: t('features.verifiedCompanies'),
      description: t('features.verifiedCompaniesDesc'),
      icon: CheckCircle
    },
    {
      title: t('features.realTimeApps'),
      description: t('features.realTimeAppsDesc'),
      icon: Briefcase
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Briefcase className="h-8 w-8 text-workbridge-primary" />
              <h1 className="text-2xl font-bold text-workbridge-primary">Jay shree joranath jobs</h1>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <LanguageSwitcher />
              <Button
                variant="ghost"
                onClick={() => navigate('/contact-us')}
                className="text-gray-600 hover:text-jay-shree-joranath-jobs-primary text-sm"
              >
                {t('nav.contact')}
              </Button>
              <Button
                variant="ghost"
                onClick={() => navigate('/admin-dashboard')}
                className="text-gray-600 hover:text-jay-shree-joranath-jobs-primary hidden sm:flex"
              >
                <Shield className="h-4 w-4 mr-2" />
                {t('nav.admin')}
              </Button>
              <Button variant="outline" onClick={() => navigate('/login')} className="text-sm">
                {t('nav.signIn')}
              </Button>
              <Button onClick={() => navigate('/register')} className="bg-jay-shree-joranath-jobs-primary text-sm">
                {t('nav.getStarted')}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-jay-shree-joranath-jobs-primary/10 text-jay-shree-joranath-jobs-primary">
              {t('hero.tagline')}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('hero.title')}
              <span className="text-jay-shree-joranath-jobs-primary"> {t('hero.titleHighlight')}</span>
              {language === 'hi' && <span> {t('hero.titleEnd')}</span>}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-jay-shree-joranath-jobs-primary hover:bg-jay-shree-joranath-jobs-primary/90 text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                onClick={() => navigate('/register')}
              >
                {t('hero.findJob')}
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                onClick={() => navigate('/register')}
              >
                {t('hero.postJob')}
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
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-jay-shree-joranath-jobs-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 md:h-8 md:w-8 text-jay-shree-joranath-jobs-primary" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('features.title')}</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-12 h-12 bg-jay-shree-joranath-jobs-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-jay-shree-joranath-jobs-primary" />
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
      <section className="py-12 md:py-20 bg-gradient-to-r from-jay-shree-joranath-jobs-primary/5 to-jay-shree-joranath-jobs-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('testimonials.title')}</h2>
            <p className="text-lg md:text-xl text-gray-600">{t('testimonials.subtitle')}</p>
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
      <section className="py-12 md:py-20 bg-gradient-to-r from-jay-shree-joranath-jobs-primary to-jay-shree-joranath-jobs-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('cta.title')}</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                onClick={() => navigate('/register')}
              >
                {t('cta.startJourney')}
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
                <span className="text-xl font-bold">Jay shree joranath jobs</span>
              </div>
              <p className="text-gray-400 text-sm">
                {t('footer.description')}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t('footer.company')}</h3>
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
              <h3 className="font-semibold mb-4">{t('footer.jobSeekers')}</h3>
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
              <h3 className="font-semibold mb-4">{t('footer.employers')}</h3>
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

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>

      <JobPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} onButtonClick={handlePopupClick} />
    </div>
  );
};

export default Index;
