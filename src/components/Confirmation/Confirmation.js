import React from 'react';
import { useParams } from 'react-router-dom';

const Confirmation = () => {
    const { id } = useParams()
    return (
        <div>
            <h1 className="text-success">Your Purchase has confirmed, id no. {id}</h1>
        </div>
    );
};

export default Confirmation;