import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const AiAvatar = () => {
  return (
    <Avatar className="h-10 w-10">
      <AvatarFallback className="bg-gradient-to-r from-orange-500 to-pink-500 font-semibold text-white">
        AI
      </AvatarFallback>
    </Avatar>
  );
};

export default AiAvatar;
