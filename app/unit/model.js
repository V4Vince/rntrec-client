import DS from 'ember-data';

export default DS.Model.extend({
  unit_num: DS.attr('number'),
  num_bedrooms: DS.attr('number'),
  num_bathrooms: DS.attr('number'),
  num_parking: DS.attr('number'),
  expense: DS.attr('number'),
  house: DS.belongsTo('house'),
});
