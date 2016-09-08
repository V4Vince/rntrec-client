import DS from 'ember-data';

export default DS.Model.extend({
  start: DS.attr('string'),
  end: DS.attr('string'),
  numTenants: DS.attr('number'),
  rent: DS.attr('number'),
  security: DS.attr('number'),
  unit: DS.belongsTo('unit')
});
