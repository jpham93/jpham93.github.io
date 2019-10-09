import React from 'react';
import {
  Container,
  Header,
  Divider,
  Button,
  Responsive,
} from 'semantic-ui-react';
import headshot from '../../assets/images/headshot.png';
import './resume.css';

/**
 * Header Container Style
 *
 * Styles the parent container of the Header component.
 */
const introContainer = {
  minWidth: '500px',
  display: 'flex',
  padding: '5em 2em',
  minHeight: '170px',
  justifyContent: 'center'
};

/**
 * img Style
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
  borderRadius: '50%',
  flexShrink: '0',
};

export default function () {
  const getResume = () => {
    window.open('Resume_JP.pdf');
  };

  const openLinkedin = () => {
    window.open('https://linkedin.com/in/james-pham-0293')
  }

  return (
    <Container style={introContainer}>
      <Container id='intro-text-container'>
        <Header as='h1' style={{fontSize: '0.5em', lineHeight: '20%'}}>Hi!</Header>
        <Header as='h2' style={{fontSize: '0.6em', marginTop: '0'}}>My Name is <span
          style={{fontSize: '1.35em'}}>James Pham</span></Header>
        <Divider/>
        <Header as='h3'>I am a Junior Full Stack Web Developer.</Header>
        <div className={'button-wrapper'}>
          <Button id='resume-btn' className={'button-style'} onClick={getResume}>Resume</Button>
        </div>
        <div className={'button-wrapper'}>
          <Button id='linkedin-btn' className={'button-style'} onClick={openLinkedin}>Linkedin</Button>
        </div>
      </Container>
      <Responsive minWidth={768} style={{marginRight: 'auto'}}>
        <div style={imgStyle}/>
      </Responsive>
    </Container>
  );
}
