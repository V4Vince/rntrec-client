import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  store: Ember.inject.service(),

//custom post function; allows for expense to be posted to shallow route
//sends POST to: houses/$ID/expenses
  postHouseExpense: function (params, id) {
      let url = `/houses/${id}/expenses`;
      return this.get('ajax').post(url, {
        data: {
          expense: {
            expense_for: params.expenseFor,
            expense_description: params.expenseDescription,
            expense_amount: params.expenseAmount,
            expense_date: params.expenseDate,
          },
        },
      });
    },

//custom post function; allows for expense to be posted to shallow route
//sends POST to: units/$ID/expenses
    postUnitExpense: function (params, id) {
        let url = `/units/${id}/expenses`;
        return this.get('ajax').post(url, {
          data: {
            expense: {
              expense_for: params.expenseFor,
              expense_description: params.expenseDescription,
              expense_amount: params.expenseAmount,
              expense_date: params.expenseDate
            },
          },
        });
      },

});
