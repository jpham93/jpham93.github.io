import React from 'react';
import {
  Container,
} from 'semantic-ui-react';
import Objective from './Objective';
import Technical from './Technical';
import Experience from './Experience';
export default function () {
  return (
    <Container fluid>
      <Objective />
      <Technical />
      <Experience />
    </Container>
  );
}