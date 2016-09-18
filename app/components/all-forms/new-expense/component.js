import Ember from 'ember';
import { createNumberMask } from 'ember-text-mask-addons';

export default Ember.Component.extend({

//TO Do:
//Create a function that takes the result from the masked input and mutate it to match the format Rails is expecting.
//USER INPUT: $1,200 -> RAILS: 1200
  createNumberMask: createNumberMask({
    allowDecimal: true
  })

});
