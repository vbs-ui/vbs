import Vue from 'vue'

// components
import VBS from 'components'
Vue.use(VBS)

// demo components
import Demo from '@/components/Demo'
Vue.component(Demo.name, Demo)
// doc components
import ComponentDoc from '@/components/ComponentDoc'
Vue.component(ComponentDoc.name, ComponentDoc)

// directives
import clickoutside from 'directives/clickoutside'
Vue.directive('clickoutside', clickoutside)
