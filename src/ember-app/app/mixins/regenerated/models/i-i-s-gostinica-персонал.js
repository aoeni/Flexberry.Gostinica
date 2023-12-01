import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  телефон: DS.attr('string'),
  фИО: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-gostinica-должности', { inverse: null, async: false })
});

export let ValidationRules = {
  телефон: {
    descriptionKey: 'models.i-i-s-gostinica-персонал.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-gostinica-персонал.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-gostinica-персонал.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПерсоналE', 'i-i-s-gostinica-персонал', {
    фИО: attr('ФИО', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    должности: belongsTo('i-i-s-gostinica-должности', 'Должности', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ПерсоналL', 'i-i-s-gostinica-персонал', {
    фИО: attr('ФИО', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    должности: belongsTo('i-i-s-gostinica-должности', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
