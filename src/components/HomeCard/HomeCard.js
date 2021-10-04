import React from 'react';
import './HomeCard.css';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const HomeCard = (props) => {
    const { id, img, name, price } = props.language;


    return (
        <div className="col-md-5 mx-5 col-12 g-4 p-3 rounded-3 card-style">
            <div>
                <div>
                    <img className="img-fluid p-1 w-50" src={img} alt="" />
                </div>
                <div>
                    <h1>{name}</h1>
                    <h1>{price}</h1>

                    <NavLink
                        to={`/services/${id}`}>
                        <Button variant="warning">Purchase</Button>
                    </NavLink>

                </div>
            </div>
        </div>
    );
};

export default HomeCard;