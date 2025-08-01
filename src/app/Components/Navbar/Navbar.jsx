"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Loader from "../Loader/Loader";

const Navbar = () => {
  const { data: session, status } = useSession();
  if(status === "loading") return <Loader/>

  const links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/addService"}>Add Service</Link>
      </li>
      <li>
        <Link href={"/myService"}>My Service</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-4">
        {status === "authenticated" ? (
          <>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <Image width={20} height={20} alt="user-image" src={session?.user?.image} />
              </div>
            </div>
            <button onClick={() => signOut()} className="btn">Logout</button>
          </>
        ) : (
          <>
            <Link href={"/login"} className="btn rounded">
              Login
            </Link>
            <Link href={"/register"} className="btn rounded">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
