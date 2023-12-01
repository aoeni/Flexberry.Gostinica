import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  оклад: DS.attr('decimal'),
  штатЕдиницы: DS.attr('decimal')
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-gostinica-должности.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оклад: {
    descriptionKey: 'models.i-i-s-gostinica-должности.validations.оклад.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  штатЕдиницы: {
    descriptionKey: 'models.i-i-s-gostinica-должности.validations.штатЕдиницы.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностиE', 'i-i-s-gostinica-должности', {
    наименование: attr('Наименование', { index: 0 }),
    штатЕдиницы: attr('Штат единицы', { index: 1 }),
    оклад: attr('Оклад', { index: 2 })
  });

  modelClass.defineProjection('ДолжностиL', 'i-i-s-gostinica-должности', {
    наименование: attr('Наименование', { index: 0 }),
    штатЕдиницы: attr('Штат единицы', { index: 1 }),
    оклад: attr('Оклад', { index: 2 })
  });
};
