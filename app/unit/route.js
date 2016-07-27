import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('unit', params.unit_id, { reload: true });
  },
});
