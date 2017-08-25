import Vue from 'vue'

// components
import Alert from 'components/alert/Alert'
import Badge from 'components/badge/Badge'
import Button from 'components/button/Button'
import Navbar from 'components/navbar/Navbar'
import NavbarItem from 'components/navbar/NavbarItem'
Vue.component(Alert.name, Alert)
Vue.component(Badge.name, Badge)
Vue.component(Button.name, Button)
Vue.component(Navbar.name, Navbar)
Vue.component(NavbarItem.name, NavbarItem)

// demo components
import Demo from '@/components/Demo'
Vue.component(Demo.name, Demo)

// directives
import clickoutside from 'directives/clickoutside'
Vue.directive('clickoutside', clickoutside)
