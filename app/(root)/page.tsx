import { auth, signOut } from "@/auth";
import NavLinks from "@/components/navigation/navbar/NavLinks";
import Link from "next/link";
import ROUTES from "@/constants/route";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = async () => {
  const session = await auth();

  return (
    <div className="flex flex-1">
      <h1 className="h1-bold">Welcome to nextjs</h1>
    </div>
  );
};
export default Home;
