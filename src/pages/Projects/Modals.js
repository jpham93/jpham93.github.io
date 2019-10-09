import React from 'react';
import {
  Container,
  Header,
} from 'semantic-ui-react';

/**
 * Modals Template Component
 *
 * Used to fill in Projects modal while maintaining the same styling
 * across all project presentation.
 *
 * @param title - a string header of the project
 * @param description - a string summary of the project
 * @param stack - array either logos or name of the technology used
 * @param links - array of objects to create buttons linking to related pages
 */
export default function ({title, description, stack, links}) {

  return(
    <Container>
      <Header as='h2'>{title}</Header>
      <p>{description}</p>
      {

      }
    </Container>
  );
}