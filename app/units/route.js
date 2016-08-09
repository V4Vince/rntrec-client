import Ember from 'ember';
import ScrollPositionMixin from '../mixins/scroll-position';

export default Ember.Route.extend(ScrollPositionMixin, {
  model () {
    return this.get('store').findAll('unit');
  },


});
