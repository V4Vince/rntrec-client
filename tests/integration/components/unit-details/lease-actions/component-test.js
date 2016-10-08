import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('unit-details/lease-actions', 'Integration | Component | unit details/lease actions', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{unit-details/lease-actions}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#unit-details/lease-actions}}
      template block text
    {{/unit-details/lease-actions}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
