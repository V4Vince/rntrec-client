import Ember from 'ember';

export default Ember.Component.extend({

  flashMessages: Ember.inject.service(),
  store: Ember.inject.service(),
  router: Ember.inject.service('-routing'),
  tagName: 'form',

  houseParams: {},

//Issues:
//1. When creating a record, ember data creates duplicate records;
//   one that has an ID and is saved on the server
//   one that has NO ID and is not saved on the server
  actions: {

    submit () {
      let houseParams = this.get('houseParams');
      let newHouse = this.get('store').createRecord('house', houseParams);
      return newHouse.save()
      .then(() => this.get('flashMessages').success('You created a new property'))
      .then(() => {
        this.get('router').transitionTo('houses');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },

    reset () {
      this.set('houseParams', {});
      console.log("hi");
    },
  },
});
