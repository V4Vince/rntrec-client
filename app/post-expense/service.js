import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),

//custom post function; allows for expense to be posted to shallow route
//sends POST to: houses/$ID/expenses
  postHouseExpense: function (params, id) {
      let url = `/houses/${id}/expenses`;
      return this.get('ajax').post(url, {
        data: {
          expense: {
            expense_for: params.expense_for,
            expense_description: params.expense_description,
            expense_amount: params.expense_amount,
            expense_date: params.expense_date
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
              expense_for: params.expense_for,
              expense_description: params.expense_description,
              expense_amount: params.expense_amount,
              expense_date: params.expense_date
            },
          },
        });
      },

});
