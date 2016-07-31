import Ember from 'ember';

export default Ember.Component.extend({

  modalIsOpen: false,

  actions: {
    open: function(){
      this.set('modalIsOpen', true);
      console.log(this.get('modalIsOpen'));
    },
    closeModal: function(){
      this.set('modalIsOpen', false);
    },

  },
});
