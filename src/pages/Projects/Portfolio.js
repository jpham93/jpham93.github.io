import React from 'react';
import {
  Container,
  Header,
  Grid,
  Button,
  Icon,
} from 'semantic-ui-react';

/**
 * Portfoliio functional component
 * 
 * This section covers summary, description, and source code
 * link to this website. 
 */
export default function () {
  return (
    <Container fluid>
      <Header inverted as='h3'>Portfolio Page</Header>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={12}>
            <p>This entire web page is one of my projects itself! However, I
            wanted to highlight it, because this is my first project outside of my internship where I
            applied proper Github workflow. Using knowledge from my VTA
            internship, I documentated the planning and execution through a
            series of Github issues, branches, and pull request.</p>
            <p>This entire project runs on React with a React implemented
            Semantic UI. This project also uses React router to dynamically
            render React components web pages. This project is deployed in two
            places, Github Pages, and an AWS EC2 instance. A link of this
            website's source code can be found in the Github icon.</p>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header inverted as='h5'>Tech:</Header>
            <ul>
              <li>React</li>
              <li>React Router</li>
              <li>Node</li>
              <li>Semantic UI</li>
              <li>AWS EC2 Instance</li>
            </ul>
            <Header inverted as='h5'>Links:</Header>
            <Button icon>
              <Icon name='github' />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}