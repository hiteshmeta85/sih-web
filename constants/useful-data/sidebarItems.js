import {AiOutlineHome, AiOutlineProject, AiOutlineSetting} from "react-icons/ai";
import {FiAlertTriangle, FiMapPin} from "react-icons/fi";
import {RiPlayList2Fill} from "react-icons/ri";

export const sidebarItems = [
  {
    name: 'Dashboard',
    navLink: '/dashboard',
    icon: AiOutlineHome,
    position: 'top'
  },
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
    name: 'Account',
    navLink: '/dashboard/account',
    icon: AiOutlineSetting,
    position: 'bottom'
  },
]