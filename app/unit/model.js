import DS from 'ember-data';

export default DS.Model.extend({
  unit_num: DS.attr('string'),
  num_bedrooms: DS.attr('number'),
  num_bathrooms: DS.attr('number'),
  num_parking: DS.attr('number'),
  //when an object is embedded, async: false
  house: DS.belongsTo('house', { async: false }),
  contract: DS.belongsTo('contract', { async: false }),
  expenses: DS.hasMany('expense', { async: false }),
});
