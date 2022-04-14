import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

/**
 * @typedef {Object} resources Show all available languages
 * @property {Object} es Compile SPANISH language
 * @property {Object} en Compile ENGLISH language
 */

/**
 * @type {resources}
 */
const resources = {
    es: {},
    en: {}
}

i18next
    .use(initReactI18next)
    .init({
        debug: false,
        resources,
        lng: "es", // Initial lenguaje
        interpolation: {
            escapeValue: false
        }
    })

export default i18next