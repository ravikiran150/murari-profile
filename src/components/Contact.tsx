import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: t('contact.phone'),
      value: '+91 9966 666391',
      href: 'tel:+919966666391',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t('contact.email'),
      value: 'murarimady@gmail.com',
      href: 'mailto:murarimady@gmail.com',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('contact.address'),
      value: language === 'en' 
        ? 'Hyderabad, Telangana, India'
        : 'హైదరాబాద్, తెలంగాణ, భారతదేశం',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className={`text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 ${
            language === 'te' ? 'font-telugu' : ''
          }`}>
            {t('contact.title')}
          </h2>
          <p className={`text-lg text-gray-600 dark:text-gray-300 mb-4 ${
            language === 'te' ? 'font-telugu' : ''
          }`}>
            {t('contact.subtitle')}
          </p>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-8 ${
              language === 'te' ? 'font-telugu' : ''
            }`}>
              {language === 'en' ? 'Get in Touch' : 'సంప్రదించండి'}
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold text-gray-900 dark:text-white mb-1 ${
                      language === 'te' ? 'font-telugu' : ''
                    }`}>
                      {info.title}
                    </h4>
                    <a
                      href={info.href}
                      className={`text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 ${
                        language === 'te' ? 'font-telugu' : ''
                      }`}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="mt-12">
              <h4 className={`text-xl font-semibold text-gray-900 dark:text-white mb-6 ${
                language === 'te' ? 'font-telugu' : ''
              }`}>
                {language === 'en' ? 'Follow Me' : 'నన్ను అనుసరించండి'}
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61577623463731"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                  title="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/astro_murarisharma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                  title="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zm-7.83 11.781c-2.026 0-3.744-.807-5.097-2.16C2.549 14.895 1.742 13.177 1.742 11.151s.807-3.744 2.16-5.097c1.353-1.353 3.071-2.16 5.097-2.16s3.744.807 5.097 2.16c1.353 1.353 2.16 3.071 2.16 5.097s-.807 3.744-2.16 5.097c-1.353 1.353-3.071 2.16-5.097 2.16z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/Astromurarii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                  title="X (Twitter)"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/919966666391"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                  title="WhatsApp"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                  title="YouTube"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div>
            <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-8 ${
              language === 'te' ? 'font-telugu' : ''
            }`}>
              {language === 'en' ? 'Client Testimonials' : 'క్లయింట్ సాక్ష్యాలు'}
            </h3>
            
            <div className="space-y-6">
              {/* Testimonial 1 */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h4 className={`text-lg font-semibold text-gray-900 dark:text-white ${
                        language === 'te' ? 'font-telugu' : ''
                      }`}>
                        {language === 'en' ? 'Priya Sharma' : 'ప్రియ శర్మ'}
                      </h4>
                      <div className="flex ml-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className={`text-gray-600 dark:text-gray-300 italic ${
                      language === 'te' ? 'font-telugu' : ''
                    }`}>
                      {language === 'en' 
                        ? '"Murari Sharma\'s astrological guidance completely transformed my life. His predictions were incredibly accurate and his remedies worked wonders. Highly recommended!"'
                        : '"మురారి శర్మ గారి జ్యోతిష్య మార్గదర్శకత్వం నా జీవితాన్ని పూర్తిగా మార్చివేసింది. ఆయన ఊహలు చాలా ఖచ్చితంగా ఉన్నాయి మరియు ఆయన ఉపాయాలు అద్భుతంగా పనిచేశాయి. ఎంతో సిఫార్సు చేస్తున్నాను!"'
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h4 className={`text-lg font-semibold text-gray-900 dark:text-white ${
                        language === 'te' ? 'font-telugu' : ''
                      }`}>
                        {language === 'en' ? 'Rajesh Kumar' : 'రాజేష్ కుమార్'}
                      </h4>
                      <div className="flex ml-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className={`text-gray-600 dark:text-gray-300 italic ${
                      language === 'te' ? 'font-telugu' : ''
                    }`}>
                      {language === 'en' 
                        ? '"I was going through a difficult phase in my career. Murari ji\'s consultation helped me understand the planetary influences and his remedies brought positive changes."'
                        : '"నేను నా వృత్తిలో కష్టమైన దశలో ఉన్నాను. మురారి గారి సంప్రదింపు గ్రహ ప్రభావాలను అర్థం చేసుకోవడానికి సహాయపడింది మరియు ఆయన ఉపాయాలు సానుకూల మార్పులను తీసుకువచ్చాయి."'
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h4 className={`text-lg font-semibold text-gray-900 dark:text-white ${
                        language === 'te' ? 'font-telugu' : ''
                      }`}>
                        {language === 'en' ? 'Lakshmi Devi' : 'లక్ష్మీ దేవి'}
                      </h4>
                      <div className="flex ml-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className={`text-gray-600 dark:text-gray-300 italic ${
                      language === 'te' ? 'font-telugu' : ''
                    }`}>
                      {language === 'en' 
                        ? '"Murari Sharma is a true expert in Vedic astrology. His marriage compatibility analysis was spot on and helped us make the right decision for our daughter."'
                        : '"మురారి శర్మ వేదిక జ్యోతిష్యంలో నిజమైన నిపుణుడు. ఆయన వివాహ అనుకూలత విశ్లేషణ చాలా ఖచ్చితంగా ఉంది మరియు మా కుమార్తెకు సరైన నిర్ణయం తీసుకోవడానికి సహాయపడింది."'
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h4 className={`text-lg font-semibold text-gray-900 dark:text-white ${
                        language === 'te' ? 'font-telugu' : ''
                      }`}>
                        {language === 'en' ? 'Suresh Reddy' : 'సురేష్ రెడ్డి'}
                      </h4>
                      <div className="flex ml-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className={`text-gray-600 dark:text-gray-300 italic ${
                      language === 'te' ? 'font-telugu' : ''
                    }`}>
                      {language === 'en' 
                        ? '"The horoscope reading by Murari ji was incredibly detailed and accurate. His guidance helped me understand my life path better and make informed decisions."'
                        : '"మురారి గారి జాతక పఠనం చాలా వివరంగా మరియు ఖచ్చితంగా ఉంది. ఆయన మార్గదర్శకత్వం నా జీవిత మార్గాన్ని బాగా అర్థం చేసుకోవడానికి మరియు సమాచారపూర్వక నిర్ణయాలు తీసుకోవడానికి సహాయపడింది."'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
