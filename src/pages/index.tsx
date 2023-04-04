import { useState } from "react";
import Game from "@/components/Game";
import type { UserType } from "@/types/User";

export default function Home() {
  const [userType, setUserType] = useState<UserType>(1);
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center to-[#00D2FF] from-[#3A7BD5] bg-gradient-to-t">
      <h1 className="my-3">Player {"'s"} Turn</h1>
      <Game userType={userType} setUserType={setUserType} />
    </div>
  );
}
