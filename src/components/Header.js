import React from 'react';
import {
  Container,
  Header,
  Icon
} from 'semantic-ui-react';
import headshot from '../assets/images/headshot.png';

/**
 * Header Container Style
 * 
 * Styles the parent container of the Header component.
 */
const headerContainer = {
  width: '100vw',
  minHeight: '30px',
  background: 'rgba(0, 0, 0, 0)',
  textAlign: 'center',
  paddingTop: '1rem',
}

/**
 * img Style
 * 
 * Sizes and shapes image in a circle.
 * This actually styles a <div> container instead of 
 * an <img> to maintain image ratio.
 */
const imgStyle = {
  height: '80px',
  width: '80px',
  backgroundImage: `url(${headshot})`,
  backgroundSize: 'cover',
  margin: 'auto',
  fontSize: '16px',
  borderRadius: '50%'
}

/**
 * Header functional component
 * 
 * Informational header of portfolio. 
 * NOTE: Navbar is not apart of the header.
 */
export default function () {
  return (
    <Container style={headerContainer}>
      <Header as='h1' inverted>James Pham</Header>
      <div style={imgStyle}></div>
      <Header as='h2' inverted>Web Developer</Header>
      <Header as='h4' inverted><Icon name='mail' /> Email: jamespham93@yahoo.com</Header>
    </Container>
  );
}