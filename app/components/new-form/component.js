import Ember from 'ember';

export default Ember.Component.extend({

  flashMessages: Ember.inject.service(),

  tagName: 'form',

  houseParams: {},

//Issues:
//1. When creating a record, ember data creates duplicate records;
//   one that has an ID and is saved on the server
//   one that has NO ID and is not saved on the server

//Sends action to new-property route
  actions: {
    //Sends submit action with houseParams to new-property component
    submit () {
      this.sendAction('submit', this.get('houseParams'));
    },
    //resets the houseParams form
    reset () {
      this.set('houseParams', {});
      console.log("hi");
    },
  },
});
