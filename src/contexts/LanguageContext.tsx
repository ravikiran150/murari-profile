import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'te';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data with proper typing
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.education': 'Education',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.name': 'Murari Sharma',
    'hero.title': 'Hindu Priest & Vedic Scholar',
    'hero.subtitle': 'Dedicated to preserving and sharing the sacred traditions of Sanatan Dharma',
    
    // About Section
    'about.title': 'About Me',
    'about.summary': 'Skilled and dedicated Priest with over 12 years of experience orchestrating a wide spectrum of Hindu rituals and ceremonies. Demonstrates mastery in both Vaishnava and Shaiva traditions, with exceptional proficiency in deity consecrations (Pratishtha\'s) and captivating spiritual discourses (Pravachanas). Possesses profound insights into Hindu scriptures and communicates fluently in Telugu, Hindi, and English.',
    
    // Education Section
    'education.title': 'Education',
    'education.vedic.title': 'Vedic Education',
    'education.vedic.item1': 'Comprehensive training in Sundarakaanda Parayanam, Navagrahajapas, Annaprasana, and Namakaranam ceremonies',
    'education.vedic.item2': 'Proficiently versed in Vaidika Smartha prayogam and adept in the sacred chanting of Devi Sapthashathi Parayanam',
    'education.vedic.item3': 'Specialized expertise in conducting intricate daily rituals such as Mahanyasam, Abhishekam, Arachans, and Homams',
    'education.academic.title': 'Academic Education',
    'education.academic.mba': 'Master of Business Administration (MBA), 2015',
    'education.academic.bcom': 'Bachelor of Commerce (B.com), 2013',
    'education.academic.vedic': 'Vaidika Smartha, 2007',
    'education.academic.astrology': 'Astrology',
    'education.academic.chandi': 'Chandi Parayanam',
    'education.academic.scholar': 'Vaidika scholar',
    
    // Experience Section
    'experience.title': 'Experience',
    'experience.item1': 'Served as the esteemed Priest for the Pratishta of revered deities such as Kalabairava, Aditya, Ganesh, Ambika, and Pashupathinath Swamy at the esteemed "Shri Dwadasha Jyotirlinga Bhuvaneshwari Devastanam"',
    'experience.item2': 'Led the auspicious Pratishta ceremonies for Panchamukhi Anjaneya Swami and Naga at Nizampet',
    'experience.item3': 'Spearheaded the organization and execution of numerous religious rituals and festivals including Kumbhabhishekams, Maha Rudrams, and Chandi Homams',
    'experience.item4': 'Played a pivotal role in imparting comprehensive training in Vaidika Smartha prayogam',
    'experience.item5': 'Conducted monthly pooja of Mansa Shiva Ratri (Shiva Parvati Kalyanam) and Sankashti Chaturthi',
    
    // Skills Section
    'skills.title': 'Skills',
    'skills.item1': 'Demonstrates exceptional proficiency in all aspects of puja ceremonies, from Pratishta and Abhishekams to Alankara',
    'skills.item2': 'Possesses a profound grasp of Hindu scriptures and texts, enriching spiritual practices with insightful knowledge',
    'skills.item3': 'Skillful in imparting knowledge and training in Vaidika Smartha prayogam',
    'skills.item4': 'Highly skilled in the meticulous recitation and understanding of Chandi Parayanam',
    
    // Additional Skills
    'additional.title': 'Additional Skills & Experience',
    'additional.item1': 'Conducting Shanthi Poojas',
    'additional.item2': 'Facilitating Aruna Parayanam',
    'additional.item3': 'Proficient in Sri Chakrarchana rituals',
    'additional.item4': 'Expertise in Surya Namaskar ceremonies',
    'additional.item5': 'Skilled in SaptaShati Parayanam',
    'additional.item6': 'Regularly conducting Nithya Chandi Homam',
    'additional.item7': 'Organizing Temple Varshikotsavam celebrations',
    'additional.item8': 'Leading Rudra Ayushya Homam ceremonies',
    'additional.item9': 'Proficient in performing marriages according to Hindu customs',
    'additional.item10': 'Possesses a comprehensive understanding of Astrology',
    
    // Contact Section
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Get in touch for spiritual guidance and religious ceremonies',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.message': 'Send Message',
    
    // Footer
    'footer.copyright': '© 2024 Murari Sharma. All rights reserved.',
    
    // Chatbot
    'chatbot.title': 'Ask me anything',
    'chatbot.placeholder': 'Type your question...',
    'chatbot.greeting': 'Hello! I\'m here to help you learn more about Murari Sharma. What would you like to know?',
    'chatbot.skills': 'Murari Sharma has exceptional proficiency in Hindu rituals, Vedic ceremonies, deity consecrations, and spiritual discourses. He is skilled in both Vaishnava and Shaiva traditions.',
    'chatbot.education': 'Murari has an MBA (2015), B.Com (2013), and is a Vaidika Smartha (2007). He is also trained in Astrology and Chandi Parayanam.',
    'chatbot.contact': 'You can contact Murari Sharma through phone, email, or by visiting his temple. He is available for spiritual guidance and religious ceremonies.',
    'chatbot.experience': 'With over 12 years of experience, Murari has served as a priest at various temples and conducted numerous religious ceremonies and festivals.',
  },
  te: {
    // Header
    'nav.home': 'హోమ్',
    'nav.about': 'నా గురించి',
    'nav.education': 'విద్య',
    'nav.experience': 'అనుభవం',
    'nav.skills': 'నైపుణ్యాలు',
    'nav.contact': 'సంప్రదించండి',
    
    // Hero Section
    'hero.name': 'మురారి శర్మ',
    'hero.title': 'హిందూ పూజారి & వైదిక విద్వాన్',
    'hero.subtitle': 'సనాతన ధర్మం యొక్క పవిత్ర సంప్రదాయాలను పరిరక్షించడానికి మరియు పంచుకోవడానికి అంకితమై',
    
    // About Section
    'about.title': 'నా గురించి',
    'about.summary': '12 సంవత్సరాలకు పైగా అనుభవంతో హిందూ పూజలు మరియు వేడుకలను నిర్వహించడంలో నైపుణ్యం కలిగిన అంకితభావం గల పూజారి. వైష్ణవ మరియు శైవ సంప్రదాయాలు రెండింటిలోనూ ప్రావీణ్యం కలిగి ఉన్నారు, దేవతా ప్రతిష్ఠలు (ప్రతిష్టలు) మరియు మంత్రముగ్ధులను చేసే ఆధ్యాత్మిక ప్రవచనాలలో అసాధారణమైన నైపుణ్యం ప్రదర్శిస్తారు.',
    
    // Education Section
    'education.title': 'విద్య',
    'education.vedic.title': 'వైదిక విద్య',
    'education.vedic.item1': 'సుందరకాండ పారాయణం, నవగ్రహజపాలు, అన్నప్రాశన మరియు నామకరణ వేడుకలలో సమగ్ర శిక్షణ',
    'education.vedic.item2': 'వైదిక స్మార్త ప్రయోగంలో నిష్ణాతులు మరియు దేవి సప్తశతి పారాయణం యొక్క పవిత్ర మంత్రోచ్ఛారణలో నిష్ణాతులు',
    'education.vedic.item3': 'మహాన్యాసం, అభిషేకం, అర్చనలు మరియు హోమాలు వంటి సంక్లిష్టమైన రోజువారీ పూజలను నిర్వహించడంలో ప్రత్యేక నైపుణ్యం',
    'education.academic.title': 'విద్యా విద్య',
    'education.academic.mba': 'మాస్టర్ ఆఫ్ బిజినెస్ అడ్మినిస్ట్రేషన్ (MBA), 2015',
    'education.academic.bcom': 'బ్యాచిలర్ ఆఫ్ కామర్స్ (B.com), 2013',
    'education.academic.vedic': 'వైదిక స్మార్త, 2007',
    'education.academic.astrology': 'జ్యోతిష్యం',
    'education.academic.chandi': 'చండీ పారాయణం',
    'education.academic.scholar': 'వైదిక విద్వాంసులు',
    
    // Experience Section
    'experience.title': 'అనుభవం',
    'experience.item1': '"శ్రీ ద్వాదశ జ్యోతిర్లింగ భువనేశ్వరి దేవస్థానం"లో కాలభైరవ, ఆదిత్య, గణేష్, అంబిక మరియు పశుపతినాథ్ స్వామి వంటి గౌరవనీయ దేవతల ప్రతిష్ఠకు గౌరవనీయ పూజారిగా సేవలు అందించారు',
    'experience.item2': 'నిజాంపేటలో పంచముఖి ఆంజనేయ స్వామి మరియు నాగ ప్రతిష్ఠా వేడుకలను నిర్వహించారు',
    'experience.item3': 'కుంభాభిషేకాలు, మహా రుద్రాలు మరియు చండీ హోమాలు వంటి అనేక మతపరమైన పూజలు మరియు పండుగల నిర్వహణకు నాయకత్వం వహించారు',
    'experience.item4': 'వైదిక స్మార్త ప్రయోగంలో సమగ్ర శిక్షణను అందించడంలో కీలక పాత్ర పోషించారు',
    'experience.item5': 'మాస శివరాత్రి (శివ పార్వతి కళ్యాణం) మరియు సంకష్టి చతుర్థిని ప్రతి నెలా నిర్వహించారు',
    
    // Skills Section
    'skills.title': 'నైపుణ్యాలు',
    'skills.item1': 'ప్రతిష్ట మరియు అభిషేకాలు నుండి అలంకారం వరకు పూజా కార్యక్రమాలలోని అన్ని అంశాలలో అసాధారణమైన నైపుణ్యాన్ని ప్రదర్శిస్తారు',
    'skills.item2': 'హిందూ గ్రంధాలు మరియు వచనాలపై లోతైన అవగాహన కలిగి, అంతర్దృష్టి జ్ఞానంతో ఆధ్యాత్మిక అభ్యాసాలను సుసంపన్నం చేస్తారు',
    'skills.item3': 'వైదిక స్మార్త ప్రయోగంలో జ్ఞానాన్ని మరియు శిక్షణను అందించడంలో నైపుణ్యం కలిగి ఉన్నారు',
    'skills.item4': 'చండీ పారాయణం యొక్క నిశితమైన పఠనంలో మరియు అవగాహనలో అత్యంత నైపుణ్యం',
    
    // Additional Skills
    'additional.title': 'అదనపు నైపుణ్యాలు మరియు అనుభవం',
    'additional.item1': 'శాంతి పూజలు నిర్వహించడం',
    'additional.item2': 'అరుణ పారాయణం సులభతరం చేయడం',
    'additional.item3': 'శ్రీ చక్రార్చన పూజలలో నిష్ణాతులు',
    'additional.item4': 'సూర్య నమస్కార వేడుకలలో నైపుణ్యం',
    'additional.item5': 'సప్తశతి పారాయణంలో నిష్ణాతులు',
    'additional.item6': 'నిత్య చండీ హోమం క్రమం తప్పకుండా నిర్వహించడం',
    'additional.item7': 'ఆలయ వార్షికోత్సవ వేడుకలు నిర్వహించడం',
    'additional.item8': 'రుద్ర ఆయుష్య హోమ కార్యక్రమాలకు నాయకత్వం వహించడం',
    'additional.item9': 'హిందూ ఆచారాల ప్రకారం వివాహాలు జరపడంలో నిష్ణాతులు',
    'additional.item10': 'జ్యోతిష్య శాస్త్రంపై సమగ్ర అవగాహన కలిగి, విలువైన అంతర్దృష్టులు మరియు మార్గదర్శకత్వం అందించడం',
    
    // Contact Section
    'contact.title': 'నన్ను సంప్రదించండి',
    'contact.subtitle': 'ఆధ్యాత్మిక మార్గదర్శకత్వం మరియు మతపరమైన వేడుకల కోసం సంప్రదించండి',
    'contact.phone': 'ఫోన్',
    'contact.email': 'ఇమెయిల్',
    'contact.address': 'చిరునామా',
    'contact.message': 'సందేశం పంపండి',
    
    // Footer
    'footer.copyright': '© 2024 మురారి శర్మ. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.',
    
    // Chatbot
    'chatbot.title': 'నన్ను ఏదైనా అడగండి',
    'chatbot.placeholder': 'మీ ప్రశ్నను టైప్ చేయండి...',
    'chatbot.greeting': 'నమస్కారం! మురారి శర్మ గురించి మరింత తెలుసుకోవడానికి నేను ఇక్కడ ఉన్నాను. మీరు ఏమి తెలుసుకోవాలనుకుంటున్నారు?',
    'chatbot.skills': 'మురారి శర్మకు హిందూ ఆచారాలు, వైదిక వేడుకలు, దేవతా ప్రతిష్ఠలు మరియు ఆధ్యాత్మిక ప్రవచనాలలో అసాధారణమైన నైపుణ్యం ఉంది. వైష్ణవ మరియు శైవ సంప్రదాయాలలో నైపుణ్యం కలిగి ఉన్నారు.',
    'chatbot.education': 'మురారికి MBA (2015), B.Com (2013) మరియు వైదిక స్మార్త (2007) ఉంది. జ్యోతిష్యం మరియు చండీ పారాయణంలో కూడా శిక్షణ పొందారు.',
    'chatbot.contact': 'ఫోన్, ఇమెయిల్ లేదా ఆలయాన్ని సందర్శించడం ద్వారా మురారి శర్మను సంప్రదించవచ్చు. ఆధ్యాత్మిక మార్గదర్శకత్వం మరియు మతపరమైన వేడుకల కోసం అందుబాటులో ఉన్నారు.',
    'chatbot.experience': '12 సంవత్సరాల అనుభవంతో, మురారి వివిధ ఆలయాలలో పూజారిగా సేవలు అందించారు మరియు అనేక మతపరమైన వేడుకలు మరియు పండుగలను నిర్వహించారు.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 