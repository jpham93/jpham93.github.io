import React from 'react';
import {
  Container,
  Header,
  Icon,
  Grid
} from 'semantic-ui-react';
import headshot from '../../assets/images/headshot.png';

/**
 * Header Container Style
 * 
 * Styles the parent container of the Header component.
 */
const introContainer = {
  minHeight: '30px',
  textAlign: 'center',
  paddingTop: '1rem',
  minHeight: '170px',
}

/**
 * img Style
 * 
 * Sizes and shapes image in a circle.
 * This actually styles a <div> container instead of 
 * an <img> to maintain image ratio.
 */
const imgStyle = {
  height: '160px',
  width: '160px',
  backgroundImage: `url(${headshot})`,
  backgroundSize: 'cover',
  margin: 'auto',
  borderRadius: '50%',
  float: 'right',
}

const introTextStyle = {
  fontSize: '4em !important',
  paddingLeft: '40px',
  clear: 'right',
}

const nameStyle = {
  fontSize: '2rem'
}

export default function () {
  return (
    <Container style={introContainer}>
      <Container style={introTextStyle}>
        <Header as='h1'>Hi!</Header>
        <Header as='h2'>My Name is <span style={nameStyle}>James Pham</span></Header>
        <Header as='h3'>I am a Junior Full Stack Web Developer.</Header>
      </Container>
      <div style={imgStyle}></div>
    </Container>
  );
}