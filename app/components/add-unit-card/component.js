import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),
  store: Ember.inject.service(),
  //house
  //addUnit
  unitParams: {},

  resetForm: function(){
    this.set('unitParams', {});
    this.set('addUnit', false);
  },

  actions: {
    //creates a new unit for current house
    createUnit () {
      let unitParams = this.get('unitParams');
      let house = this.get('house');
      let unit = this.get('store').createRecord('unit', unitParams);
      let newHouse = house.get('units').pushObject(unit);
      console.log(newHouse);
      newHouse.save()
      .then(() => {
        this.resetForm();
        console.log(this.get('addUnit'));
      })
      .then(() => {
        this.get('flashMessages')
        .success('Successfully added a unit');
      })
      .catch((data) => {
        console.log(data);
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
    //Add delete functionality here. Allows user to delete unit directly on house detail view

    // deleteUnit() function(){
    //   let contract = this.get('unitData.contract');
    //   console.log(contract);
    //   contract.destroyRecord()
    //   .then(() => {
    //     this.resetForm();
    //   })
    //   .then(() => {
    //     this.get('flashMessages')
    //     .success('Successfully terminated the current contract for this unit');
    //   })
    //   .catch((data) => {
    //     console.log(data);
    //     this.get('flashMessages')
    //     .danger('There was a problem. Please try again.');
    //   });
    // },

    closeModal: function(){
      this.resetForm();
    },
  },
});
