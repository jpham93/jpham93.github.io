import React from 'react';
import {
  Container,
  Header,
  Icon,
  Card,
  Grid,
} from 'semantic-ui-react';

const technicalContainer = {
  padding: '20px',
}
const cardStyle = {
  minWidth: '80%',
  margin: 'auto',
  fontSize: '1.2rem',
  lineHeight: '1.8rem',
  textAlign: 'center'
}

const listStyle = {
  listStyleType: 'none',
  padding: '0',
}

export default function () {
  const personalStack = {
    header: 'My Personal / Preferred Stack',
    skills: ['React.js', 'Redux', 'MongoDB', 'Node', 'Express', 'D3.js']
  };

  const frontEnd = {
    header: 'Front-end Stack at VTA',
    skills: ['Ionic 4', 'Angular 7', 'Cordova', 'Sass', 'Protractor', 'Karma', 'Jasmine', 'Selenium']
  };

  const backEnd = {
    header: 'Back-end Stack at VTA',
    skills: ['PHP 7', 'MySQL', 'Symfony 4', 'Elasticsearch']
  };

  let key = 0;
  const cards = [personalStack, frontEnd, backEnd].map(card => {
    key++;
    return (
      <Grid.Column key={key}>
        <Card raised style={cardStyle}>
          <Card.Content>
            <Card.Header>{card.header}</Card.Header>
          </Card.Content>
          <Card.Content>
            <ul style={listStyle}>
              {card.skills.map(skill => {
                key++;
                return (<li style={{ color: 'black' }} key={key}>{skill}</li>)
              })}
            </ul>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  });

  return (
    <Container fluid style={technicalContainer}>
      <Header as='h2' textAlign='center' inverted>
        <Icon name='database' />
        <Header.Content>Technical Skills</Header.Content>
      </Header>
      <Grid stackable columns={3}>
        {cards}
      </Grid>
    </Container>
  );
}