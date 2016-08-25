import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('all-forms/new-building', 'Integration | Component | all forms/new building', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{all-forms/new-building}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#all-forms/new-building}}
      template block text
    {{/all-forms/new-building}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
