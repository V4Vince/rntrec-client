import Ember from 'ember';
import ScrollPositionMixin from 'rntrec-ember-client/mixins/scroll-position';
import { module, test } from 'qunit';

module('Unit | Mixin | scroll position');

// Replace this with your real tests.
test('it works', function(assert) {
  let ScrollPositionObject = Ember.Object.extend(ScrollPositionMixin);
  let subject = ScrollPositionObject.create();
  assert.ok(subject);
});
