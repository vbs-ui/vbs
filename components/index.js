// components
import Alert from './alert/Alert'
import Badge from './badge/Badge'
import Breadcrumb from './breadcrumb/Breadcrumb'
import BreadcrumbItem from './breadcrumb/BreadcrumbItem'
import Button from './buttons/Button'
import ButtonGroup from './buttons/ButtonGroup'
import ButtonGroupItem from './buttons/ButtonGroupItem'
import Card from './card/Card'
import CardGroup from './card/CardGroup'
import Carousel from './carousel/Carousel'
import CarouselItem from './carousel/CarouselItem'
import Dropdown from './dropdowns/Dropdown'
import DropdownItem from './dropdowns/DropdownItem'
import DropdownDivider from './dropdowns/divider'
import ListGroup from './list-group/ListGroup'
import ListGroupItem from './list-group/ListGroupItem'
import Nav from './navs/Nav'
import NavItem from './navs/NavItem'
import NavContent from './navs/NavContent'
import NavPane from './navs/NavPane'
import Navbar from './navbar/Navbar'
import NavbarItem from './navbar/NavbarItem'
import Pagination from './pagination/Pagination'
import Progress from './progress/Progress'

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
  Nav,
  NavItem,
  NavContent,
  NavPane,
  Navbar,
  NavbarItem,
  Pagination,
  Progress
}

const install = (Vue, opts = {}) => {
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default Object.assign(components, { install })
