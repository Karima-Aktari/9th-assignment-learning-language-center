import React from 'react';
import { useEffect, useState } from "react";
import HomeCard from '../HomeCard/HomeCard';
import './Home.css';

const Home = () => {
    const [languages, setLanguages] = useState([]);
    useEffect(() => {
        fetch('./languages.JSON')
            .then(res => res.json())
            .then(data => setLanguages(data))
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <div className=" container-fluid row mx-auto">
                {
                    languages?.map(language => <HomeCard language={language}></HomeCard>)
                }
            </div>

        </div>
    );
};

export default Home;