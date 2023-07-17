import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftNav from '../LeftNav/LeftNav';
import { AuthContext } from '../../../Context/authProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { Button, Image } from 'react-bootstrap';



const Header = () => {

  const {user,logOut}=useContext(AuthContext)

  const handleLogOut=()=>
  {
    logOut()
    .then(()=>
      {

      })
    .catch(error=>
      {

      })  
  }

    return (
        <Navbar collapseOnSelect expand="lg" bg='light' variant='light'className="bg-body-tertiary mb-4">
        <Container>
          <Navbar.Brand><Link to='/'>News-Portal</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            
          
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
              
              </Nav.Link>
            </Nav>
            <Nav.Link href="#deets"> 
            {
              user?.uid ? 
              <div className='d-flex ms-2'>
              <Link style={{textDecoration:'none'}} to='/profile'><span>{user?.displayName}</span></Link>
              <Link to='/profile'><Image className='ms-2' style={{height:'30px'}} roundedCircle src={user.photoURL}></Image> </Link>
              <Nav.Link><Link onClick={handleLogOut} className='ms-2' style={{textDecoration:'none'}}>Log out</Link></Nav.Link>             
             </div>
              :
              <div className='d-flex ms-2'>
              <Nav.Link><Link style={{textDecoration:'none'}}  className='me-2' to ={'/registration'}>Register</Link></Nav.Link>
              <Nav.Link><Link style={{textDecoration:'none'}} to ={'/login'}>Login</Link></Nav.Link>
              <Nav.Link><FaUser className='ms-2 align-content-center'></FaUser></Nav.Link>
               </div>
            }
            {
            }
            </Nav.Link>

            <div className='d-lg-none'>
            <LeftNav></LeftNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;