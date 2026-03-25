import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PromoBanner } from "../components/PromoBanner";
import { ScrollToTop } from "../components/ScrollToTop";
import { BackToTop } from "../components/BackToTop";
export function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <PromoBanner />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}