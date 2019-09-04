import React from 'react';
import {
  Container
} from 'semantic-ui-react';
import Introduction from './Introduction';
import Portfolio from './Portfolio';
import Feedback from './Feedback';
import YelpCamp from './YelpCamp';
import MHNLanding from './MHNLanding';
import Pomodoro from './Pomodoro';
import FCC from './FCC'

const projectsContainer = {
  margin: '2rem 0',
};

/**
 * Projects Page component
 * 
 * Contains all of the projects as components within this
 * page with summary and external links.
 */
export default function () {
  return (
    <Container style={projectsContainer}>
      <Introduction />
      <Portfolio />
      <Feedback />
      <YelpCamp />
      <MHNLanding />
      <Pomodoro />
      <FCC />
    </Container>
  );
}