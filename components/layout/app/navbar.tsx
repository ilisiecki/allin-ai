import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/layout/app/mobile-sidebar";
import GetUserEmail from "./getUserEmail";
import { getApiLimitCount } from "@/lib/api-limit";

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();

  return (
    <div className="flex items-center p-4">
      <MobileSidebar apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-start"></div>
      <div className="flex w-full items-center justify-end">
        <span className="flex pr-2">
          <GetUserEmail />
        </span>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
