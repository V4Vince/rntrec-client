import Ember from 'ember';

export default Ember.Component.extend({
  //unitData <- from unit-details component

  actions: {

    load: function(){
      let unit = this.get('unitData');
      console.log(unit);
      let contract = unit.get('contract');
      console.log(contract);
    },
    closeModal: function(){
      this.set('showContract', false);
    },
  },

});
