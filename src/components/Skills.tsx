import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Star, CheckCircle } from 'lucide-react';

const Skills: React.FC = () => {
  const { t, language } = useLanguage();

  const mainSkills = [
    t('skills.item1'),
    t('skills.item2'),
    t('skills.item3'),
    t('skills.item4'),
  ];

  const additionalSkills = [
    t('additional.item1'),
    t('additional.item2'),
    t('additional.item3'),
    t('additional.item4'),
    t('additional.item5'),
    t('additional.item6'),
    t('additional.item7'),
    t('additional.item8'),
    t('additional.item9'),
    t('additional.item10'),
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className={`text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 ${
            language === 'te' ? 'font-telugu' : ''
          }`}>
            {t('skills.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Main Skills */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                <Star className="w-6 h-6" />
              </div>
              <h3 className={`text-2xl font-bold text-gray-900 dark:text-white ${
                language === 'te' ? 'font-telugu' : ''
              }`}>
                {language === 'en' ? 'Core Skills' : 'ప్రధాన నైపుణ్యాలు'}
              </h3>
            </div>

            <div className="space-y-4">
              {mainSkills.map((skill, index) => (
                <div key={index} className="card">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <p className={`text-gray-600 dark:text-gray-300 ${
                      language === 'te' ? 'font-telugu' : ''
                    }`}>
                      {skill}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Skills */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                <Star className="w-6 h-6" />
              </div>
              <h3 className={`text-2xl font-bold text-gray-900 dark:text-white ${
                language === 'te' ? 'font-telugu' : ''
              }`}>
                {t('additional.title')}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {additionalSkills.map((skill, index) => (
                <div key={index} className="card">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                    <p className={`text-sm text-gray-600 dark:text-gray-300 ${
                      language === 'te' ? 'font-telugu' : ''
                    }`}>
                      {skill}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-orange-50 dark:from-primary-900 dark:to-orange-900 rounded-2xl p-8">
            <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-4 ${
              language === 'te' ? 'font-telugu' : ''
            }`}>
              {language === 'en' ? 'Comprehensive Expertise' : 'సమగ్ర నైపుణ్యం'}
            </h3>
            <p className={`text-lg text-gray-600 dark:text-gray-300 ${
              language === 'te' ? 'font-telugu' : ''
            }`}>
              {language === 'en' 
                ? 'From traditional Vedic rituals to modern spiritual guidance, offering complete religious services'
                : 'సంప్రదాయ వైదిక ఆచారాల నుండి ఆధునిక ఆధ్యాత్మిక మార్గదర్శకత్వం వరకు, పూర్తి మతపరమైన సేవలు అందించడం'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 