import React from 'react';
import {
  Button,
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
  height: '30px',
  width: 'auto',
  margin: '1px'
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
      <div style={{marginBottom: '5px'}}>
        {stackList.map((stack, key) => (<img src={brand_logos[stack]} style={brandStyle} key={key}/>))}
      </div>
      <Button.Group>
        {
          links.map((link, key) =>
            <Button
              content={link.content}
              icon={link.icon}
              onClick={() => window.open(link.url)}
              color={link.color}
              key={key}
              disabled={link.disabled}
              onClick={() => window.open(link.url)}
            />
          )
        }
      </Button.Group>
    </Container>
  );
}