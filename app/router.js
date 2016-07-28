import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('houses');
  this.route('house', { path: '/houses/:house_id' });
  this.route('units');
  this.route('unit', { path: '/units/:unit_id' });
  this.route('add-property');
});

export default Router;
