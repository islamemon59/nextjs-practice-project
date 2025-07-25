import React from 'react';

const SingleAddService = async ({params}) => {
    const {id} = await params;
    return (
        <div>
            <p>{id}</p>
        </div>
    );
};

export default SingleAddService;