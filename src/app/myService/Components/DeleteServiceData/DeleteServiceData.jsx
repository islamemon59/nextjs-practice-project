"use client"
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FiTrash2 } from "react-icons/fi";

const DeleteServiceData = async ({ data }) => {
  const router = useRouter()
  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/api/service/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    if(data.deletedCount){
      router.refresh()
      router.push("/myService")
      toast.success("Successfully delete")
    } else {
      toast.error("Delete Failed")
    }
  };

  return (
    <button
      onClick={() => handleDelete(data._id)}
      className="btn btn-outline btn-error btn-sm flex items-center gap-1"
    >
      <FiTrash2 /> Delete
    </button>
  );
};

export default DeleteServiceData;
