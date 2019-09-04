import React from 'react';
import {
  Container,
  Header,
  Grid,
  Button
} from 'semantic-ui-react';

/**
 * Pomodoro functional component
 * 
 * Covers a remake of Free Code Camp's Pomodoro Clock
 * project.
 */
export default function () {
  return (
    <Container fluid>
      <Header inverted as='h3'>Pomodoro Clock </Header>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={12}>
            <p>Pomodoro Clock was a remake of a previous project that I did for
            Free Code Camp's online course. The older version used React and
            was web based. However, as a educational experiment, I wanted to
            remake the same application using Angular. With the gained Angular
            experience at my internship, I used the Angular framework to create
            a mobile version and I plan to release this version to the Apple
            Store soon.</p>
            <p></p>
            <p></p>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header inverted as='h5'>Tech:</Header>
            <ul>
              <li>Ionic</li>
              <li>Angular</li>
              <li>Sass</li>
              <li>Cordova</li>
              <li>Xcode</li>
              <li>Apple Developer</li>
            </ul>
            <Header inverted as='h5'>Links:</Header>
            <Button icon='desktop' content='Demo' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}