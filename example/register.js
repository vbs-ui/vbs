import Vue from 'vue'

// components
import VBS from '../src'
Vue.use(VBS)

// demo components
import Demo from '@/components/Demo'
Vue.component(Demo.name, Demo)
// doc components
import ComponentDoc from '@/components/ComponentDoc'
Vue.component(ComponentDoc.name, ComponentDoc)
