import React from 'react';
import {
  Container,
  Header,
  Icon,
} from 'semantic-ui-react';
import VtaExperience from './VtaExperience';
import HackathonExperience from './HackathonExperience';
import TutorExperience from './TutorExperience'
import './experience.css'

/**
 * Experience container styling
 *
 * adds top and bottom spacing of the experience container.
 */
const experienceContainer = {
  padding: '20px 0',
};

/**
 * Experience functional component
 *
 * Holds all of my computer science experience in the form of
 * Containers nested in Grid.Rows with headers labeling each sub-section
 */
export default function () {
  return (
    <Container fluid style={experienceContainer} id='experience-container'>
      <Header as='h2'>
        <Icon name='briefcase' style={{textIndent: '0.5em'}}/>
        <Header.Content>Experience</Header.Content>
      </Header>
      <VtaExperience />
      <TutorExperience />
      <HackathonExperience />
    </Container>
  );
}
