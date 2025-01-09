import { FiUser } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { RiAdminLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";

export const AdminNavigationLinks = [
  {
    route: "/admin",
    label: "dashboard",
    icon: <RxDashboard size={20} />,
  },
  {
    route: "/admin/requested-form",
    label: "requested-form",
    icon: <FiFileText size={20} />,
  },
  {
    route: "/admin/form-management",
    label: "form-management",
    icon: <HiOutlineClipboardList size={20} />,
  },
  {
    route: "/admin/client-registration",
    label: "client-registration",
    icon: <FiUser size={20} />,
  },
  {
    route: "/admin/user-admin",
    label: "user-admin",
    icon: <RiAdminLine size={20} />,
  },
];

export const ClientNavigationLinks = [
  {
    route: "/client",
    label: "forms",
    icon: <RxDashboard size={20} />,
  },
  {
    route: "/client/submitted-forms",
    label: "submitted-form",
    icon: <FiFileText size={20} />,
  },
  {
    route: "/client/client-profile",
    label: "profile",
    icon: <HiOutlineClipboardList size={20} />,
  },
];
