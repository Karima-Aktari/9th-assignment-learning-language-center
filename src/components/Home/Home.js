import React from 'react';
import { useEffect, useState } from "react";
import HomeCard from '../HomeCard/HomeCard';
import './Home.css';

const Home = () => {
    const [languages, setLanguages] = useState([]);
    // fetch data
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setLanguages(data))
    }, []);


    return (
        <div className=" container-fluid row mx-auto">
            {
                languages?.map(language => <HomeCard
                    key={language.id}
                    language={language}
                ></HomeCard>)
            }

        </div>
    );
};

export default Home;