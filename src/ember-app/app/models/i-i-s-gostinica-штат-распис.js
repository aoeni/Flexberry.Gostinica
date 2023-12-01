import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ШтатРасписMixin
} from '../mixins/regenerated/models/i-i-s-gostinica-штат-распис';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ШтатРасписMixin, Validations, {
});

defineProjections(Model);

export default Model;
