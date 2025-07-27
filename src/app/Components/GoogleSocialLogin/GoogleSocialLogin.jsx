"use client"

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const GoogleSocialLogin = () => {
  return (
    <button
    type="button"
      onClick={() => signIn("google")}
      className="btn btn-outline flex items-center gap-2 w-full"
    >
      <FcGoogle size={20} />
      Login with Google
    </button>
  );
};

export default GoogleSocialLogin;
