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
  padding: '20px',
};


/**
 * Grid Row Style
 *
 * adds margin to each specific Grid Row
 */
const rowStyle = {};

/**
 * Summary Column
 *
 * column that list the title of the experience + summary
 */
const summaryColumnStyle = {
  fontSize: '1.5em',
  textAlign: 'center',
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
      <VtaExperience/>
      <TutorExperience/>
      <HackathonExperience />
    </Container>
  );
}
