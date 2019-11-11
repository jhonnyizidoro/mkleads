import Vue from 'vue'

import formatter from './formatter'
import validator from './validator'

Vue.mixin(formatter)
Vue.mixin(validator)