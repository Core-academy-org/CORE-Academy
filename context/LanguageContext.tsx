'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'UZ' | 'EN' | 'RU';

interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}

const translations: Translations = {
  nav_courses: { UZ: 'Kurslar', EN: 'Courses', RU: 'Курсы' },
  nav_teachers: { UZ: 'O\'qituvchilar', EN: 'Teachers', RU: 'Учителя' },
  nav_roadmap: { UZ: 'Yo\'l xaritasi', EN: 'Roadmap', RU: 'Дорожная карта' },
  nav_faq: { UZ: 'FAQ', EN: 'FAQ', RU: 'Часто задаваемые вопросы' },
  hero_title_1: { UZ: 'SIZNING DARVOZANGIZ', EN: 'YOUR GATEWAY TO', RU: 'ВАШ ПУТЬ К' },
  hero_title_2: { UZ: 'GLOBAL TA\'LIMGA', EN: 'GLOBAL EDUCATION', RU: 'ГЛОБАЛЬНОМУ ОБРАЗОВАНИЮ' },
  apply_now: { UZ: 'Hozir topshirish', EN: 'Apply Now', RU: 'Подать заявку' },
  view_courses: { UZ: 'Kurslarni ko\'rish', EN: 'View Courses', RU: 'Посмотреть курсы' },
  courses_title: { UZ: 'Premium Kurslarimiz', EN: 'Our Elite Courses', RU: 'Наши Элитные Курсы' },
  roadmap_title: { UZ: 'Muvaffaqiyat Yo\'li', EN: 'Success Roadmap', RU: 'Путь к Успеху' },
  teachers_title: { UZ: 'Elita Fakulteti', EN: 'Elite Faculty', RU: 'Элитный Факультет' },
  faq_title: { UZ: 'Ko\'p So\'raladigan Savollar', EN: 'Frequently Asked Questions', RU: 'Часто задаваемые вопросы' },
  form_title: { UZ: 'O\'z Kelajagingizni Band Qiling', EN: 'Reserve Your Future', RU: 'Забронируйте Своё Будущее' },
  form_name: { UZ: 'Ismingiz', EN: 'Your Name', RU: 'Ваше Имя' },
  form_phone: { UZ: 'Telefon Raqamingiz', EN: 'Phone Number', RU: 'Номер Телефона' },
  form_telegram: { UZ: 'Telegram Username', EN: 'Telegram Username', RU: 'Ник в Telegram' },
  form_submit: { UZ: 'Ariza Jo\'natish', EN: 'Send Application', RU: 'Отправить заявку' },
  form_success: { UZ: 'Muvaffaqiyatli topshirildi!', EN: 'Transmission Successful!', RU: 'Успешно отправлено!' },
  footer_address: { UZ: 'Toshkent, O\'zbekiston', EN: 'Tashkent, Uzbekistan', RU: 'Ташкент, Узбекистан' },
  cta_title: { UZ: 'KATTA ORZU QILING. KO\'PROQ ERISHING.', EN: 'DREAM BIG. ACHIEVE MORE.', RU: 'МЕЧТАЙТЕ О БОЛЬШЕМ. ДОСТИГАЙТЕ БОЛЬШЕГО.' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('EN');

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
