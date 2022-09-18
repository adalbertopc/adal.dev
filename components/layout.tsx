import { Header, Footer, SEO } from "~/components";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="container">
        <Header />
        <main className="mt-[68px] sm:mt-0">{children}</main>
        <Footer />
      </div>
    </>
  );
};
