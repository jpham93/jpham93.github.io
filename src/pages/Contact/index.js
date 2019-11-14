import React, { useState, useLayoutEffect } from 'react';
import {
  Container, Dimmer,
  Header, Loader,
} from 'semantic-ui-react';
import './contact.css';
import EmailForm from './EmailForm';
import linkedin from '../../assets/brand-logos/linkedin.svg';
import codepen from '../../assets/brand-logos/codepen.svg';
import github from '../../assets/brand-logos/github-2.svg';
import angel from '../../assets/brand-logos/angellist.svg';
import upwork from '../../assets/brand-logos/upwork.svg';

/**
 * Contact Container Style
 *
 * @type {{minHeight: string, padding: string, fontSize: string}}
 */
const contactContainer = {
  fontSize: '1.2rem',
  padding: 'var(--verticalPadding)',
  minHeight: 'calc(100vh - var(--footerHeight))',
};

const logoContainer = {
  maxWidth: '640px !important',
  margin: '2rem auto',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
};

const links = [
  {url: 'https://linkedin.com/in/james-pham-0293', img: linkedin, alt: 'Linkedin'},
  {url: 'https://github.com/jpham93', img: github, alt: 'Github'},
  {url: 'https://codepen.io/jamespham93', img: codepen, alt: 'Codepen'},
  {url: 'https://angel.co/jamespham93', img: angel, alt: 'Angel List'},
  {url: 'https://www.upwork.com/o/profiles/users/_~014a28d75d6c34fcd6/', img: upwork, alt: 'Upwork'}
];

export default function () {
  const [numLoaded, setNumLoaded] = useState(0);

  let currentImg;

  if(links[numLoaded]) {
    currentImg = links[numLoaded].img;
  }

  // Preload images by manually creating new Image objects &
  // adding to numLoaded upon finished loaded images
  useLayoutEffect(() => {
    const image = new Image();
    image.src = currentImg;
    image.onload = () => setNumLoaded(numLoaded + 1);
    return () => null;
  });

  return (
    <Container fluid>
      <Container style={contactContainer}>
        {
          numLoaded === links.length
            ?
            <>
              <Header as='h1' textAlign='center'>Contact</Header>
              < p style={{fontSize: '1.2em'}}>
                If you would like to contact me, send me a message with the contact form below. Or, if you prefer
                another
                method, you can explore my other web profiles with the links below and message me through those
                platforms.
                Thank you!
              </p>
              <Container style={logoContainer}>
                {
                  links.map((link, key) => (
                    <a href={link.url} target='_blank' rel='noopener noreferrer' key={key}>
                      <img src={link.img} alt={link.alt + ' Logo'} className='logo'/>
                    </a>
                  ))
                }
              </Container>
              <EmailForm/>
            </>
            :
            <Dimmer inverted active>
              <Loader inverted>Loading...</Loader>
            </Dimmer>
        }
      </Container>
    </Container>
  );
}
