import { Header } from "~/components";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
    </div>
  );
};
