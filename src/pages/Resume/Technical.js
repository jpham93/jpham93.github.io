import React from 'react';
import {
  Container,
  Header,
  Icon,
  Card,
  Grid,
} from 'semantic-ui-react';
import './styles.css';

/**
 * Technical Container
 * 
 * Styling for parent container
 */
const technicalContainer = {
  padding: '20px',
};

/**
 * Column Style
 *
 * Centering for each Grid Column
 */
const columnStyle = {
  margin: 'auto',
};

/**
 * List Style
 * 
 * Styling for each ul list inside Card
 */
const listStyle = {
  listStyleType: 'none',
  padding: '0',
  height: '100%',
  width: '100%',
};

/**
 * Card header style
 *
 * styling of each card header
 */
const cardHeaderStyle = {
  color: 'var(--mainBrain)'
};

/**
 * Technical Functional Component
 * 
 * Section of Resume where only technical skills are displayed.
 * Stacks are displayed based on areas of use.
 */
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

  const cards = [personalStack, frontEnd, backEnd].map(card => {
    return (
      <Grid.Column key={card.header} style={columnStyle}>
        <Card raised className='card-style'>
          <Card.Content>
            <Card.Header style={cardHeaderStyle}>{card.header}</Card.Header>
          </Card.Content>
          <Card.Content>
            <ul style={listStyle}>
              {card.skills.map(skill => {
                return (<li className='card-list' key={skill}>{skill}</li>)
              })}
            </ul>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  });

  return (
    <Container fluid style={technicalContainer}>
      <Header as='h2' textAlign='center'>
        <Icon name='database' />
        <Header.Content>Technical Skills</Header.Content>
      </Header>
      <Grid stackable columns={3}>
        {cards}
      </Grid>
    </Container>
  );
}
