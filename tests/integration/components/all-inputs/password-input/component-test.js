import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('all-inputs/password-input', 'Integration | Component | all inputs/password input', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{all-inputs/password-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#all-inputs/password-input}}
      template block text
    {{/all-inputs/password-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
