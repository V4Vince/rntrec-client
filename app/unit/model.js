import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  unitNum: DS.attr('string'),
  numBedrooms: DS.attr('number'),
  numBathrooms: DS.attr('number'),
  numParking: DS.attr('number'),
  //when an object is embedded, async: false
  house: DS.belongsTo('house', { async: false }),
  contract: DS.belongsTo('contract', { async: false }),
  expenses: DS.hasMany('expense', { async: false }),

  allExpenses: Ember.computed.mapBy('expenses', 'expenseAmount'),
  totalExpenses: Ember.computed.sum('allExpenses')
});
