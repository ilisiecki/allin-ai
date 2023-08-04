"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/layout/app/sidebar";
import { useEffect, useState } from "react";

type Props = {
  apiLimitCount: number;
  isPro: boolean;
};

const MobileSidebar = (props: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <div className="cursor-pointer rounded-md p-1 hover:bg-neutral-200 md:hidden">
          <Menu className="" />
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar apiLimitCount={props.apiLimitCount} isPro={props.isPro} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
