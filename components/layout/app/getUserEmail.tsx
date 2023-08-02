"use client";

import { useUser } from "@clerk/nextjs";

export default function GetUserEmail() {
  const { user } = useUser();

  return (
    <div className="text-center font-light text-muted-foreground">
      {user?.emailAddresses[0].emailAddress}
    </div>
  );
}
