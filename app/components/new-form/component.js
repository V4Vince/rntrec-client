import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  //submit
  houseParams: {},

//Still need to create actions for:
//1. Sending unit params in same submit actions
//2. Sending contract paramas in same submit actions

//Beacase user will have option to create a house and its units
//and contracts at the same time.
  actions: {
    submit () {
      this.sendAction('submit', this.get('houseParams'));
    },

    reset () {
      this.set('houseParams', {});
      console.log("hi");
    },
  },
});
