import Ember from 'ember';

export default Ember.Component.extend({
  //housesData <- from houses route

  sortPropertyBy: ['street_name'],
  sortedProperty: Ember.computed.sort('housesData', 'sortPropertyBy'),
  
});
