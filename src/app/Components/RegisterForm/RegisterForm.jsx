"use client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

const RegisterForm = () => {
  const router = useRouter();
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const userData = {
      name,
      email,
      role: "user",
    };

    const res = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      body: JSON.stringify(userData),
    });

    const data = await res.json();

    if (data.insertedId) {
      router.push("/login");
      form.reset();
    } else {
      toast.error("No user found");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleRegister}>
        <label className="form-control w-full">
          <span className="label-text font-medium">Full Name</span>
          <input
            name="name"
            type="text"
            placeholder="Your full name"
            className="input input-bordered w-full"
          />
        </label>

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
            placeholder="Create a password"
            className="input input-bordered w-full"
          />
        </label>

        <button type="submit" className="btn btn-primary w-full mt-4">
          Register
        </button>

        <div className="divider">OR</div>

        <button
          type="button"
          className="btn btn-outline w-full flex items-center justify-center gap-2"
        >
          <FaGoogle />
          Sign up with Google
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
