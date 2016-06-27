import DS from 'ember-data';

export default DS.Model.extend({
  street_name: DS.attr('string'),
  num_units: DS.attr('number'),
  purchase_price: DS.attr('number'),
  current_price: DS.attr('number'),
});