import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createHouse(data){
      let entry = this.get('store').createRecord('houses', data);
      console.log(data);
      this.transitionTo('houses');
      return entry.save();
    },
  },

});
