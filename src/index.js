// components
import Alert from './components/alert/Alert'
import Badge from './components/badge/Badge'
import Breadcrumb from './components/breadcrumb/Breadcrumb'
import BreadcrumbItem from './components/breadcrumb/BreadcrumbItem'
import Button from './components/buttons/Button'
import ButtonGroup from './components/buttons/ButtonGroup'
import ButtonGroupItem from './components/buttons/ButtonGroupItem'
import Card from './components/card/Card'
import CardGroup from './components/card/CardGroup'
import Carousel from './components/carousel/Carousel'
import CarouselItem from './components/carousel/CarouselItem'
import Dropdown from './components/dropdowns/Dropdown'
import DropdownItem from './components/dropdowns/DropdownItem'
import DropdownDivider from './components/dropdowns/divider'
import ListGroup from './components/list-group/ListGroup'
import ListGroupItem from './components/list-group/ListGroupItem'
import Modal from './components/modal/Modal.vue'
import Nav from './components/navs/Nav'
import NavItem from './components/navs/NavItem'
import Navbar from './components/navbar/Navbar'
import NavbarItem from './components/navbar/NavbarItem'
import Pagination from './components/pagination/Pagination'
import Progress from './components/progress/Progress'

// directives
import clickoutside from './directives/clickoutside'

const components = {
  Alert,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  ButtonGroupItem,
  Card,
  CardGroup,
  Carousel,
  CarouselItem,
  Dropdown,
  DropdownItem,
  DropdownDivider,
  ListGroup,
  ListGroupItem,
  Modal,
  Nav,
  NavItem,
  Navbar,
  NavbarItem,
  Pagination,
  Progress
}

const install = (Vue, opts = {}) => {
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })

  Vue.directive('clickoutside', clickoutside)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default Object.assign(components, { install })
