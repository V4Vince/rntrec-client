import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  //house <- from house route
  //unitParams
  //delete <- from house route
  addUnit: false,
  showOptions: false,
  showExpenseForm: false,

  //Sorts expenses based on expense date in desc order
  sortPropertyBy: ['expenseDate:desc'],
  sortedProperty: Ember.computed.sort('house.expenses', 'sortPropertyBy'),

  actions: {
    //add unit button
    add: function(){
      this.set('addUnit', true);
      this.set('unitParams', {});
    },
    //opens option modal
    open: function(){
      this.set('showOptions', true);
      console.log(this.get('showOptions'));
    },
    //sends the delete action with the property to the house route to delete this property
    delete(){
      let thisProperty = this.get('house');
      this.sendAction('delete', thisProperty);
      },

    addExpense: function(){
      this.set('showExpenseForm', true);
    },
  },
});
