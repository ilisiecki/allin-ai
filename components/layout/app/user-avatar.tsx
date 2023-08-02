import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";

const UserAvatar = () => {
  const { user } = useUser();
  return (
    <Avatar className="h-10 w-10">
      <AvatarImage src={user?.profileImageUrl} />
      <AvatarFallback>
        {user?.emailAddresses[0].emailAddress.slice(0, 2)}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
