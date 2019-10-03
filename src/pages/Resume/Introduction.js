import React from 'react';
import {
  Container,
  Header,
  Divider,
} from 'semantic-ui-react';
import headshot from '../../assets/images/headshot.png';
import './styles.css';

/**
 * Header Container Style
 * 
 * Styles the parent container of the Header component.
 */
const introContainer = {
  display: 'flex',
  padding: '5rem',
  minHeight: '170px',
  justifyContent: 'center'
};

/**
 * imgStyle
 *
 * Sizes and shapes image in a circle.
 * This actually styles a <div> container instead of
 * an <img> to maintain image ratio.
 */
const imgStyle = {
  height: '200px',
  width: '200px',
  backgroundImage: `url(${headshot})`,
  backgroundSize: 'cover',
  margin: 'auto',
  borderRadius: '50%',
  marginLeft: '2em !important',
  flexShrink: '0',
};

export default function () {
  return (
    <Container style={introContainer}>
      <Container id='intro-text-container' >
        <Header as='h1' style={{fontSize:'2.5rem', lineHeight:'50%'}}>Hi!</Header>
        <Header as='h2' style={{fontSize:'3rem'}}>My Name is <span style={{fontSize:'4rem'}}>James Pham</span></Header>
        <Divider/>
        <Header as='h3'>I am a Junior Full Stack Web Developer.</Header>
      </Container>
      <div style={imgStyle} />
    </Container>
  );
}
