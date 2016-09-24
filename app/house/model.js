import DS from 'ember-data';
import Ember from 'ember';

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

  allExpenses: Ember.computed.mapBy('expenses', 'expenseAmount'),
  totalExpenses: Ember.computed.sum('allExpenses'),

  //this calculates the total expense of all units. ISSUE: will only calculate after the unit route is accessed. Will display $0 before unit route is accesses or if page is refreshed
  allUnitExpenses: Ember.computed.mapBy('units', 'totalExpenses'),
  totalUnitExpenses: Ember.computed.sum('allUnitExpenses'),

});
