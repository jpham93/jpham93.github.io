import React from 'react';
import {
  Card,
  Container,
  Header,
  Responsive
} from "semantic-ui-react";
import de_anza_logo from "../../../assets/images/de_anza_college_logo.svg";

/**
 * Container Style for Component
 *
 * @type {{display: string, marginBottom: string, justifyContent: string}}
 */
const containerStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '1em',
};

/**
 * Wrapper Style for card
 *
 * @type {{width: string, maxWidth: string}}
 */
const divStyle = {
  maxWidth: '750px',
  width: '100%',
};

const cardStyle = {
  width: '100%',
  background: 'var(--mainBrand)',
  color: 'var(--lightShade)',
  padding: '10px',
  paddingBottom: '20px',
  border: 'none',
  borderRadius: '10px',
  boxShadow: 'none',
};

/**
 * Computer Logo Style
 *
 * @type {{marginRight: string, width: string, marginTop: string, height: string}}
 */
const imgStyle = {
  marginTop: '55px',
  marginRight: '10px',
  height: '100px',
  width: 'auto',
};

/**
 * Header logo Style
 *
 * logo for card header Only available in
 */
const headerLogoStyle = {
  height: '40px',
  width: 'auto',
  padding: '5px',
  background: 'var(--lightShade)',
  borderRadius: '5px',
  boxShadow: '0 0 1px 2px',
  marginLeft: '10px',
  marginBottom: '5px',
};

/**
 * TutorExperience component
 */
export default function () {
  return (
    <Container style={containerStyle}>
      <Responsive {...Responsive.onlyComputer}>
        <img src={de_anza_logo} style={imgStyle} alt='De Anza Logo'/>
      </Responsive>
      <div style={divStyle}>
        <Card style={cardStyle}>
          <Card.Content>
            <Header as='h2' style={{color: 'var(--lightShade)'}}>
              De Anza College
              <Responsive {...Responsive.onlyTablet} style={{display: 'inline'}}>
                <img src={de_anza_logo} style={headerLogoStyle} alt='De Anza Logo'/>
              </Responsive>
            </Header>
            <Header as='h3' style={{color: 'var(--lightShade)'}}>Computer Lab Volunteer Tutor</Header>
            <p style={{fontSize:'1.2em'}}>During my return to education, I strengthened my programming knowledge by
              giving back and helping other students in programming courses at De Anza. I helped students with courses
              in C++, Python, and Linux.</p>
          </Card.Content>
        </Card>
      </div>
    </Container>
  );
}
