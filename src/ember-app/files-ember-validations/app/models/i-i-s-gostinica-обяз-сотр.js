import {
  defineNamespace,
  defineProjections,
  Model as ОбязСотрMixin
} from '../mixins/regenerated/models/i-i-s-gostinica-обяз-сотр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОбязСотрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
