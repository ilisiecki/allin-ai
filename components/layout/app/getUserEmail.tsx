import { currentUser } from "@clerk/nextjs";

export default async function GetUserEmail() {
  const user = await currentUser();

  return (
    <div className="text-center font-light text-muted-foreground">
      {user?.emailAddresses[0].emailAddress}
    </div>
  );
}
