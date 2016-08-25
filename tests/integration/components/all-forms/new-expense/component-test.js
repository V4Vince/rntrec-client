import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('all-forms/new-expense', 'Integration | Component | all forms/new expense', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{all-forms/new-expense}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#all-forms/new-expense}}
      template block text
    {{/all-forms/new-expense}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
