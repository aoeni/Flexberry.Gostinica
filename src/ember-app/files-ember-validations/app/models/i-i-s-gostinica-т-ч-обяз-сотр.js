import {
  defineNamespace,
  defineProjections,
  Model as ТЧОбязСотрMixin
} from '../mixins/regenerated/models/i-i-s-gostinica-т-ч-обяз-сотр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧОбязСотрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
