import Navbar from "@/src/components/navbar/Navbar";
import Footer from "@/src/components/footer/Footer";
import { Analytics } from "@vercel/analytics/next"
export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Analytics/>
        <div className="flex-1  w-full mx-auto">{children}</div>
        <Footer />
      </div>
    </>
  );
}
