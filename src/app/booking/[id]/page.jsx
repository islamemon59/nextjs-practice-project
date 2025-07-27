import UpdateServiceDataForm from '@/app/Components/UpdateServiceDataForm/UpdateServiceDataForm';
import React from 'react';

const SingleBooking = async ({params}) => {
    const {id} = await params;
    const res = await fetch(`http://localhost:3000/api/service/${id}`)
    const data = await res.json();
    console.log(data);
    return (
        <div>
            <UpdateServiceDataForm data={data} />
        </div>
    );
};

export default SingleBooking;