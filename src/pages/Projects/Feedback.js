import React from 'react';
import {
  Container,
  Header,
  Grid,
} from 'semantic-ui-react';

/**
 * Feedback funcitonal component
 * 
 * Sectional component that goes over my involment in
 * VTA's Feedback App development.
 */
export default function () {
  return (
    <Container fluid>
      <Header inverted as='h3'>VTA Feedback Application</Header>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={12}>
            <p>This is an internal project developed by the software
            development team at VTA. This Progressive Web Application intends
            to help customer provide feedback faster and easier to our
            organization. Quicker and shorter feedback cycles is vital to not
            only the IT departments Agile principles, but to the entire VTA
            organization itself.</p>
            <p>My involvement began during the skeleton phase of the SDLC.
            Since a designer already produced an Invsion mockup of the entire
            application before my arrival, I jumped straight into coding pure
            UI/UX with the senior engineer. That was my first exposure to
            Angular alongside Ionic and therefore, Cordova. This was also my
            first professional workflow with Github where I properly branched
            new features, made Pull Requests, and went through code reviews. We
            have finished the skeleton phase and are now developing
            functionality and backend logic using a symfony server with
            NoSQL database (Elasticsearch).</p>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header inverted as='h5'>Tech:</Header>
            <ul>
              <li>Angular</li>
              <li>Ionic</li>
              <li>PHP</li>
              <li>Font Awesome</li>
              <li>Symfony</li>
              <li>Elastic</li>
              <li>AWS</li>
              <li>Github</li>
            </ul>
            <Header inverted as='h5'>Links:</Header>
            <p>Sorry! Repository is currently private. Will discuss and demo upon request.</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}