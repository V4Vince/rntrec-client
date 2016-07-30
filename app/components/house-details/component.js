import Ember from 'ember';

export default Ember.Component.extend({
  //unitParams
  addUnit: false,
  actions: {
    add: function(){
      this.set('addUnit', true);
      this.set('unitParams', {});
    },
  },
});
