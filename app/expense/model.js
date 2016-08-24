import DS from 'ember-data';

export default DS.Model.extend({
  expense_for: DS.attr('string'),
  expense_amount: DS.attr('number'),
  expense_description: DS.attr('string'),
  expense_date: DS.attr('date'),
  house: DS.belongsTo('house'),
  unit: DS.belongsTo('unit'),
});
