import { Serializer as ТЧОбязСотрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-gostinica-т-ч-обяз-сотр';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧОбязСотрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
