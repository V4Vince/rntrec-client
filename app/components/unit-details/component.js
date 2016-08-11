import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),
  store: Ember.inject.service(),
  tagName: 'form',
  //unitData <- from unit route
  //delete <- from unit route
  showContract: false,
  showOptions: false,


  actions: {
      //opens the option modal
      open: function(){
        this.set('showOptions', true);
        console.log(this.get('showOptions'));
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
