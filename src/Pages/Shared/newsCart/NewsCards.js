import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';




const NewsCards = ({news}) => {
    console.log(news)
    const{_id,title,author,total_view,details,rating,image_url}=news;
    return (
        <Card className='mb-5'>
        <Card.Header className='d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
                 <Col xs={6} md={4}>
                    <Image className='me-2' style={{height:'60px'}} src={author.img} roundedCircle />
                 </Col>
                 <div>
                    <p className='mb-0'>{author.name}</p>
                    <small>{author.published_date}</small>
                 </div>
            </div>
            <div>
                <FaRegBookmark className='me-2'></FaRegBookmark>
                <FaShareAlt></FaShareAlt>
            </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />

          <Card.Text>
                {details.length >200 ?
                <p>{details.slice(0,250) + '...'} <Link to={`/news/${_id}`}>See more</Link></p>
                    : <p>{details}</p>
                }
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
                <div>
                <FaStar className='text-warning me-2'></FaStar>
                <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
        </Card.Footer>
      </Card>
  
    );
};

export default NewsCards;