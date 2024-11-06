import { Menu, Search } from "./Sections";


interface NavbarProps {
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
  return (
    <nav className="bg-white drop-shadow-md w-[100dvw] h-[58px] absolute top-0 text-[#949796]">
      <div className="flex flex-row justify-between items-center h-full px-40">
        <Search/>
        <Menu currentPage={currentPage}/>
      </div>
    </nav>
  );
};

export default Navbar;
