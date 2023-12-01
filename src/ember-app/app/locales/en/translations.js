import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISGostinicaГостиницаLForm from './forms/i-i-s-gostinica-гостиница-l';
import IISGostinicaДолжностиLForm from './forms/i-i-s-gostinica-должности-l';
import IISGostinicaОбязСотрLForm from './forms/i-i-s-gostinica-обяз-сотр-l';
import IISGostinicaПерсоналLForm from './forms/i-i-s-gostinica-персонал-l';
import IISGostinicaТЧОбязСотрLForm from './forms/i-i-s-gostinica-т-ч-обяз-сотр-l';
import IISGostinicaТЧШтатРаспLForm from './forms/i-i-s-gostinica-т-ч-штат-расп-l';
import IISGostinicaШтатРасписLForm from './forms/i-i-s-gostinica-штат-распис-l';
import IISGostinicaГостиницаEForm from './forms/i-i-s-gostinica-гостиница-e';
import IISGostinicaДолжностиEForm from './forms/i-i-s-gostinica-должности-e';
import IISGostinicaОбязСотрEForm from './forms/i-i-s-gostinica-обяз-сотр-e';
import IISGostinicaПерсоналEForm from './forms/i-i-s-gostinica-персонал-e';
import IISGostinicaТЧОбязСотрEForm from './forms/i-i-s-gostinica-т-ч-обяз-сотр-e';
import IISGostinicaТЧШтатРаспEForm from './forms/i-i-s-gostinica-т-ч-штат-расп-e';
import IISGostinicaШтатРасписEForm from './forms/i-i-s-gostinica-штат-распис-e';
import IISGostinicaГостиницаModel from './models/i-i-s-gostinica-гостиница';
import IISGostinicaДолжностиModel from './models/i-i-s-gostinica-должности';
import IISGostinicaОбязСотрModel from './models/i-i-s-gostinica-обяз-сотр';
import IISGostinicaПерсоналModel from './models/i-i-s-gostinica-персонал';
import IISGostinicaТЧОбязСотрModel from './models/i-i-s-gostinica-т-ч-обяз-сотр';
import IISGostinicaТЧШтатРаспModel from './models/i-i-s-gostinica-т-ч-штат-расп';
import IISGostinicaШтатРасписModel from './models/i-i-s-gostinica-штат-распис';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-gostinica-гостиница': IISGostinicaГостиницаModel,
    'i-i-s-gostinica-должности': IISGostinicaДолжностиModel,
    'i-i-s-gostinica-обяз-сотр': IISGostinicaОбязСотрModel,
    'i-i-s-gostinica-персонал': IISGostinicaПерсоналModel,
    'i-i-s-gostinica-т-ч-обяз-сотр': IISGostinicaТЧОбязСотрModel,
    'i-i-s-gostinica-т-ч-штат-расп': IISGostinicaТЧШтатРаспModel,
    'i-i-s-gostinica-штат-распис': IISGostinicaШтатРасписModel
  },

  'application-name': 'Gostinica',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Gostinica',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Gostinica',
          title: 'Gostinica'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        gostinica: {
          caption: 'Gostinica',
          title: 'Gostinica',
          'i-i-s-gostinica-обяз-сотр-l': {
            caption: 'Обяз сотр',
            title: ''
          },
          'i-i-s-gostinica-т-ч-обяз-сотр-l': {
            caption: 'Т ч обяз сотр',
            title: ''
          },
          'i-i-s-gostinica-гостиница-l': {
            caption: 'Гостиница',
            title: ''
          },
          'i-i-s-gostinica-персонал-l': {
            caption: 'Персонал',
            title: ''
          },
          'i-i-s-gostinica-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-gostinica-штат-распис-l': {
            caption: 'Штат распис',
            title: ''
          },
          'i-i-s-gostinica-т-ч-штат-расп-l': {
            caption: 'Т ч штат расп',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-gostinica-гостиница-l': IISGostinicaГостиницаLForm,
    'i-i-s-gostinica-должности-l': IISGostinicaДолжностиLForm,
    'i-i-s-gostinica-обяз-сотр-l': IISGostinicaОбязСотрLForm,
    'i-i-s-gostinica-персонал-l': IISGostinicaПерсоналLForm,
    'i-i-s-gostinica-т-ч-обяз-сотр-l': IISGostinicaТЧОбязСотрLForm,
    'i-i-s-gostinica-т-ч-штат-расп-l': IISGostinicaТЧШтатРаспLForm,
    'i-i-s-gostinica-штат-распис-l': IISGostinicaШтатРасписLForm,
    'i-i-s-gostinica-гостиница-e': IISGostinicaГостиницаEForm,
    'i-i-s-gostinica-должности-e': IISGostinicaДолжностиEForm,
    'i-i-s-gostinica-обяз-сотр-e': IISGostinicaОбязСотрEForm,
    'i-i-s-gostinica-персонал-e': IISGostinicaПерсоналEForm,
    'i-i-s-gostinica-т-ч-обяз-сотр-e': IISGostinicaТЧОбязСотрEForm,
    'i-i-s-gostinica-т-ч-штат-расп-e': IISGostinicaТЧШтатРаспEForm,
    'i-i-s-gostinica-штат-распис-e': IISGostinicaШтатРасписEForm
  },

});

export default translations;
