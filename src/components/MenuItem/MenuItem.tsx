interface MenuItemProps {
  title: string;
  icon: React.ElementType;
  isActive: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, icon, isActive }) => {
  const Icon = icon;
  return (
    <button
      className={`flex flex-row gap-2 items-center ${
        isActive ? "text-[#2DB8A1]" : "text-[#949796]"
      }`}
    >
      <Icon />
      <p>{title}</p>
    </button>
  );
};

export default MenuItem;
