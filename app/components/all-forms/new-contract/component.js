import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),
  store: Ember.inject.service(),
  //unitData
  contractParams: {},

  actions: {
      //creates a unit record with association to house
      submit () {
        // let id = this.get('unitData.id');
        let contractParams = this.get('contractParams');
        // let unit = this.get('store').peekRecord('unit', id);
        let contract = this.get('store').createRecord('contract', contractParams);
        contract.set('unit', this.get('unitData.id'));
        contract.save()
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
      reset () {
        this.set('contractParams', {});
        console.log("reset check");
      },
    }, //actions
}); //Ember.Component
