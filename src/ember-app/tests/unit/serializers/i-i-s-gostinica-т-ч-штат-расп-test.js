import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-gostinica-т-ч-штат-расп', 'Unit | Serializer | i-i-s-gostinica-т-ч-штат-расп', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-gostinica-т-ч-штат-расп',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-gostinica-гостиница',
    'model:i-i-s-gostinica-должности',
    'model:i-i-s-gostinica-обяз-сотр',
    'model:i-i-s-gostinica-персонал',
    'model:i-i-s-gostinica-т-ч-обяз-сотр',
    'model:i-i-s-gostinica-т-ч-штат-расп',
    'model:i-i-s-gostinica-штат-распис',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
