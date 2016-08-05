import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(){
      let thisProperty = this.get('house');
      this.sendAction('delete', thisProperty);
      },
    open: function(){
      this.set('showOptions', true);
      console.log(this.get('showOptions'));
    },
    closeModal: function(){
      this.set('showOptions', false);
    },
    },
});
