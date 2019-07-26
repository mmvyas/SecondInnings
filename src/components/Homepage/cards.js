import React from 'react';
import './cards.css'
import { Row, CardDeck, Button } from 'react-bootstrap';
import OneCard from './card/onecard'
import Aux from '../../hoc/Auxiliary'

const cards = props => {

  return (
    <Aux>
      <Row>
        <h2></h2>
        </Row>
      <Row className="Row"><CardDeck default collapseOnSelect>

        <OneCard className="one"
          img='/assets/card1.jpg'
          title="News on 489 Visa"
          text='See how latest development on skilled regional visa class 489 affects you. If you are an International student, you are in for a big surprize'
          link = '/introduction/visa'
  />

        <OneCard className="two"
          img='/assets/card2.jpg'
          title="Why Regional Victoria?"
          text='Concerned about your getting job, safety, education, living cost? Let us help you move to a new life, a new home in Regional Victoria'
          link = '/introduction/advantage'
        />
        <OneCard className="three"
          img='/assets/card3.jpg'
          title="Fun Weekend Activities"
          text='See what recreational activities you can do in Regional Victoria, Enjoy life with sports, local events and at the same time a relaxed lifestyle'
          link = '/introduction/activity'
        />

       

      </CardDeck>
      </Row>
    </Aux>

  )

}

export default cards;