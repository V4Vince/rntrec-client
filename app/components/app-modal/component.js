import Ember from 'ember';

export default Ember.Component.extend({

  modalIsOpen: false,

  actions: {
    //opens modal by setting modalIsOpen to true
    open: function(){
      this.set('modalIsOpen', true);
      console.log(this.get('modalIsOpen'));
    },
    //closes modal by setting modalIsOpen to false
    closeModal: function(){
      this.set('modalIsOpen', false);
    },
  },

});
