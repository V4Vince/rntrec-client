import DS from 'ember-data';

export default DS.Model.extend({
  streetName: DS.attr('string'),
  numUnits: DS.attr('number'),
  purchasePrice: DS.attr('number'),
  currentPrice: DS.attr('number'),
  mortgage: DS.attr('number'),
  taxes: DS.attr('number'),
  insurance: DS.attr('number'),
  //async false because units is embedded
  units: DS.hasMany('unit', { async: false }),
  //async false because expenses is embedded
  expenses: DS.hasMany('expense', { async: false }),
});
