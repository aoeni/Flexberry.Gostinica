import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  период: DS.attr('date'),
  гостиница: DS.belongsTo('i-i-s-gostinica-гостиница', { inverse: null, async: false }),
  персонал: DS.belongsTo('i-i-s-gostinica-персонал', { inverse: null, async: false }),
  тЧШтатРасп: DS.belongsTo('i-i-s-gostinica-т-ч-штат-расп', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-gostinica-штат-распис.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-gostinica-штат-распис.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  период: {
    descriptionKey: 'models.i-i-s-gostinica-штат-распис.validations.период.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  гостиница: {
    descriptionKey: 'models.i-i-s-gostinica-штат-распис.validations.гостиница.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  персонал: {
    descriptionKey: 'models.i-i-s-gostinica-штат-распис.validations.персонал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧШтатРасп: {
    descriptionKey: 'models.i-i-s-gostinica-штат-распис.validations.тЧШтатРасп.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ШтатРасписE', 'i-i-s-gostinica-штат-распис', {
    дата: attr('Дата', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    период: attr('Период', { index: 2 }),
    гостиница: belongsTo('i-i-s-gostinica-гостиница', 'Гостиница', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' }),
    тЧШтатРасп: belongsTo('i-i-s-gostinica-т-ч-штат-расп', 'Т ч штат расп', {
      надбавки: attr('Надбавки', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'надбавки' }),
    персонал: belongsTo('i-i-s-gostinica-персонал', 'Персонал', {
      фИО: attr('ФИО', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ШтатРасписL', 'i-i-s-gostinica-штат-распис', {
    дата: attr('Дата', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    период: attr('Период', { index: 2 }),
    гостиница: belongsTo('i-i-s-gostinica-гостиница', 'Наименование', {
      наименование: attr('Наименование', { index: 3 })
    }, { index: -1, hidden: true }),
    тЧШтатРасп: belongsTo('i-i-s-gostinica-т-ч-штат-расп', 'Надбавки', {
      надбавки: attr('Надбавки', { index: 4 })
    }, { index: -1, hidden: true }),
    персонал: belongsTo('i-i-s-gostinica-персонал', 'ФИО', {
      фИО: attr('ФИО', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
