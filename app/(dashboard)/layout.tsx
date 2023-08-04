import Navbar from "@/components/layout/app/navbar";
import Sidebar from "@/components/layout/app/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = async (props: Props) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="relative h-full">
      <div className="z-50 hidden h-full bg-neutral-900 md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col">
        <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      </div>
      <Navbar />
      <main className="md:pl-72 2xl:mt-12">{props.children}</main>
    </div>
  );
};

export default DashboardLayout;
