import logo from "../../../assets/images/TEDOOO LOGO.png";

export const Search = () => {
  return (
    <div className="flex flex-row gap-3 w-[268px] h-[40px]">
      <img src={logo} alt="logo" className="w-[40px] h-full rounded" />
      <input
        type="text"
        placeholder="Search"
        className="w-[216px] h-full rounded-[32px] p-2 bg-[#F4F5F5]"
      />
    </div>
  );
};
