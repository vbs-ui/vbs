import Vue from 'vue'

// components
import Alert from 'components/alert/Alert'
import Badge from 'components/badge/Badge'
import Breadcrumb from 'components/breadcrumb/Breadcrumb'
import BreadcrumbItem from 'components/breadcrumb/BreadcrumbItem'
import Button from 'components/buttons/Button'
import ButtonGroup from 'components/buttons/ButtonGroup'
import ButtonGroupItem from 'components/buttons/ButtonGroupItem'
import Card from 'components/card/Card'
import Carousel from 'components/carousel/Carousel'
import CarouselItem from 'components/carousel/CarouselItem'
import Dropdown from 'components/dropdowns/Dropdown'
import DropdownItem from 'components/dropdowns/DropdownItem'
import DropdownDivider from 'components/dropdowns/divider'
import ListGroup from 'components/list-group/ListGroup'
import ListGroupItem from 'components/list-group/ListGroupItem'
import Nav from 'components/navs/Nav'
import NavItem from 'components/navs/NavItem'
import NavContent from 'components/navs/NavContent'
import NavPane from 'components/navs/NavPane'
import Navbar from 'components/navbar/Navbar'
import NavbarItem from 'components/navbar/NavbarItem'
import Pagination from 'components/pagination/Pagination'
import Progress from 'components/progress/Progress'
Vue.component(Alert.name, Alert)
Vue.component(Badge.name, Badge)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(BreadcrumbItem.name, BreadcrumbItem)
Vue.component(Button.name, Button)
Vue.component(ButtonGroup.name, ButtonGroup)
Vue.component(ButtonGroupItem.name, ButtonGroupItem)
Vue.component(Card.name, Card)
Vue.component(Carousel.name, Carousel)
Vue.component(CarouselItem.name, CarouselItem)
Vue.component(Dropdown.name, Dropdown)
Vue.component(DropdownItem.name, DropdownItem)
Vue.component(DropdownDivider.name, DropdownDivider)
Vue.component(ListGroup.name, ListGroup)
Vue.component(ListGroupItem.name, ListGroupItem)
Vue.component(Nav.name, Nav)
Vue.component(NavItem.name, NavItem)
Vue.component(NavContent.name, NavContent)
Vue.component(NavPane.name, NavPane)
Vue.component(Navbar.name, Navbar)
Vue.component(NavbarItem.name, NavbarItem)
Vue.component(Pagination.name, Pagination)
Vue.component(Progress.name, Progress)

// demo components
import Demo from '@/components/Demo'
Vue.component(Demo.name, Demo)
// doc components
import ComponentDoc from '@/components/ComponentDoc'
Vue.component(ComponentDoc.name, ComponentDoc)

// directives
import clickoutside from 'directives/clickoutside'
Vue.directive('clickoutside', clickoutside)
