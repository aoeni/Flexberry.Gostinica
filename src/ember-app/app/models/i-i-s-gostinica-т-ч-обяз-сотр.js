import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧОбязСотрMixin
} from '../mixins/regenerated/models/i-i-s-gostinica-т-ч-обяз-сотр';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧОбязСотрMixin, Validations, {
});

defineProjections(Model);

export default Model;
