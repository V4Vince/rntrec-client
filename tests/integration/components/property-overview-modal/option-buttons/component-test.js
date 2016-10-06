import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('property-overview-modal/option-buttons', 'Integration | Component | property overview modal/option buttons', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{property-overview-modal/option-buttons}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#property-overview-modal/option-buttons}}
      template block text
    {{/property-overview-modal/option-buttons}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});