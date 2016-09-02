import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),

  tagName: 'form',
  classNames: ['form-horizontal'],
  //newPassword: true || false
  resetForm: function(){
    this.set('newPassword', false);
    this.set('passwords', {});
  },

  passwords: {},

  actions: {

    closeModal(){
      this.set('newPassword', false);
    },
    changePassword () {
      let passwords = this.get('passwords');
      this.get('auth').changePassword(passwords)
      // .then(() => this.get('auth').signOut())
      .then(() => this.resetForm())
      .then(() => {
        this.get('flashMessages')
        .success('Successfully changed your password!');
      })
      .then(() => {
        this.get('flashMessages').warning('You have been signed out.');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },

    reset () {
      this.set('passwords', {});
    },
  },
});
