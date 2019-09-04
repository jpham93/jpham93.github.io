import React from 'react';
import {
  Container,
  Header,
  Grid,
  Button
} from 'semantic-ui-react';

export default function () {
  return (
    <Container fluid>
      <Header inverted as='h3'>YelpCamp</Header>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={12}>
            <p>YelpCamp is a full-stack web application that emphasizes user
            authentication and full CRUD operations a database. This project
            came from a code-along tutorial from a Udemy course as a final
            project. The intricacies of this project showed me the logic and processes behind an entire web page.</p>
            <p>The application runs on Node/Express and renders server side. The view runs on EJS (Embeded JavaScript). Other notable tools include Passport for encryption and authentication, MongoDB hosted by Mongo Atlas, and Heroku for hosting.</p>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header inverted as='h5'>Tech:</Header>
            <ul>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>EJS</li>
              <li>Passport</li>
              <li>Heroku</li>
            </ul>
            <Header inverted as='h5'>Links:</Header>
            <Button.Group>
              <Button icon='github' content='Code' />
              <Button icon='desktop' content='Demo' />
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}