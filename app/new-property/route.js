import Ember from 'ember';
import ScrollPositionMixin from '../mixins/scroll-position';

export default Ember.Route.extend(ScrollPositionMixin, {

  //Gets data from new-form componenet
  actions: {
    createHouse(data){
      let house = this.get('store').createRecord('house', data);
      return house.save()
      .then(() => this.get('flashMessages').success('You created a new property'))
      .then(() => {
        this.transitionTo('houses');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
  },
});
