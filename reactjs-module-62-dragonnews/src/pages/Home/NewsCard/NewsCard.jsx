import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaRegBookmark ,FaShareAlt, FaEye,FaRegStar,FaStar  } from 'react-icons/fa';
import Rating from 'react-rating';
const NewsCard = ({singleCategoryNews}) => {
    const {_id,author,image_url,details,title,total_view,rating}=singleCategoryNews;
    return (
        <div>
            <Card className="">
      <Card.Header className='d-flex align-items-center'>
      <div><Image style={{height:'40px'}} src={author?.img} roundedCircle /></div>
<div className='flex-grow-1 ps-3'>
    <p className='mb-0'>{author ?.name}</p>
    <p className='mb-0'>{author ?.published_date}</p>
</div>
<div>
<FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
</div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length<250 ? <>{details}</> : <>{details.slice(0,250)}...<Link to={`/news/${_id}`}>read more</Link></>}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className='flex-grow-1'>
            <Rating
  placeholderRating={rating ?.number}
  readonly
  emptySymbol={<FaRegStar></FaRegStar>}
  placeholderSymbol={<FaStar className='text-warning'></FaStar>}
  fullSymbol={<FaStar></FaStar>}
/></div>
        <div><FaEye></FaEye> {total_view}</div>
      </Card.Footer>
    </Card>
        </div>
    );
};

export default NewsCard;