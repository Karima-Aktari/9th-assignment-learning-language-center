import React from 'react';
import { useEffect, useState } from "react";

const Services = () => {
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        fetch('./languages.JSON')
            .then(res => res.json())
            .then(data => setLanguages(data))
    }, []);

    return (
        <div className=" container-fluid row mx-auto my-3" style={{ background: 'rgb(191, 220, 236)' }}>
            {
                languages?.map((language) => (
                    <div className="col-md-4 g-3 p-3 rounded-3" style={{ border: '1px solid skyblue', }} key={language.id}>
                        <div>
                            <img className="img-fluid p-1 w-50" src={language?.img} alt="" />
                        </div>
                        <h1>Services-Id:{language?.id} </h1>
                        <h1>Name:{language?.name}</h1>
                        <h1>Price:<small>${language?.price}</small></h1>
                        <h2>Age-Limit:{language?.ageLimit}</h2>
                        <p>Description:{language?.description}</p>
                    </div>

                ))
            }
        </div>
    );
};

export default Services;