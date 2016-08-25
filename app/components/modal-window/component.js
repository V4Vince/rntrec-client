import Ember from 'ember';

export default Ember.Component.extend({

  // showContractForm: false,

  actions: {
    // opens modal by setting modalIsOpen to true
    // openContract: function(){
    //   this.set('modalIsOpen', true);
    //   console.log(this.get('modalIsOpen'));
    // },
    // closes modal by setting modalIsOpen to false
    closeModal: function(){
      this.set('showContractForm', false);
    },
  },

});
