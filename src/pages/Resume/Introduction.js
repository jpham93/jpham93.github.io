import React, { useState, useLayoutEffect } from 'react';
import {
  Container,
  Header,
  Divider,
  Button,
  Responsive,
  Placeholder
} from 'semantic-ui-react';
import headshot from '../../assets/images/headshot.png';
import './resume.css';

/**
 * Header Container Style
 *
 * Styles the parent container of the Header component.
 */
const introContainer = {
  maxWidth: '950px',
  display: 'flex',
  padding: '5em 0',
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

/**
 * PlacerHolder Style
 *
 * Sets dimensions for headshot placeholder
 */
const placeHolderStyle = {
  width: 200,
  height: 200,
  borderRadius: '50%'
};

export default function () {
  const [imageLoaded, setLoaded] = useState(false);

  const getResume = () => {
    window.open('Resume_JP.pdf');
  };

  const openLinkedin = () => {
    window.open('https://linkedin.com/in/james-pham-0293')
  };

  useLayoutEffect(() => {
    const image = new Image();
    image.src = headshot;
    image.onload = () => setLoaded(true);
  }, [imageLoaded]);

  return (
    <Container style={introContainer}>

      <Container id='intro-text-container'>
        <Header as='h1' style={{fontSize: '0.5em', lineHeight: '20%'}}>Hi!</Header>
        <Header as='h2' style={{fontSize: '0.6em', marginTop: '0'}}>
          My Name is <span style={{fontSize: '1.35em'}}>James Pham</span>
        </Header>
        <Divider/>
        <Header as='h3'>I am a Junior Front-End Web Developer.</Header>
        <div className={'button-wrapper'}>
          <Button id='resume-btn' className={'button-style'} onClick={getResume}>Resume</Button>
        </div>
        <div className={'button-wrapper'}>
          <Button id='linkedin-btn' className={'button-style'} onClick={openLinkedin}>Linkedin</Button>
        </div>
      </Container>

      <Responsive minWidth={768} style={{marginRight: 'auto'}}>
        {
          imageLoaded
            ?
            <div style={imgStyle}/>
            :
            <Placeholder style={placeHolderStyle}>
              <Placeholder.Image/>
            </Placeholder>
        }
      </Responsive>

    </Container>
  );
}
