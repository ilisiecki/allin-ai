import Navbar from "@/components/layout/app/navbar";
import Sidebar from "@/components/layout/app/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-full">
      <div className="z-50 hidden h-full bg-neutral-900 md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col">
        <Sidebar />
      </div>
      <Navbar />
      <main className="md:pl-72 2xl:mt-12">{children}</main>
    </div>
  );
};

export default DashboardLayout;
