import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаСост: DS.attr('date'),
  номер: DS.attr('number'),
  обязанности: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-gostinica-должности', { inverse: null, async: false })
});

export let ValidationRules = {
  датаСост: {
    descriptionKey: 'models.i-i-s-gostinica-т-ч-обяз-сотр.validations.датаСост.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-gostinica-т-ч-обяз-сотр.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  обязанности: {
    descriptionKey: 'models.i-i-s-gostinica-т-ч-обяз-сотр.validations.обязанности.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-gostinica-т-ч-обяз-сотр.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧОбязСотрE', 'i-i-s-gostinica-т-ч-обяз-сотр', {
    номер: attr('Номер', { index: 0 }),
    обязанности: attr('Обязанности', { index: 1 }),
    датаСост: attr('Дата сост', { index: 2 }),
    должности: belongsTo('i-i-s-gostinica-должности', 'Должности', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ТЧОбязСотрL', 'i-i-s-gostinica-т-ч-обяз-сотр', {
    номер: attr('Номер', { index: 0 }),
    обязанности: attr('Обязанности', { index: 1 }),
    датаСост: attr('Дата сост', { index: 2 }),
    должности: belongsTo('i-i-s-gostinica-должности', 'Наименование', {
      наименование: attr('Наименование', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
