import React from 'react'
import '../styles/tour-details.css'
import {Container,Row,Col,Form,ListGroup} from "reactstrap"
import {useParams} from 'react-router-dom'
import tourData from '../assets/data/tours'
const TourDetails = () => {
    const {id} =useParams();

    // later use backend  
    const tour=tourData.find(tour=>tour.id===id)

    const {photo,title,desc,price,reviews,city,distance,maxGroupSize}=tour

  return (
    <>
      <Container>
        <Row>
          <Col lg='8'>
            <div className="tour__content">
              <img src="" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default TourDetails