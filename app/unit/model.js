import DS from 'ember-data';

export default DS.Model.extend({
  unit_num: DS.attr('string'),
  num_bedrooms: DS.attr('number'),
  num_bathrooms: DS.attr('number'),
  num_parking: DS.attr('number'),
  house: DS.belongsTo('house'),
  contract: DS.belongsTo('contract', { async: false }),
  expenses: DS.hasMany('expense', { async: false }),
});
