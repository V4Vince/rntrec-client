import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    openLeaseDetails(){
      this.set('showLeaseDetails', true);
      this.set('showMoneyDetails', false);
    },
  }
});
