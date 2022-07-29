import {AiOutlineHome, AiOutlineProject, AiOutlineSetting} from "react-icons/ai";
import {FiAlertTriangle, FiMapPin} from "react-icons/fi";
import {BiChat} from "react-icons/bi"

export const SidebarItems = [
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
    name: 'Create Alerts',
    navLink: '/dashboard/create-alert',
    icon: FiAlertTriangle,
    position: 'top'
  },
  {
    name: 'Conversations',
    navLink: '/dashboard/conversations',
    icon: BiChat,
    position: 'top'
  },
  {
    name: 'Account',
    navLink: '/dashboard/account',
    icon: AiOutlineSetting,
    position: 'bottom'
  },
]