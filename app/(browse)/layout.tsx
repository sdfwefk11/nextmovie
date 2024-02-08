import { Navbar } from "./_components/navbar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <Navbar />
      <div className="pt-20 px-3">{children}</div>
    </>
  );
}
