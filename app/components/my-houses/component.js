import Ember from 'ember';

export default Ember.Component.extend({
  //housesData <- from houses route

  sortPropertyBy: ['streetName'],
  sortedProperty: Ember.computed.sort('housesData', 'sortPropertyBy'),

  getHouses: function(){
    console.log(this.get('housesData'));
  },
  getUnits: function(){
    console.log(this.get('housesData.uni'));
  }
});
