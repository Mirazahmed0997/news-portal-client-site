import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle,FaGithub ,FaFacebook,FaYoutube,FaTwitter,FaWhatsapp,FaDiscord} from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../../../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../Context/authProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';



const RightNav = () => {

    const {PrviderLogin}=useContext(AuthContext)
    const googleProvider =new GoogleAuthProvider()
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/'

    const handlGoogleSignIn=()=>
    {
        PrviderLogin(googleProvider)
        .then(result=>
            {
                const user=result.user
                console.log(user)
                navigate(from,{replace:true})

            })
        
            .catch(error=>
                {
                    console.error(error)
                })
        
    }

    return (
        <div>
              <ButtonGroup vertical>
                  <Button onClick={handlGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle>Sign in with Google</Button>
                  <Button variant="outline-dark"><FaGithub></FaGithub>Sign in with Github</Button>
             </ButtonGroup>
             <div className='mt-4'>
                <h5>Find us on</h5>
             <ListGroup>
                  <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
                  <ListGroup.Item className='mb-2'><FaYoutube></FaYoutube>YouTube</ListGroup.Item>
                  <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
                  <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp>Whats app</ListGroup.Item>
                  <ListGroup.Item className='mb-2'><FaDiscord></FaDiscord>Discord</ListGroup.Item>
            </ListGroup>

             </div>

             <div>
                <BrandCarousel></BrandCarousel>
             </div>
        </div>
       
    );
};

export default RightNav;