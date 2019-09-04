import React from 'react';
import {
  Container,
  Button,
  Header,
  Grid,
} from 'semantic-ui-react';

/**
 * FCC functional component
 * 
 * A collection of FreeCodeCamp projects.
 * Only Front-end Libraries + D3.js projects
 */
export default function () {
  return (
    <Container>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={12}>
            <Header inverted as='h3'>FCC Mini Projects Collection</Header>
            <p>This is an archive of my first development projects. Although all of these projects are one page Applications, they highlight the development of skills from the beginning.</p>
            <p>The first portion of my collection covers Front-end Libraries. I used mainly React to make theses applications, but I also used jQuery, Sass, Bootstrap, and Material Design.</p>
            <p>My second collection of FCC Projects entailed of data visualization using the D3 library and AJAX for API calls. Here I demonstrate how to create dynamic graphics using FCC (and in one case, Federal BEA) provided data.</p>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header inverted as='h5'>Tech:</Header>
            <ul>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Material Design</li>
              <li>D3</li>
              <li>AJAX</li>
              <li>Sass</li>
              <li>jQuery</li>
            </ul>
            <Header inverted as='h5'>Links (Projects are hosted on Codepen):</Header>
            <Button.Group>
              <Button icon='codepen' content='D3 Collection' />
              <Button icon='codepen' content='Front-end Collection' />
            </Button.Group>
            <Header inverted as='h5'>All Projects are documented on my Github profile</Header>
            <Button icon='github' content='Code' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}