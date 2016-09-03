import DS from 'ember-data';

export default DS.Model.extend({
  street_name: DS.attr('string'),
  num_units: DS.attr('number'),
  purchase_price: DS.attr('number'),
  current_price: DS.attr('number'),
  mortgage: DS.attr('number'),
  taxes: DS.attr('number'),
  insurance: DS.attr('number'),
  //async false because units is embedded
  units: DS.hasMany('unit', { async: false }),
  //async false because expenses is embedded
  expenses: DS.hasMany('expense', { async: false }),
});
