import {AiOutlineHome, AiOutlineProject, AiOutlineSetting} from "react-icons/ai";
import {FiAlertTriangle, FiMapPin} from "react-icons/fi";
import {RiPlayList2Fill} from "react-icons/ri";
import {FaSignal} from "react-icons/fa";
import {BsGlobe2} from "react-icons/bs";

export const sidebarItems = [
  {
    name: 'Dashboard',
    navLink: '/dashboard',
    icon: AiOutlineHome,
    position: 'top'
  },
  // {
  //   name: 'Live',
  //   navLink: '/live',
  //   icon: BsGlobe2,
  //   position: 'top'
  // },
  {
    name: 'Projects',
    navLink: '/dashboard/projects',
    icon: AiOutlineProject,
    position: 'top'
  },
  {
    name: 'Maps',
    navLink: '/dashboard/maps',
    icon: FiMapPin,
    position: 'top'
  },
  {
    name: 'Alerts',
    navLink: '/dashboard/alerts',
    icon: FiAlertTriangle,
    position: 'top'
  },
  {
    name: 'Event Flow',
    navLink: '/event-flow',
    icon: RiPlayList2Fill,
    position: 'top'
  },
  {
    name: 'Live Demo',
    navLink: '/dashboard/live-demo',
    icon: FaSignal,
    position: 'top'
  },
  {
    name: 'Account',
    navLink: '/dashboard/account',
    icon: AiOutlineSetting,
    position: 'bottom'
  },
]