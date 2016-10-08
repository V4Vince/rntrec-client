import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('unit-details/money-details', 'Integration | Component | unit details/money details', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{unit-details/money-details}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#unit-details/money-details}}
      template block text
    {{/unit-details/money-details}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
