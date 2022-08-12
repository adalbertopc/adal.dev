import { Nav } from "~/components";

export const Header = () => {
  return (
    <header className="py-4 flex items-center justify-between">
      <Nav />
      <div className="w-[104px] flex justify-end">
        <div className="w-10 h-10 bg-red-500"></div>
      </div>
    </header>
  );
};

export default Header;
