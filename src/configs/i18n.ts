import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import viTrans from '../assets/locales/viTranslation.json';

const resources = {
  vi: {
    translation: viTrans,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
