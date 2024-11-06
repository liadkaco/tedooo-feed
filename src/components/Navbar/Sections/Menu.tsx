import { FiHome } from "react-icons/fi";
import MenuItem from "../../MenuItem/MenuItem";
import { FiMessageCircle } from "react-icons/fi";
import profile from "../../../assets/images/profile.jpg";
import { IoMdNotificationsOutline } from "react-icons/io";

interface MenuProps {
    currentPage: string;
}

export const Menu: React.FC<MenuProps> = ({currentPage}) => {
    return ( <div className="flex flex-row gap-4 w-[390px] h-[40px]">
    <MenuItem
      title="Home"
      icon={FiHome}
      isActive={currentPage === "Home"}
    />
    <MenuItem
      title="Messaging"
      icon={FiMessageCircle}
      isActive={currentPage === "Messaging"}
    />
    <MenuItem
      title="Notifications"
      icon={IoMdNotificationsOutline}
      isActive={currentPage === "Notifications"}
    />
    <img
      src={profile}
      alt="profile"
      className="w-[40px] h-full rounded-full"
    />
  </div> );
}
