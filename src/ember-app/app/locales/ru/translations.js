import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Gostinica',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Gostinica',
          title: 'Gostinica'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
