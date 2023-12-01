import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧШтатРаспMixin
} from '../mixins/regenerated/models/i-i-s-gostinica-т-ч-штат-расп';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧШтатРаспMixin, Validations, {
});

defineProjections(Model);

export default Model;
