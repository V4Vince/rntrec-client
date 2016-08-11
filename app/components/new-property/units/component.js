import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),
  store: Ember.inject.service(),
  //house <- from house-details component
  //addUnit: true || false <- from house-details component
  unitParams: {},

  actions: {
      //creates a unit record with association to house
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
    }, //actions
}); //Ember.Component
