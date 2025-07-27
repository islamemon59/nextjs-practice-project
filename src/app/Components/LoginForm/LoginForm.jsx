"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import GoogleSocialLogin from "../GoogleSocialLogin/GoogleSocialLogin";

const LoginForm = () => {
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.ok) {
      router.push("/");
    } else {
      toast.error("No user found");
    }

    // Handle login submission
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <label className="form-control w-full">
          <span className="label-text font-medium">Email</span>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
          />
        </label>

        <label className="form-control w-full">
          <span className="label-text font-medium">Password</span>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-full"
          />
        </label>

        <button type="submit" className="btn btn-primary w-full mt-4">
          Login
        </button>

        <div className="divider">OR</div>

        <GoogleSocialLogin />
      </form>
    </div>
  );
};

export default LoginForm;
