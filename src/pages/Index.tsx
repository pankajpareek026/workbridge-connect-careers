import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Users, Building, TrendingUp, Star, CheckCircle, ArrowRight, Shield, Phone, Mail, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import AdminContact from '@/components/AdminContact';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Index = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();

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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="bg-white shadow-lg border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Jai Jor Nath
              </h1>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <LanguageSwitcher />
              <Button 
                variant="ghost" 
                onClick={() => navigate('/contact-us')}
                className="text-gray-600 hover:text-blue-600 text-sm"
              >
                {t('nav.contact')}
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => navigate('/admin-dashboard')}
                className="text-gray-600 hover:text-blue-600 hidden sm:flex"
              >
                <Shield className="h-4 w-4 mr-2" />
                {t('nav.admin')}
              </Button>
              <Button variant="outline" onClick={() => navigate('/login')} className="text-sm border-blue-200 hover:bg-blue-50">
                {t('nav.signIn')}
              </Button>
              <Button onClick={() => navigate('/register')} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm">
                {t('nav.getStarted')}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
              {t('hero.tagline')}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('hero.title')}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {t('hero.titleHighlight')}</span>
              {language === 'hi' && <span> {t('hero.titleEnd')}</span>}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-base md:text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
                onClick={() => navigate('/register')}
              >
                {t('hero.findJob')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base md:text-lg px-8 py-4 rounded-full border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300"
                onClick={() => navigate('/register')}
              >
                {t('hero.postJob')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('features.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start your journey? Contact us today!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
                  <p className="text-gray-600 mb-4">Available 24/7 for urgent queries</p>
                  <div className="space-y-2">
                    <a 
                      href="tel:+919227049220" 
                      className="block text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    >
                      +91 92270 49220
                    </a>
                    <a 
                      href="tel:+919157668193" 
                      className="block text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    >
                      +91 91576 68193
                    </a>
                    <span className="text-xs text-purple-600 font-medium">(Priority Line)</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-gray-600 mb-4">We respond within 24 hours</p>
                  <a 
                    href="mailto:support@jaijonath.com" 
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    support@jaijonath.com
                  </a>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Location</h3>
                  <p className="text-gray-600 mb-4">Visit us during business hours</p>
                  <p className="text-gray-700">
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('testimonials.title')}</h2>
            <p className="text-xl text-gray-600">{t('testimonials.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-lg italic text-gray-700">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-blue-600">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">{t('cta.title')}</h2>
            <p className="text-xl text-white/90 mb-8">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-full shadow-lg"
                onClick={() => navigate('/register')}
              >
                {t('cta.startJourney')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Jai Jor Nath</span>
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
    </div>
  );
};

export default Index;
