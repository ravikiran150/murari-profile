import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { User, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: <User className="w-8 h-8" />,
      title: language === 'en' ? '15+ Years Experience' : '12+ సంవత్సరాల అనుభవం',
      description: language === 'en' ? 'Extensive experience in Hindu rituals and ceremonies' : 'హిందూ ఆచారాలు మరియు వేడుకలలో విస్తృత అనుభవం'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: language === 'en' ? 'Vedic Scholar' : 'వైదిక విద్వాన్',
      description: language === 'en' ? 'Deep knowledge of Hindu scriptures and traditions' : 'హిందూ గ్రంధాలు మరియు సంప్రదాయాలపై లోతైన జ్ఞానం'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: language === 'en' ? 'Dedicated Service' : 'అంకిత సేవ',
      description: language === 'en' ? 'Committed to preserving sacred traditions' : 'పవిత్ర సంప్రదాయాలను పరిరక్షించడానికి అంకితమై'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className={`text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 ${
            language === 'te' ? 'font-telugu' : ''
          }`}>
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className={`text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 ${
              language === 'te' ? 'font-telugu' : ''
            }`}>
              {t('about.summary')}
            </p>
            
            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold text-gray-900 dark:text-white mb-2 ${
                      language === 'te' ? 'font-telugu' : ''
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-gray-600 dark:text-gray-300 ${
                      language === 'te' ? 'font-telugu' : ''
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 to-orange-100 dark:from-primary-900 dark:to-orange-900 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-4xl">🕉️</span>
                </div>
                <h3 className={`text-xl font-semibold text-gray-900 dark:text-white mb-4 ${
                  language === 'te' ? 'font-telugu' : ''
                }`}>
                  {language === 'en' ? 'Sanatan Dharma' : 'సనాతన ధర్మం'}
                </h3>
                <p className={`text-gray-600 dark:text-gray-300 ${
                  language === 'te' ? 'font-telugu' : ''
                }`}>
                  {language === 'en' 
                    ? 'Preserving and sharing the eternal wisdom of Hindu traditions'
                    : 'హిందూ సంప్రదాయాల యొక్క శాశ్వత జ్ఞానాన్ని పరిరక్షించడం మరియు పంచుకోవడం'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
