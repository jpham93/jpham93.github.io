import React from 'react';
import {
  Container,
} from 'semantic-ui-react';
import Objective from './Objective';
import Technical from './Technical';
import Experience from './Experience';
import Introduction from './Introduction';

export default function () {
  return (
    <Container fluid className={'container-style'}>
      <Introduction />
      <Objective />
      <Technical />
      <Experience />
    </Container>
  );
}
