import {AiOutlineHome, AiOutlineProject} from "react-icons/ai";
import {FiAlertTriangle} from "react-icons/fi";
import {BiChat} from "react-icons/bi"

export const SidebarItems = [
  {
    name: 'Dashboard',
    navLink: '/dashboard',
    icon: AiOutlineHome,
  },
  {
    name: 'Projects',
    navLink: '/dashboard/projects',
    icon: AiOutlineProject,
  },
  {
    name: 'Create Alerts',
    navLink: '/dashboard/create-alert',
    icon: FiAlertTriangle,
  },
  {
    name: 'Conversations',
    navLink: '/dashboard/conversations',
    icon: BiChat,
  },
]