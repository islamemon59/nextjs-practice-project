
import React from "react";
import { FiEdit } from "react-icons/fi";
import DeleteServiceData from "../Components/DeleteServiceData/DeleteServiceData";
import Link from "next/link";

const SingleService = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/service/${id}`);
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <div className="card w-96 bg-base-100 card-lg shadow-sm mx-auto">
        <div className="card-body">
          <h2 className="card-title">Name: {data.name}</h2>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
          <p>Date: {data.date}</p>
          <p>Price: {data.price}</p>
          <p>Address: {data.address}</p>

          <div className="card-actions justify-end">
            <Link href={`/booking/${data._id}`} className="btn btn-outline btn-info btn-sm flex items-center gap-1">
              <FiEdit /> Edit
            </Link>
            <DeleteServiceData data={data} /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
