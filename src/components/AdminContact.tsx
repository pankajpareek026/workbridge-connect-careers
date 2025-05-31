
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const AdminContact = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-r from-gray-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('adminContact.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('adminContact.subtitle')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-workbridge-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-workbridge-primary/20 transition-colors">
                    <Phone className="h-8 w-8 text-workbridge-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('adminContact.phoneSupport')}</h3>
                  <p className="text-gray-600 mb-3">{t('adminContact.phoneDesc')}</p>
                  <a 
                    href="tel:+1234567890" 
                    className="text-workbridge-primary font-medium hover:underline text-lg"
                  >
                    +1 (234) 567-8900
                  </a>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-workbridge-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-workbridge-secondary/20 transition-colors">
                    <Mail className="h-8 w-8 text-workbridge-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('adminContact.emailSupport')}</h3>
                  <p className="text-gray-600 mb-3">{t('adminContact.emailDesc')}</p>
                  <a 
                    href="mailto:admin@workbridge.com" 
                    className="text-workbridge-secondary font-medium hover:underline"
                  >
                    admin@workbridge.com
                  </a>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-workbridge-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-workbridge-accent/20 transition-colors">
                    <MapPin className="h-8 w-8 text-workbridge-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('adminContact.officeLocation')}</h3>
                  <p className="text-gray-600 mb-3">{t('adminContact.officeDesc')}</p>
                  <p className="text-workbridge-accent font-medium">
                    123 Business Ave<br />
                    Suite 100, City 12345
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-500">
                  <strong>{t('adminContact.businessHours')}</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdminContact;
