import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

const MyService = async () => {
  const res = await fetch("http://localhost:3000/api/service", {
    headers: headers(),
  });
  const data = await res.json();
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-7xl gap-6 mx-auto mt-10">
      {data.map((d) => {
        return (
          <div key={d._id} className="card w-full bg-base-100 card-lg shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Name: {d.name}</h2>
              <p>Email: {d.email}</p>
              <p>Phone: {d.phone}</p>
              <p>Date: {d.date}</p>
              <p>Price: {d.price}</p>
              <p>Address: {d.address}</p>
              <div className="justify-end card-actions">
                <Link href={`/myService/${d._id}`} className="btn btn-primary rounded">Details</Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyService;
