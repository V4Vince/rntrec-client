import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),
  store: Ember.inject.service(),
  //unitData <- from unit-details component
  //showContract <- from unit-details component

  //house <- from house-details component
  //showExpenseForm <- from house-details component
  expenseParams: {},


  resetForm: function(){
    this.set('expenseParams', {});
    this.set('showExpense', false);
    this.set('showExpenseForm', false);
  },


  actions: {

    createExpense () {
      let expenseParams = this.get('expenseParams');
      let expense = this.get('store').createRecord('expense', expenseParams);
      if (this.get('house')) {
        expense.set('house', this.get('house'));
      } else {
        expense.set('unit', this.get('unit'));
      }
      return expense.save()
      .then(() => {
        this.resetForm();
      })
      .then(() => {
        this.get('flashMessages')
        .success('Successfully added a new expense');
      })
      .catch((data) => {
        console.log(data);
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },

    // deleteExpense: function(){
    //   let house = this.get('house');
    //   let houseExpense = this.get('house.expense');
    //   let unitExpense = this.get('unit.expense');
    //   if (house) {
    //     console.log(houseExpense);
    //     let expense = this.get('house.expense');
    //     expense.destroyRecord();
    //   } else {
    //     console.log(unitExpense);
    //     let expense = this.get('unit.expense');
    //     expense.destroyRecord();
    //   }
    //   .then(() => {
    //     this.resetForm();
    //   })
    //   .then(() => {
    //     this.get('flashMessages')
    //     .success('Successfully terminated the current contract for this unit');
    //   })
    //   .catch((data) => {
    //     console.log(data);
    //     this.get('flashMessages')
    //     .danger('There was a problem. Please try again.');
    //   });
    // },

    closeModal: function(){
      this.resetForm();
    },
  },

});
