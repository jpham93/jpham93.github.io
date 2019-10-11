import React from 'react';
import {
  Header
} from 'semantic-ui-react';

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
 * Footer Functional Component
 * 
 * Simple footer that displays copyright information.
 */
export default function () {
  return (
    <footer style={footerStyle}>
      <Header as='h4' inverted>
        Copyright &copy; 2019 James Pham
      </Header>
    </footer>
  );
}
