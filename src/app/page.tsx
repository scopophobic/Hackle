"use client";
import mainGame from "./mainGame/page";
import GameBoard from "../components/GameBoard";
import Hackle from "./Hackle/page";

import { useUser } from "@auth0/nextjs-auth0/client";
import userLogin from "@/components/userLogin";

export default function Home() {
  const { user, error, isLoading } = useUser();
  return (
    <div className="grid grid-rows-[20px_1fr_20px]  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="font-extrabold text-5xl font-mono tracking-widest text-center">
        Hackle Soon ...
        <br />
        <a href="/api/auth/login">Login</a>
        {/* <h1>welcome, {user.name}</h1>
        <h1>{user.email}</h1> */}
        {/* <Hackle/> */}
        {/* <userLogin/> */}
      </h1>
    </div>
    // <div>
    //   <Hackle />
    // </div>
  );
}
