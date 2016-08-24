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
  this.route('houses', { path: '/properties' });
  this.route('house', { path: '/properties/:house_id' });
  this.route('units');
  this.route('unit', { path: '/units/:unit_id' });
  this.route('new-property');
  this.route('contracts');
  this.route('contract', { path: '/contracts/:contract_id'});
  this.route('expenses');
});

export default Router;
