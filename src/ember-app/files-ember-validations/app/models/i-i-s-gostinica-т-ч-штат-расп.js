import {
  defineNamespace,
  defineProjections,
  Model as ТЧШтатРаспMixin
} from '../mixins/regenerated/models/i-i-s-gostinica-т-ч-штат-расп';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧШтатРаспMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
