import React from 'react';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="bg-info py-4">
            <h1>Contact Us</h1>
            <div className="mx-auto justify-content-center w-50">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="keep your email here" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control placeholder="Write your text here" as="textarea" rows={3} />
                    </Form.Group>
                </Form>
                <NavLink to='/home'>
                    <button className="btn btn-success">Submit</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Contact;