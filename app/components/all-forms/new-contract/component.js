import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),
  store: Ember.inject.service(),
  //unitData
  //contractParams: {},

  actions: {
    reset () {
      this.set('contractParams', {});
      console.log("reset check");
    },
  }, //actions
}); //Ember.Component
