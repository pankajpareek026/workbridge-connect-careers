
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.signIn': 'Sign In',
    'nav.getStarted': 'Get Started',
    'nav.contact': 'Contact',
    'nav.admin': 'Admin',
    
    // Hero Section
    'hero.tagline': '🚀 Now Connecting 10,000+ Professionals',
    'hero.title': 'Bridge Your Career to',
    'hero.titleHighlight': 'Success',
    'hero.description': 'Connect with top employers and discover opportunities that match your skills, ambitions, and career goals. Your next chapter starts here.',
    'hero.findJob': 'Find Your Dream Job',
    'hero.postJob': 'Post a Job',
    
    // Stats
    'stats.activeJobs': 'Active Jobs',
    'stats.companies': 'Companies',
    'stats.jobSeekers': 'Job Seekers',
    'stats.successRate': 'Success Rate',
    
    // Features
    'features.title': 'Why Choose WorkBridge?',
    'features.subtitle': 'We\'ve built the most advanced job matching platform to connect talent with opportunity',
    'features.smartMatching': 'Smart Job Matching',
    'features.smartMatchingDesc': 'AI-powered algorithm matches your skills with the perfect opportunities',
    'features.verifiedCompanies': 'Verified Companies',
    'features.verifiedCompaniesDesc': 'All employers are verified to ensure legitimate job opportunities',
    'features.realTimeApps': 'Real-time Applications',
    'features.realTimeAppsDesc': 'Apply instantly and track your application status in real-time',
    
    // Testimonials
    'testimonials.title': 'Success Stories',
    'testimonials.subtitle': 'Hear from professionals who found their perfect match',
    'testimonials.sarah': 'Found my dream job in just 2 weeks! The platform made the entire process seamless.',
    'testimonials.mike': 'Best platform for finding quality candidates. Highly recommend for any employer.',
    
    // CTA
    'cta.title': 'Ready to Transform Your Career?',
    'cta.subtitle': 'Join thousands of professionals who have already found their perfect job match',
    'cta.startJourney': 'Start Your Journey',
    
    // Footer
    'footer.description': 'Connecting talent with opportunity through innovative job matching technology.',
    'footer.company': 'Company',
    'footer.contactUs': 'Contact Us',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsOfService': 'Terms of Service',
    'footer.jobSeekers': 'Job Seekers',
    'footer.browseJobs': 'Browse Jobs',
    'footer.createAccount': 'Create Account',
    'footer.employers': 'Employers',
    'footer.employerSignUp': 'Employer Sign Up',
    'footer.employerLogin': 'Employer Login',
    'footer.copyright': '© 2024 WorkBridge. All rights reserved.',
    
    // Admin Contact
    'adminContact.title': 'Need Help? Contact Admin',
    'adminContact.subtitle': 'Our administration team is here to assist you with any questions or support you may need',
    'adminContact.phoneSupport': 'Phone Support',
    'adminContact.phoneDesc': 'Call us during business hours',
    'adminContact.emailSupport': 'Email Support',
    'adminContact.emailDesc': 'Get help via email',
    'adminContact.officeLocation': 'Office Location',
    'adminContact.officeDesc': 'Visit us in person',
    'adminContact.businessHours': 'Business Hours: Monday - Friday, 9:00 AM - 6:00 PM (EST)',
  },
  hi: {
    // Navigation
    'nav.signIn': 'साइन इन',
    'nav.getStarted': 'शुरू करें',
    'nav.contact': 'संपर्क',
    'nav.admin': 'एडमिन',
    
    // Hero Section
    'hero.tagline': '🚀 अब 10,000+ पेशेवरों को जोड़ रहा है',
    'hero.title': 'अपने करियर को',
    'hero.titleHighlight': 'सफलता',
    'hero.titleEnd': 'से जोड़ें',
    'hero.description': 'शीर्ष नियोक्ताओं के साथ जुड़ें और ऐसे अवसर खोजें जो आपके कौशल, महत्वाकांक्षाओं और करियर लक्ष्यों से मेल खाते हों। आपका अगला अध्याय यहाँ से शुरू होता है।',
    'hero.findJob': 'अपना सपनों का काम खोजें',
    'hero.postJob': 'नौकरी पोस्ट करें',
    
    // Stats
    'stats.activeJobs': 'सक्रिय नौकरियां',
    'stats.companies': 'कंपनियां',
    'stats.jobSeekers': 'नौकरी तलाशने वाले',
    'stats.successRate': 'सफलता दर',
    
    // Features
    'features.title': 'WorkBridge क्यों चुनें?',
    'features.subtitle': 'हमने प्रतिभा को अवसर से जोड़ने के लिए सबसे उन्नत जॉब मैचिंग प्लेटफॉर्म बनाया है',
    'features.smartMatching': 'स्मार्ट जॉब मैचिंग',
    'features.smartMatchingDesc': 'AI-संचालित एल्गोरिदम आपके कौशल को सही अवसरों से मिलाता है',
    'features.verifiedCompanies': 'सत्यापित कंपनियां',
    'features.verifiedCompaniesDesc': 'वैध नौकरी के अवसर सुनिश्चित करने के लिए सभी नियोक्ताओं को सत्यापित किया गया है',
    'features.realTimeApps': 'रियल-टाइम आवेदन',
    'features.realTimeAppsDesc': 'तुरंत आवेदन करें और अपनी आवेदन स्थिति को रियल-टाइम में ट्रैक करें',
    
    // Testimonials
    'testimonials.title': 'सफलता की कहानियां',
    'testimonials.subtitle': 'उन पेशेवरों से सुनें जिन्होंने अपना सही मैच पाया',
    'testimonials.sarah': 'केवल 2 सप्ताह में अपना सपनों का काम मिल गया! प्लेटफॉर्म ने पूरी प्रक्रिया को निर्बाध बनाया।',
    'testimonials.mike': 'गुणवत्तापूर्ण उम्मीदवार खोजने के लिए सबसे अच्छा प्लेटफॉर्म। किसी भी नियोक्ता के लिए अत्यधिक अनुशंसित।',
    
    // CTA
    'cta.title': 'अपने करियर को बदलने के लिए तैयार हैं?',
    'cta.subtitle': 'हजारों पेशेवरों में शामिल हों जिन्होंने पहले से ही अपना सही जॉब मैच पाया है',
    'cta.startJourney': 'अपनी यात्रा शुरू करें',
    
    // Footer
    'footer.description': 'नवाचार जॉब मैचिंग तकनीक के माध्यम से प्रतिभा को अवसर से जोड़ना।',
    'footer.company': 'कंपनी',
    'footer.contactUs': 'हमसे संपर्क करें',
    'footer.privacyPolicy': 'गोपनीयता नीति',
    'footer.termsOfService': 'सेवा की शर्तें',
    'footer.jobSeekers': 'नौकरी तलाशने वाले',
    'footer.browseJobs': 'नौकरियां ब्राउज़ करें',
    'footer.createAccount': 'खाता बनाएं',
    'footer.employers': 'नियोक्ता',
    'footer.employerSignUp': 'नियोक्ता साइन अप',
    'footer.employerLogin': 'नियोक्ता लॉगिन',
    'footer.copyright': '© 2024 WorkBridge। सभी अधिकार सुरक्षित।',
    
    // Admin Contact
    'adminContact.title': 'सहायता चाहिए? एडमिन से संपर्क करें',
    'adminContact.subtitle': 'हमारी प्रशासन टीम आपकी किसी भी प्रश्न या सहायता की आवश्यकता में आपकी सहायता के लिए यहाँ है',
    'adminContact.phoneSupport': 'फोन सहायता',
    'adminContact.phoneDesc': 'व्यापारिक घंटों के दौरान हमें कॉल करें',
    'adminContact.emailSupport': 'ईमेल सहायता',
    'adminContact.emailDesc': 'ईमेल के माध्यम से सहायता प्राप्त करें',
    'adminContact.officeLocation': 'कार्यालय स्थान',
    'adminContact.officeDesc': 'व्यक्तिगत रूप से हमसे मिलें',
    'adminContact.businessHours': 'व्यापारिक घंटे: सोमवार - शुक्रवार, सुबह 9:00 - शाम 6:00 (EST)',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
