import { UserButton } from "@clerk/clerk-react";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <UserButton />
    </div>
  );
}
