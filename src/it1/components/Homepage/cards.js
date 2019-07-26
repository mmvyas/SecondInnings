import React from 'react';
import './cards.css'
import { Row, CardDeck, Button } from 'react-bootstrap';
import OneCard from './card/onecard'
import Aux from '../../hoc/Auxiliary'

const cards = props => {

  return (
    <Aux>
      <Row>
        <h2>Great in so many ways</h2>
        </Row>
      <Row><CardDeck>

        <OneCard classname="one"
          img='/assets/visa.jpg'
          title="Visa Policy"
          text='Click here for the latest information of skilled migration policy moving to regional area.'
          link = '/introduction/visa'
  />

        <OneCard classname="two"
          img='/assets/activities.jpg'
          title="Activities"
          text='Click here for the  information activities you can do in regional Victoria.'
          link = '/introduction/activity'
        />

        <OneCard classname="three"
          img='/assets/advantage.jpg'
          title="Advantages"
          text='Click here for the latest information of more advantages moving to regional Victoria.'
          link = '/introduction/advantage'
        />

      </CardDeck>
      </Row>
    </Aux>

  )

}

export default cards;