import { Serializer as ОбязСотрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-gostinica-обяз-сотр';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОбязСотрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
