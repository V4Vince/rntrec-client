import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),
  store: Ember.inject.service(),
  tagName: 'form',
  //unitData <- from unit route
  //delete <- from unit route
  showContract: false,
  showContractForm: false,
  showUnitOptions: false,
  showExpenseForm: false,

  showMoneyDetails: false,
  showLeaseDetails: false,

  //Sorts expenses based on expense date in desc order
  sortPropertyBy: ['expenseDate:desc'],
  sortedProperty: Ember.computed.sort('unitData.expenses', 'sortPropertyBy'),

  actions: {
      //opens the option modal
      open: function(){
        this.set('showUnitOptions', true);
        console.log(this.get('showUnitOptions'));
      },
      newContract (){
        let showContractForm = this.get('showContractForm');
        if (showContractForm) {
          this.set('showContractForm', false);
        } else {
          this.set('showContractForm', true);
        }
        console.log(this.get('showContractForm'));
      },
      openContract (){
        let showContract = this.get('showContract');
        if (showContract) {
          this.set('showContract', false);
        } else {
          this.set('showContract', true);
        }
        console.log(this.get('showContract'));
      },
      //sends the delete action with the unit to the unit route to delete this unit
      delete(){
        let thisUnit = this.get('unitData');
        this.sendAction('delete', thisUnit);
        },

      addExpense: function(){
        this.set('showExpenseForm', true);
      },
    }, //actions

}); //Ember.Component
