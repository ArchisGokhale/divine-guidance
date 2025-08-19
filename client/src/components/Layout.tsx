import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
  <div className="min-h-screen bg-purple-900 text-white relative z-10">
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
