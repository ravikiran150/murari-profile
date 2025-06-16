import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
                  href="#"
                  className="w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                  title="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                  title="X (Twitter)"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                  title="WhatsApp"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
                <a
                  href="#"
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

          {/* Contact Form */}
          <div>
            <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-8 ${
              language === 'te' ? 'font-telugu' : ''
            }`}>
              {language === 'en' ? 'Send a Message' : 'సందేశం పంపండి'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ${
                    language === 'te' ? 'font-telugu' : ''
                  }`}
                >
                  {language === 'en' ? 'Name' : 'పేరు'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder={language === 'en' ? 'Your name' : 'మీ పేరు'}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ${
                    language === 'te' ? 'font-telugu' : ''
                  }`}
                >
                  {language === 'en' ? 'Email' : 'ఇమెయిల్'}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder={language === 'en' ? 'Your email' : 'మీ ఇమెయిల్'}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ${
                    language === 'te' ? 'font-telugu' : ''
                  }`}
                >
                  {language === 'en' ? 'Message' : 'సందేశం'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  placeholder={language === 'en' ? 'Your message' : 'మీ సందేశం'}
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                {t('contact.message')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
