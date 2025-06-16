import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const { t, language } = useLanguage();

  const experienceItems = [
    t('experience.item1'),
    t('experience.item2'),
    t('experience.item3'),
    t('experience.item4'),
    t('experience.item5'),
  ];

  const pratishthaProjects = [
    'Dattatreya Swamy Prathistapana (2012)',
    'Kalabairava Swamy Prathistapana (2022)',
    'Dwajasthambam Pratishta in Shri Dwadasha Jyotirlinga Bhuvaneshwari Devastanam, Kukatpally (2021)',
    'Renuka Yellamma Prathistapana (2018)',
    'Vijaya Ganapti, Kamashi Sameta Pashupatinath, Abhaya Anjaneya Prathistapana in IDPL',
    'Panchamukhi Anjaneya Swami and Naga Prathistapana at Nizampet',
  ];

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className={`text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 ${
            language === 'te' ? 'font-telugu' : ''
          }`}>
            {t('experience.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className={`text-2xl font-bold text-gray-900 dark:text-white ${
                language === 'te' ? 'font-telugu' : ''
              }`}>
                {language === 'en' ? 'Professional Experience' : 'వృత్తిపరమైన అనుభవం'}
              </h3>
            </div>

            <div className="space-y-6">
              {experienceItems.map((item, index) => (
                <div key={index} className="card">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-3 h-3 bg-primary-600 rounded-full mt-2"></div>
                    <p className={`text-gray-600 dark:text-gray-300 ${
                      language === 'te' ? 'font-telugu' : ''
                    }`}>
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pratishtha Projects */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className={`text-2xl font-bold text-gray-900 dark:text-white ${
                language === 'te' ? 'font-telugu' : ''
              }`}>
                {language === 'en' ? 'Pratishtha Projects' : 'ప్రతిష్ఠా ప్రాజెక్టులు'}
              </h3>
            </div>

            <div className="space-y-4">
              {pratishthaProjects.map((project, index) => (
                <div key={index} className="card">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">
                        {project}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-orange-50 dark:from-primary-900 dark:to-orange-900 rounded-2xl p-8">
            <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-4 ${
              language === 'te' ? 'font-telugu' : ''
            }`}>
              {language === 'en' ? '12+ Years of Dedicated Service' : '12+ సంవత్సరాల అంకిత సేవ'}
            </h3>
            <p className={`text-lg text-gray-600 dark:text-gray-300 ${
              language === 'te' ? 'font-telugu' : ''
            }`}>
              {language === 'en' 
                ? 'Serving the community with devotion and expertise in Hindu religious ceremonies'
                : 'హిందూ మతపరమైన వేడుకలలో భక్తి మరియు నైపుణ్యంతో సమాజానికి సేవలు అందించడం'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 