import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col ">
      <Navbar />
      <main className=" ">{children}</main>
      <Footer />
    </div>
  );
}