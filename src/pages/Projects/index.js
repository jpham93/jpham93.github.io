import React from 'react';
import {
  Container
} from 'semantic-ui-react';
import Introduction from './Introduction';
import Portfolio from './Portfolio';

/**
 * Projects Page component
 * 
 * Contains all of the projects within this
 * page with summary and external links.
 */
export default function () {
  return (
    <Container>
      <Introduction />
      <Portfolio />
    </Container>
  )
}