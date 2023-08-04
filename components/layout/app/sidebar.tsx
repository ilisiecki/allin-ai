"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  CodeIcon,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  SettingsIcon,
  VideoIcon,
} from "lucide-react";
import FreeCounter from "./free-counter";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });
const routesApp = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Settings",
    icon: SettingsIcon,
    href: "/settings",
    color: "text-neutral-400",
  },
];

const routesAi = [
  {
    label: "Text",
    icon: MessageSquare,
    href: "/generate/text",
    color: "text-violet-500",
  },
  {
    label: "Image",
    icon: ImageIcon,
    href: "/generate/image",
    color: "text-pink-500",
  },
  {
    label: "Video",
    icon: VideoIcon,
    href: "/generate/video",
    color: "text-orange-500",
  },
  {
    label: "Music",
    icon: MusicIcon,
    href: "/generate/music",
    color: "text-green-500",
  },
  {
    label: "Code",
    icon: CodeIcon,
    href: "/generate/code",
    color: "text-red-500",
  },
];

type Props = {
  apiLimitCount: number;
  isPro: boolean;
};

const Sidebar = (props: Props) => {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col space-y-4 bg-neutral-800 py-4 text-white">
      <div className="flex-1 px-3 py-2">
        <Link href="/dashboard" className="mb-5 flex items-center pl-3">
          <div className="relative mr-4 h-8 w-8">
            <Image src="/img/allin-ai-logo.webp" alt="logo" fill sizes="8" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            Allin
          </h1>
        </Link>
        <div className="mb-5 space-y-1">
          <div className="p-3">Options: </div>
          {routesApp.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "group flex w-full cursor-pointer justify-center rounded-lg p-3 text-sm font-medium transition hover:bg-white/10",
                pathname === route.href
                  ? "bg-white/10 text-white"
                  : "text-neutral-400"
              )}
            >
              <div className="flex flex-1 items-center">
                <route.icon className={cn("mr-3 h-6 w-6", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
        <div className="space-y-1">
          <div className="p-3">Choose what you want to generate with Ai: </div>

          {routesAi.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "group flex w-full cursor-pointer justify-center rounded-lg p-3 text-sm font-medium transition hover:bg-white/10",
                pathname === route.href
                  ? "bg-white/10 text-white"
                  : "text-neutral-400"
              )}
            >
              <div className="flex flex-1 items-center">
                <route.icon className={cn("mr-3 h-6 w-6", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter apiLimitCount={props.apiLimitCount} isPro={props.isPro} />
    </div>
  );
};

export default Sidebar;
