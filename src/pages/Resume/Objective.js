import React from 'react';
import {
  Container,
  Header,
  Icon,
} from 'semantic-ui-react';

const objectiveContainer = {
  background: '#ffffff',
  color: '#000',
  padding: '20px 0',
  textAlign: 'center',
};
const paragraphStyle = {
  maxWidth: '640px',
  fontSize: '1.5rem',
  margin: 'auto'
}

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