import React from 'react';
import {
  Container,
  Header,
  Icon,
} from 'semantic-ui-react';
import VtaExperience from './VtaExperience';
import HackathonExperience from './HackathonExperience';
import TutorExperience from './TutorExperience'

/**
 * "Experience" Container
 * Parent Container for the entire functional component
 */
const experienceContainer = {
  padding: '20px 0',
  marginBottom: '4em',
};

/**
 * Experience functional component
 *
 * Holds all of my computer science experience in the form of
 * Containers nested in Grid.Rows with headers labeling each sub-section
 */
export default function () {
  return (
    <Container fluid style={experienceContainer}>
      <Header as='h2' textAlign='center'>
        <Icon name='briefcase'/>
        <Header.Content>Experience</Header.Content>
      </Header>
      <VtaExperience />
      <TutorExperience />
      <HackathonExperience />
    </Container>
  );
}
