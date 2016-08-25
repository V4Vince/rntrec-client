import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),
  store: Ember.inject.service(),
  tagName: 'form',
  //unitData <- from unit route
  //delete <- from unit route
  showContract: false,
  showContractForm: false,
  showOptions: false,


  actions: {
      //opens the option modal
      open: function(){
        this.set('showOptions', true);
        console.log(this.get('showOptions'));
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

    }, //actions

}); //Ember.Component
