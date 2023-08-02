import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
};

const Heading = (props: Props) => {
  return (
    <div className="mb-8 flex items-center gap-x-3 px-4 lg:px-8">
      <div className={cn("w-fit rounded-md p-2", props.bgColor)}>
        <props.icon className={cn("h-10 w-10", props.iconColor)} />
      </div>
      <div>
        <h2 className="text-3xl font-bold">{props.title}</h2>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </div>
  );
};

export default Heading;
