import { Nav, Separator } from "~/components";

export const Header = () => {
  return (
    <>
      <header className="bg-white fixed sm:static w-full left-0 px-6 sm:px-0 py-4 flex items-center justify-between">
        <Nav />
      </header>
      <Separator />
    </>
  );
};

export default Header;
