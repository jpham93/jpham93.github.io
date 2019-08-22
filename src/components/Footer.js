import React from 'react';
import {
  Header
} from 'semantic-ui-react';

const footerStyle = {
  width: '100vw',
  minHeight: '30px',
  background: '#555',
  position: 'absolute',
  bottom: '0',
  textAlign: 'center',
  padding: '10px',
};

export default function () {
  return (
    <footer style={footerStyle}>
      <Header as='h4' inverted>
        Copyright &copy; 2019 James Pham
      </Header>
    </footer>
  );
}