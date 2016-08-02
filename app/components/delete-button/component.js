import Ember from 'ember';

export default Ember.Component.extend({
  //this is a universal componenet used to delete any record. Must
  //refactor to enable.

  //house <- from house-details component
  actions: {
    delete(){
      let thisProperty = this.get('house');
      this.sendAction('delete', thisProperty);
      },
    },
});
