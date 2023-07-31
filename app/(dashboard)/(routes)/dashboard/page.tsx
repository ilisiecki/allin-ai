import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="">
      Dashboard Page (Protected){" "}
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
