import React from 'react';
import {
  Container,
  Header,
} from 'semantic-ui-react';
import {brand_logos} from "./logos";

/**
 * Brand Styling
 *
 * style for each brand_logo used. Will be grouped together
 */
const brandStyle = {
  display: 'inline-block',
  width: '20px',
  height: 'auto',
};

/**
 * Modals Template Component
 *
 * Used to fill in Projects modal while maintaining the same styling
 * across all project presentation.
 *
 * @param title - a string header of the project
 * @param description - a string summary of the project
 * @param stackList - array either logos or name of the technology used (string)
 * @param links - array of objects to create buttons linking to related pages
 */
export default function ({title, description, stackList, links}) {
  return (
    <Container>
      <Header as='h2'>{title}</Header>
      <p>{description}</p>
      {
        stackList.map(stack => (
          <img src={brand_logos[stack]} style={brandStyle}/>
        ))
      }
    </Container>
  );
}