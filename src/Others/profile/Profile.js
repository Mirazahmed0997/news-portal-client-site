import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/authProvider/AuthProvider';



const Profile = () => {
    const {user}=useContext(AuthContext)
    const [name,setName]= useState(user.displayName)
    const photoURLref =useRef(user.photoURL)

    const handleSubmit=(event)=>
    {
        event.preventDefault();
        console.log(photoURLref.current.value)

    }

    const handleChanged=event=>
    {
        setName(event.target.value)
    }

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control className='text-muted' readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>You Name</Form.Label>
          <Form.Control onChange={handleChanged} defaultValue={name}  text="name" placeholder="name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>photoURL</Form.Label>
          <Form.Control ref={photoURLref} defaultValue={user?.photoURL}  text="name" placeholder="photoURL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
};

export default Profile;