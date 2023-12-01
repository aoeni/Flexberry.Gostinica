import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  всего: DS.attr('decimal'),
  дата: DS.attr('date'),
  надбавки: DS.attr('decimal'),
  персонал: DS.belongsTo('i-i-s-gostinica-персонал', { inverse: null, async: false })
});

export let ValidationRules = {
  всего: {
    descriptionKey: 'models.i-i-s-gostinica-т-ч-штат-расп.validations.всего.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-gostinica-т-ч-штат-расп.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  надбавки: {
    descriptionKey: 'models.i-i-s-gostinica-т-ч-штат-расп.validations.надбавки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  персонал: {
    descriptionKey: 'models.i-i-s-gostinica-т-ч-штат-расп.validations.персонал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧШтатРаспE', 'i-i-s-gostinica-т-ч-штат-расп', {
    надбавки: attr('Надбавки', { index: 0 }),
    всего: attr('Всего', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    персонал: belongsTo('i-i-s-gostinica-персонал', 'Персонал', {
      фИО: attr('ФИО', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ТЧШтатРаспL', 'i-i-s-gostinica-т-ч-штат-расп', {
    надбавки: attr('Надбавки', { index: 0 }),
    всего: attr('Всего', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    персонал: belongsTo('i-i-s-gostinica-персонал', 'ФИО', {
      фИО: attr('ФИО', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
