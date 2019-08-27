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
  paddingTop: '1rem',
}

const imgStyle = {
  fontSize: '10px'
}

export default function () {
  return (
    <Container style={headerContainer}>
      <Header as='h1' inverted>James Pham <img src='' alt='Headshot of James Pham' style={imgStyle} /></Header>
      <Header as='h2' inverted>Web Developer</Header>
      <Header as='h4' inverted><Icon name='mail' /> Email: jamespham93@yahoo.com</Header>
    </Container>
  );
}