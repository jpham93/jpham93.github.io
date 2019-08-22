import React from 'react';
import {
  Container,
  Header,
  Icon
} from 'semantic-ui-react'

const headerContainer = {
  width: '100vw',
  minHeight: '30px',
  background: 'rgba(0, 0, 0, 0)',
  textAlign: 'center',
}

export default function () {
  return (
    <Container style={headerContainer}>
      <Header as='h1' inverted>James Pham</Header>
      <Header as='h2' inverted>Web Developer</Header>
      <Header as='h4' inverted><Icon name='mail' /> Email: jamespham93@yahoo.com</Header>
    </Container>
  );
}