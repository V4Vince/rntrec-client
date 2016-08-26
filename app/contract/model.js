import DS from 'ember-data';

export default DS.Model.extend({
  start: DS.attr('string'),
  end: DS.attr('string'),
  num_tenants: DS.attr('number'),
  rent: DS.attr('number'),
  security: DS.attr('number'),
  unit: DS.belongsTo('unit')
});
