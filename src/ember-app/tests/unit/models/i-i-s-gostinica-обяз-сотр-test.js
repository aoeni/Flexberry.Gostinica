import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-gostinica-обяз-сотр', 'Unit | Model | i-i-s-gostinica-обяз-сотр', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
