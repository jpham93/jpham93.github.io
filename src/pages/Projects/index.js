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

/**
 * Projects Page component
 * 
 * Contains all of the projects as components within this
 * page with summary and external links.
 */
export default function () {
  return (
    <Container>
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