import React from 'react';
import {
  Container,
  Header,
  Icon,
} from 'semantic-ui-react';

/**
 * Objective Container
 * 
 * Styling for parent container of component
 */
const objectiveContainer = {
  padding: '20px 0',
  textAlign: 'center',
  margin: '0 auto 5em auto'
};

/**
 * p Style
 * 
 * Styling paragraph (content) within component.
 */
const paragraphStyle = {
  maxWidth: '640px',
  fontSize: '1.5rem',
  margin: 'auto'
};

/**
 * Objective functional Component
 * 
 * Mission Statement as a webdeveloper
 */
export default function () {
  return (
    <Container style={objectiveContainer} fluid>
      <Header as='h2' icon textAlign='center'>
        <Icon name='check square outline' />
        <Header.Content>Objective</Header.Content>
      </Header>
      <Container>
        <p style={paragraphStyle}>
          My goal is to develop cutting edge web and mobile apps using the latest technologies. I focus primarily on front-end development, but I also have real experience developing back-end applications as well!
      </p>
      </Container>
    </Container>
  );
}
