import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),
  store: Ember.inject.service(),
  tagName: 'form',
  //house   <- from house route
  //addUnit <- from house route
  //delete <- from house route
  unitParams: {},
  addUnit: false,
  showOptions: false,

//Still need to create actions for:
//1.option to create a house and its units and contracts at the same time.

  actions: {
      add: function(){
        this.set('addUnit', true);
        this.set('unitParams', {});
      },
      //creating a record that has a belongs to relationship
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
      reset () {
        this.set('unitParams', {});
        console.log("reset check");
        this.set('addUnit', false);
      },

      open (){
        let isShown = this.get('showOptions');
        if (isShown) {
          this.set('showOptions', false);
        } else {
          this.set('showOptions', true);
        }
      },

      delete(){
        let thisProperty = this.get('house');
        this.sendAction('delete', thisProperty);
        },

    }, //actions

}); //Ember.Component
