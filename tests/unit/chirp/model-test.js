import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('chirp', 'Unit | Model | chirp', {
  needs: ['model:user']
});

test('user relationship', function() {
  // Get the chirp model
  var Chirp = this.store().modelFor('chirp');

  // Get its 'user'-key
  var relationship = Ember.get(Chirp, 'relationshipsByName').get('user');

  // Make sure that the relationship works as expected
  equal(relationship.key, 'user');
  equal(relationship.kind, 'belongsTo');
});
