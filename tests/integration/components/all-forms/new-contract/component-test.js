import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('all-forms/new-contract', 'Integration | Component | all forms/new contract', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{all-forms/new-contract}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#all-forms/new-contract}}
      template block text
    {{/all-forms/new-contract}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
