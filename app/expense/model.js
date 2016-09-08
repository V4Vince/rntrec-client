import DS from 'ember-data';

export default DS.Model.extend({
  expenseFor: DS.attr('string'),
  expenseAmount: DS.attr('number'),
  expenseDescription: DS.attr('string'),
  expenseDate: DS.attr('date'),
  house: DS.belongsTo('house'),
  unit: DS.belongsTo('unit'),
});
