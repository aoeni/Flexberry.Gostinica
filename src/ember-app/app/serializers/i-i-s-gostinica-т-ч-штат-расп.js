import { Serializer as ТЧШтатРаспSerializer } from
  '../mixins/regenerated/serializers/i-i-s-gostinica-т-ч-штат-расп';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧШтатРаспSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
