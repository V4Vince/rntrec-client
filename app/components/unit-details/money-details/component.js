import Ember from 'ember';

export default Ember.Component.extend({
  expenseHistory: false,
  actions: {
    showExpenseHistory(){
      this.set('expenseHistory', true);
      console.log(this.get('expenseHistory'));
    },
  }
});
