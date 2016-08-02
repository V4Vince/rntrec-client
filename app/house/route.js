import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.get('store').findRecord('house', params.house_id, { reload: true });
  },
  actions: {
    delete(house){
      house.destroyRecord()
      .then(() => {
        this.transitionTo('houses');
      })
      .then(() => {
        this.get('flashMessages').success('You\'ve deleted this property.');
      });
    },
  },
});
