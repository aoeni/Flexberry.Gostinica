import { Serializer as ШтатРасписSerializer } from
  '../mixins/regenerated/serializers/i-i-s-gostinica-штат-распис';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ШтатРасписSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
