import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОбязСотрMixin
} from '../mixins/regenerated/models/i-i-s-gostinica-обяз-сотр';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОбязСотрMixin, Validations, {
});

defineProjections(Model);

export default Model;
