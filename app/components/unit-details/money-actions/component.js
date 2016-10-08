import Ember from 'ember';

export default Ember.Component.extend({
  //showMoneyDetails

  actions: {
    addExpense(){
      this.set('showExpenseForm', true);
    },
    openMoneyDetails(){
      this.set('showMoneyDetails', true);
      this.set('showLeaseDetails', false);
    },
  }
});
