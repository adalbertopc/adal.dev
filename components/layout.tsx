import { Header } from "~/components";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main className="mt-[68px] sm:mt-0">{children}</main>
    </div>
  );
};
