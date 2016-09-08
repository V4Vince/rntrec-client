import Ember from 'ember';

export default Ember.Component.extend({
  //housesData <- from houses route

  sortPropertyBy: ['streetName'],
  sortedProperty: Ember.computed.sort('housesData', 'sortPropertyBy'),

});
