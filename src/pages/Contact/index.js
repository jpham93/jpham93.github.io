import React from 'react';
import {
  Container,
  Header,
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
}

export default function () {
  const links = [
    {url: 'https://linkedin.com/in/james-pham-0293', img: linkedin},
    {url: 'https://github.com/jpham93', img: github,},
    {url: 'https://codepen.io/jamespham93', img: codepen},
    {url: 'https://angel.co/jamespham93', img: angel},
    {url: 'https://www.upwork.com/o/profiles/users/_~014a28d75d6c34fcd6/', img: upwork}
  ];

  return (
    <Container fluid>
      <Container style={contactContainer}>
        <Header as='h1' textAlign='center'>Contact</Header>
        <p style={{fontSize: '1.2em'}}>
          If you would like to contact me, my email is provided in header above
          the menu. You can also email using the form below if you prefer to do
          it from this web page. If you would like to set up a phone call or
          Video chat, please email a request with your contact information.
          Thank you!
        </p>
        <Container style={logoContainer}>
          {
            links.map((link, key) => (
              <a href={link.url} target='_blank' key={key}>
                <img src={link.img} className='logo'/>
              </a>
            ))
          }
        </Container>
        <EmailForm/>
      </Container>
    </Container>
  );
}
