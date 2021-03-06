import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    signIn (credentials) {
      return this.get('auth').signIn(credentials)
      .then(() => this.get('flashMessages').success('Thanks for signing in!'))
      .then(() => this.transitionTo('houses'))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
  },
});
