"use client";
import React from "react";
import toast from "react-hot-toast";

const UpdateServiceDataForm = ({ data }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    console.log(formData);
    toast("Please wait")
    const res = await fetch(`http://localhost:3000/api/booking/${data._id}`, {
      method: "PATCH",
      body: JSON.stringify(formData),
    });
    const resData = await res.json();
    console.log(resData);

    if (resData.modifiedCount) {
      toast.success("Successfully Updated");
    } else {
      toast.error("Update Failed");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-6">Update Your Service</h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Full Name */}
        <label className="form-control w-full">
          <span className="label-text font-medium">Full Name</span>
          <input
            defaultValue={data.name}
            type="text"
            name="name"
            placeholder="Enter full name"
            className="input input-bordered w-full"
          />
        </label>

        {/* Date Picker */}
        <label className="form-control w-full">
          <span className="label-text font-medium">Date</span>
          <input
            defaultValue={data.date}
            type="date"
            name="date"
            className="input input-bordered w-full"
          />
        </label>

        {/* Phone Number */}
        <label className="form-control w-full">
          <span className="label-text font-medium">Phone Number</span>
          <input
            defaultValue={data.phone}
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            className="input input-bordered w-full"
          />
        </label>

        {/* Price */}
        <label className="form-control w-full">
          <span className="label-text font-medium">Price</span>
          <input
            defaultValue={data.price}
            type="number"
            name="price"
            readOnly
            placeholder="Enter service price"
            className="input input-bordered w-full"
          />
        </label>

        {/* Address (Full width) */}
        <label className="form-control md:col-span-2">
          <span className="label-text font-medium">Address</span>
          <textarea
            defaultValue={data.address}
            name="address"
            placeholder="Enter address"
            className="textarea textarea-bordered w-full"
          />
        </label>

        {/* Submit Button (Full width on small, right side on medium) */}
        <div className="md:col-span-2 text-right">
          <button type="submit" className="btn btn-primary px-8">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateServiceDataForm;
