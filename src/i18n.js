import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';


i18n
    // https://github.com/i18next/i18next-http-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    .init({
        debug: true,
        fallbackLng: 'en',
        supportedLngs: ["en","en-US", "cn", "kr"],
        ns: ['translation'],
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: `http://theitineraryplanner.s3-website-ap-southeast-1.amazonaws.com/locales/{{lng}}/{{ns}}.json`,
        }
    });


// i18n.services.formatter.add('DATE_HUGE', (value, lng, options) => {
//     return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime.DATE_HUGE)
// });

export default i18n;