"use client";

import { Card } from "@/components/ui/card";
import {
  CodeIcon,
  ImageIcon,
  MessageSquare,
  MusicIcon,
  VideoIcon,
  ArrowRightIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Text",
    icon: MessageSquare,
    href: "/generate/text",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image",
    icon: ImageIcon,
    href: "/generate/image",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    label: "Video",
    icon: VideoIcon,
    href: "/generate/video",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    label: "Music",
    icon: MusicIcon,
    href: "/generate/music",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    label: "Code",
    icon: CodeIcon,
    href: "/generate/code",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
];

export default function DashboardPage() {
  const router = useRouter();
  return (
    <div className="flex justify-center">
      <div>
        <div className="mb-8 space-y-4">
          <h2 className="text-center text-2xl font-bold md:text-4xl">
            Choose what you want to generate and create awesome things with Ai.
          </h2>
          <p className="text-center text-sm font-light text-muted-foreground md:text-lg">
            Just type in what you want to generate, add prompts and save best
            results.
          </p>
        </div>
        <div className="space-y-4 px-4 md:px-20 lg:px-32">
          {tools.map((tool) => (
            <Card
              key={tool.href}
              onClick={() => router.push(tool.href)}
              className="flex cursor-pointer items-center justify-between border-neutral-300 p-3 transition hover:shadow-md"
            >
              <div className="flex items-center gap-x-4">
                <div className={cn("w-fit rounded-md p-2", tool.bgColor)}>
                  <tool.icon className={(cn("h-8 w-8"), tool.color)} />
                </div>
                <div className="font-semibold">{tool.label}</div>
              </div>
              <ArrowRightIcon className="h-5 w-5" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
