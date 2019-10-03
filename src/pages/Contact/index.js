import React from 'react';
import {
  Container,
  Header,
} from 'semantic-ui-react';
import EmailForm from './EmailForm';

const contactContainer = {
  fontSize: '1.2rem',
  padding: '5rem',
  minHeight: 'calc(100vh - 58px)',
};

export default function () {
  return (
    <Container fluid>
      <Container style={contactContainer}>
        <Header as='h1' textAlign='center' inverted>Contact</Header>
        <p>
          If you would like to contact me, my email is provided in header above
          the menu. You can also email using the form below if you prefer to do
          it from this web page. If you would like to set up a phone call or
          Video chat, please email a request with your contact information.
          Thank you!
        </p>
        <EmailForm />
      </Container>
    </Container>
  );
}
