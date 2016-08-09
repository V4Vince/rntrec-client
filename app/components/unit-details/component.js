import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),
  store: Ember.inject.service(),
  tagName: 'form',
  //house   <- from house route
  //addUnit <- from house route
  //delete <- from house route
  showContract: false,
  unitParams: {},     //from new-property/units component
  addUnit: false,     //from new-property/units component
  showOptions: false, //from options-button component

//Still need to create actions for:
//1.option to create a house and its units and contracts at the same time.

  actions: {
      //to show add-unit form
      add: function(){
        this.set('addUnit', true);
        this.set('unitParams', {});
      },
      //creating a unit record that has a belongs to relationship with house
      submit () {
        let id = this.get('house.id');
        let unitParams = this.get('unitParams');
        let house = this.get('store').peekRecord('house', id);
        let unit = this.get('store').createRecord('unit', unitParams);
        house.get('units').pushObject(unit);
        return unit.save()
        .then(() => this.set('addUnit', false))
        .then(() => {
          this.get('flashMessages')
          .success('Successfully added a unit');
        })
        .catch(() => {
          this.get('flashMessages')
          .danger('There was a problem. Please try again.');
        });
      },
      //resets the and hides the add-unit form
      reset () {
        this.set('unitParams', {});
        console.log("reset check");
        this.set('addUnit', false);
      },
      //opens the option modal
      open (){
        let isShown = this.get('showOptions');
        if (isShown) {
          this.set('showOptions', false);
        } else {
          this.set('showOptions', true);
        }
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
      //sends the delete option to the house route to delete this house
      delete(){
        let thisProperty = this.get('house');
        this.sendAction('delete', thisProperty);
        },

    }, //actions

}); //Ember.Component
