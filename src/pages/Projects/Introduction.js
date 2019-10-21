import React from 'react';
import {
  Container,
  Header,
} from 'semantic-ui-react';

/**
 * Container Style
 *
 * Main container wrapper style
 */
const containerStyle = {
  marginBottom: '5rem',
};

/**
 * P Style
 *
 * Styling for paragraph
 */
const pStyle = {
  fontSize: '1.5rem',
  textAlign: 'center',
};

/**
 * Introduction Component
 *
 * A quick introduction to the Project's page. Contains
 * header and summary.
 */
export default function () {
  return (
    <Container style={containerStyle}>
      <Header as='h1' textAlign='center'>Projects</Header>
      <p style={pStyle}>In my short time as a web developer, I've made various applications.
      Whether it was a dynamic full-stack website, a mobile app, or a static,
      one page application, I have demonstrated each skill set listed in the
      previous page in many of my projects.</p>
    </Container>
  );
}