"use client"

const AddServiceForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle add service logic here
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-6">Add New Service</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <label className="form-control w-full">
          <span className="label-text font-medium">Full Name</span>
          <input
            type="text"
            name="fullName"
            placeholder="Enter full name"
            className="input input-bordered w-full"
          />
        </label>

        {/* Date Picker */}
        <label className="form-control w-full">
          <span className="label-text font-medium">Date</span>
          <input
            type="date"
            name="date"
            className="input input-bordered w-full"
          />
        </label>

        {/* Phone Number */}
        <label className="form-control w-full">
          <span className="label-text font-medium">Phone Number</span>
          <input
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
            type="number"
            name="price"
            placeholder="Enter service price"
            className="input input-bordered w-full"
          />
        </label>

        {/* Address (Full width) */}
        <label className="form-control md:col-span-2">
          <span className="label-text font-medium">Address</span>
          <textarea
            name="address"
            placeholder="Enter address"
            className="textarea textarea-bordered w-full"
          />
        </label>

        {/* Submit Button (Full width on small, right side on medium) */}
        <div className="md:col-span-2 text-right">
          <button type="submit" className="btn btn-primary px-8">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddServiceForm;
