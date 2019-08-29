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
      <Header inverted as='h3'>Magic Hair & Nails Landing Page</Header>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={12}>
            <p>I always wanted to help my mother with her business, but I never
            had any applicable trade skills until now. Her website has been
            down for many years, and now I thought it to be a good time to give
            her business more exposure.</p>
            <p>Wordpress was brand new to me during the making of this website.
            I picked up certain concepts from
            VTA team's Technology Learning Series, played around with test
            servers creating custom plugins and creating child themes until I
            decided to go ahead and make the web page.</p>
            <p>I created an AWS Lightsail instance with the Wordpress package.
            The theme was supplemented by my own child theme (through some PHP
            wordpress configuration) and theme was styled through custom CSS.
            The site's domain name was obtained through AWS Route 53 for
            easier integration, and the SSL certification was obtained
            through Certbot on the Apache server.
            </p>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header inverted as='h5'>Tech:</Header>
            <ul>
              <li>Wordpess</li>
              <li>PHP</li>
              <li>MySQL</li>
              <li>AWS Lightsail</li>
              <li>AWS Route 53</li>
              <li>Linux</li>
              <li>Apache</li>
              <li>CSS</li>
            </ul>
            <Header inverted as='h5'>Links:</Header>
            <Button icon='desktop' content='Demo' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}