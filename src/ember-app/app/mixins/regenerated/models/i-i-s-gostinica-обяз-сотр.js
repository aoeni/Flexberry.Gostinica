import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  место: DS.attr('string'),
  наименование: DS.attr('string'),
  регНомер: DS.attr('string'),
  гостиница: DS.belongsTo('i-i-s-gostinica-гостиница', { inverse: null, async: false }),
  персонал: DS.belongsTo('i-i-s-gostinica-персонал', { inverse: null, async: false }),
  тЧОбязСотр: DS.belongsTo('i-i-s-gostinica-т-ч-обяз-сотр', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-gostinica-обяз-сотр.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  место: {
    descriptionKey: 'models.i-i-s-gostinica-обяз-сотр.validations.место.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-gostinica-обяз-сотр.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  регНомер: {
    descriptionKey: 'models.i-i-s-gostinica-обяз-сотр.validations.регНомер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  гостиница: {
    descriptionKey: 'models.i-i-s-gostinica-обяз-сотр.validations.гостиница.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  персонал: {
    descriptionKey: 'models.i-i-s-gostinica-обяз-сотр.validations.персонал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧОбязСотр: {
    descriptionKey: 'models.i-i-s-gostinica-обяз-сотр.validations.тЧОбязСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОбязСотрE', 'i-i-s-gostinica-обяз-сотр', {
    регНомер: attr('Рег номер', { index: 0 }),
    место: attr('Место', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    наименование: attr('Наименование', { index: 3 }),
    гостиница: belongsTo('i-i-s-gostinica-гостиница', 'Гостиница', {
      наименование: attr('Наименование', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наименование' }),
    персонал: belongsTo('i-i-s-gostinica-персонал', 'Персонал', {
      фИО: attr('ФИО', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'фИО' }),
    тЧОбязСотр: belongsTo('i-i-s-gostinica-т-ч-обяз-сотр', 'Т ч обяз сотр', {
      обязанности: attr('Обязанности', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'обязанности' })
  });

  modelClass.defineProjection('ОбязСотрL', 'i-i-s-gostinica-обяз-сотр', {
    регНомер: attr('Рег номер', { index: 0 }),
    место: attr('Место', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    наименование: attr('Наименование', { index: 3 }),
    гостиница: belongsTo('i-i-s-gostinica-гостиница', 'Наименование', {
      наименование: attr('Наименование', { index: 4 })
    }, { index: -1, hidden: true }),
    персонал: belongsTo('i-i-s-gostinica-персонал', 'ФИО', {
      фИО: attr('ФИО', { index: 5 })
    }, { index: -1, hidden: true }),
    тЧОбязСотр: belongsTo('i-i-s-gostinica-т-ч-обяз-сотр', 'Обязанности', {
      обязанности: attr('Обязанности', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
