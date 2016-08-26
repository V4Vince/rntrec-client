//TO DO:
// -Use a date helper so that choosing a date in the form will be in the correct format to post to backend
// -Materialize date picker causes weird shadow. Must remove shadow.

import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),
  store: Ember.inject.service(),
  //unitData <- from unit-details component
  //showContract <- from unit-details component
  //showContractForm <- from unit-details component
  contractParams: {},


  resetForm: function(){
    this.set('contractParams', {});
    this.set('showContract', false);
    this.set('showContractForm', false);
  },


  actions: {

    createContract () {
      let contractParams = this.get('contractParams');
      let contract = this.get('store').createRecord('contract', contractParams);
      contract.set('unit', this.get('unitData'));
      contract.save()
      .then(() => {
        this.resetForm();
      })
      .then(() => {
        this.get('flashMessages')
        .success('Successfully added a new contract');
      })
      .catch((data) => {
        console.log(data);
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },

    deleteContract: function(){
      let contract = this.get('unitData.contract');
      console.log(contract);
      contract.destroyRecord()
      .then(() => {
        this.resetForm();
      })
      .then(() => {
        this.get('flashMessages')
        .success('Successfully terminated the current contract for this unit');
      })
      .catch((data) => {
        console.log(data);
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },

    closeModal: function(){
      this.resetForm();
    },
  },

});
