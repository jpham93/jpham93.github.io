import React from 'react';
import {
  Header,
  Icon,
  Button,
} from 'semantic-ui-react';
import './Components.css';

/**
 * Footer Styling
 *
 * Styling for footer.
 */
const footerStyle = {
  width: '100%',
  minHeight: 'var(--footerHeight)',
  background: 'var(--mainGradient)',
  textAlign: 'center',
  padding: '10px',
};

/**
 * Links style
 *
 * styles buttons that links to my other profiles
 */
const linkStyle = {
  background: 'rgba(0,0,0,0)',
  fontSize: '30px',
  padding: 0,
  color: 'white'
};

/**
 * Footer Functional Component
 *
 * Simple footer that displays copyright information.
 */
export default function () {
  return (
    <footer style={footerStyle}>
      <div>
        <Button
          icon
          style={linkStyle}
          onClick={() => window.open('https://linkedin.com/in/james-pham-0293')}
          className='links'
        >
          <Icon name='linkedin'/>
        </Button>
        <Button
          icon
          style={linkStyle}
          onClick={() => window.open('https://github.com/jpham93')}
          className='links'
        >
          <Icon name='github'/>
        </Button>
        <Button
          icon
          style={linkStyle}
          onClick={() => window.open('https://codepen.io/jamespham93')}
          className='links'
        >
          <Icon name='codepen'/>
        </Button>
        <Button
          icon
          style={linkStyle}
          onClick={() => window.open('https://angel.co/jamespham93')}
          className='links'
        >
          <Icon name='angellist'/>
        </Button>
      </div>
      <Header as='h4' inverted style={{marginTop: '1rem'}}>
        Copyright &copy; 2019 James Pham
      </Header>
    </footer>
  );
}
