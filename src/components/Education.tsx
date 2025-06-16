import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const Education: React.FC = () => {
  const { t, language } = useLanguage();

  const vedicEducation = [
    t('education.vedic.item1'),
    t('education.vedic.item2'),
    t('education.vedic.item3'),
  ];

  const academicEducation = [
    t('education.academic.mba'),
    t('education.academic.bcom'),
    t('education.academic.vedic'),
    t('education.academic.astrology'),
    t('education.academic.chandi'),
    t('education.academic.scholar'),
  ];

  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className={`text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 ${
            language === 'te' ? 'font-telugu' : ''
          }`}>
            {t('education.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Vedic Education */}
          <div className="card">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className={`text-2xl font-bold text-gray-900 dark:text-white ${
                language === 'te' ? 'font-telugu' : ''
              }`}>
                {t('education.vedic.title')}
              </h3>
            </div>
            
            <ul className="space-y-4">
              {vedicEducation.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                  <p className={`text-gray-600 dark:text-gray-300 ${
                    language === 'te' ? 'font-telugu' : ''
                  }`}>
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Education */}
          <div className="card">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className={`text-2xl font-bold text-gray-900 dark:text-white ${
                language === 'te' ? 'font-telugu' : ''
              }`}>
                {t('education.academic.title')}
              </h3>
            </div>
            
            <ul className="space-y-4">
              {academicEducation.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                  <p className={`text-gray-600 dark:text-gray-300 ${
                    language === 'te' ? 'font-telugu' : ''
                  }`}>
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Certification */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-primary-100 dark:bg-primary-900 px-6 py-3 rounded-full">
            <Award className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
            <span className={`text-primary-800 dark:text-primary-200 font-semibold ${
              language === 'te' ? 'font-telugu' : ''
            }`}>
              {language === 'en' 
                ? 'Certified Vedic Scholar & Astrologer'
                : 'ప్రమాణిత వైదిక విద్వాన్ & జ్యోతిష్యుడు'
              }
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 