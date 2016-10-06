import Ember from 'ember';

export default Ember.Component.extend({
  //delete <-from the unit-details component or house-details component
  //showPropertyOptions <-from the house-details component
  //showUnitOptions <-from the unit-details component
  actions: {
    //sends the delete action to the component that's calling it.
    //refactor this later by using closure action
    delete(){
      this.sendAction('delete', {});
      },

    //add edit action here

    closeModal: function(){
      this.set('showPropertyOptions', false);
      this.set('showUnitOptions', false);
    },
    },
});
