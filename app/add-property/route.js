import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  actions: {
    createHouse(data){
      let entry = this.get('store').createRecord('house', data);
      console.log(data);
      return entry.save()
      .then(() => this.get('flashMessages').success('You created a new property'))
      .then(() => this.transitionTo('houses'))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    }, //createHouse
  },//actions

});
