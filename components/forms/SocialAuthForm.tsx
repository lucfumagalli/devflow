"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner";
import ROUTES from "@/constants/route";
import { OctagonXIcon } from "lucide-react";
import { signIn } from "next-auth/react";

const SocialAuthForm = () => {
  const buttonClass = `cursor-pointer background-dark400_light900 body-medium text-dark200_light800 py3 rounded-2 min-h-12 flex-1 px-4`;

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
      });
    } catch (error) {
      console.error(error);
      toast.error("Sign in failed", {
        description: error instanceof Error ? error.message : "An error occured during sign-in",
        icon: <OctagonXIcon className="size-4" />,
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2">
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          src="icons/github.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with GitHub</span>
      </Button>
      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
        <Image src="icons/google.svg" alt="Google Logo" width={20} height={20} className="mr-2.5 object-contain" />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};
export default SocialAuthForm;
