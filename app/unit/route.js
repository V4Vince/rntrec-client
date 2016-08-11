import Ember from 'ember';
import ScrollPositionMixin from '../mixins/scroll-position';

export default Ember.Route.extend(ScrollPositionMixin, {
  model (params) {
    return this.get('store').findRecord('unit', params.unit_id);
  },
  actions: {
    delete(unit){
      unit.destroyRecord()
      .then(() => {
        this.transitionTo('houses');
      })
      .then(() => {
        this.get('flashMessages').success('You\'ve deleted this unit.');
      });
    },
  },
});
