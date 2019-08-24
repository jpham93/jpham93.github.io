import React from 'react';
import {
  Container,
  Header,
  Icon,
  Card,
} from 'semantic-ui-react';

const technicalContainer = {
  padding: '20px',
}

export default function () {
  const personalStack = {
    header: 'My Personal/Preferred Stack',
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
      <Card raised key={key}>
        <Card.Content>
          <Card.Header>{card.header}</Card.Header>
        </Card.Content>
        <Card.Content>
          <ul>
            {card.skills.map(skill => {
              key++;
              return (<li style={{ color: 'black' }} key={key}>{skill}</li>)
            })}
          </ul>
        </Card.Content>
      </Card>
    );
  });

  return (
    <Container fluid style={technicalContainer}>
      <Header as='h2' textAlign='center' inverted>
        <Icon name='database' />
        <Header.Content>Technical Skills</Header.Content>
      </Header>
      <Card.Group itemsPerRow={1}>
        {cards}
      </Card.Group>
    </Container>
  );
}