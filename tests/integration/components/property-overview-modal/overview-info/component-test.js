import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('property-overview-modal/overview-info', 'Integration | Component | property overview modal/overview info', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{property-overview-modal/overview-info}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#property-overview-modal/overview-info}}
      template block text
    {{/property-overview-modal/overview-info}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
