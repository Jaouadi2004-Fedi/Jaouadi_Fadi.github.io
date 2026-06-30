import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../translations/en';
import fr from '../translations/fr';

const translations = { en, fr };
const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('portfolio-lang') || null;
  });

  const [showSelector, setShowSelector] = useState(() => !language);

  useEffect(() => {
    if (language) {
      localStorage.setItem('portfolio-lang', language);
      setShowSelector(false);
    }
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('portfolio-lang', lang);
    setShowSelector(false);
  };

  const t = (key) => {
    if (!language) return key;
    const langData = translations[language];
    if (!langData) return key;
    return langData[key] || key;
  };

  const localized = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    if (!language) return obj.en || '';
    return obj[language] || obj.en || '';
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, showSelector, setShowSelector, t, localized }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return {
      language: 'en',
      changeLanguage: () => {},
      showSelector: false,
      setShowSelector: () => {},
      t: (key) => key,
      localized: (obj) => {
        if (!obj) return '';
        if (typeof obj === 'string') return obj;
        return obj.en || '';
      },
    };
  }
  return ctx;
};
