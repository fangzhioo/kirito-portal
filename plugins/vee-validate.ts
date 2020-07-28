import Vue from 'vue';

import { required, email, max, min, size } from 'vee-validate/dist/rules';
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate';

// https://logaretm.github.io/vee-validate/guide/interaction-and-ux.html#interaction-modes
setInteractionMode('eager');

extend('required', {
  ...required,
  message: 'Enter {_field_}',
});

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
});

extend('min', {
  ...min,
  message: '{_field_} may not be less than {length} characters',
});

extend('email', {
  ...email,
  message: 'Email must be valid',
});

extend('password', {
  params: ['target'],
  validate(value: any, { target }: any) {
    return value === target;
  },
  message: 'Password does not match',
});

extend('size', {
  ...size,
  message: 'video size should be less than 5 MB!',
});

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
