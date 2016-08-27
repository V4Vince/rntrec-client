import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),
  store: Ember.inject.service(),
  //house
  //addUnit
  unitParams: {},

  actions: {
    createContract () {
      // let id = this.get('house.id');
      let unitParams = this.get('unitParams');
      let house = this.get('house');
      // let house = this.get('store').peekRecord('house', id);
      let unit = this.get('store').createRecord('unit', unitParams);
      let newHouse = house.get('units').pushObject(unit);
      this.set('addUnit', false);
      newHouse.save()
      // .then(() => this.set('addUnit', false))
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
  },
});
