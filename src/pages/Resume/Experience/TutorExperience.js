import React, {useState} from 'react';
import {
  Card,
  Icon,
  Container,
  Header,
  Responsive
} from "semantic-ui-react";
import de_anza_logo from "../../../assets/images/de_anza_college_logo.svg";

const containerStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '1em',
};

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

export default function () {
  const [isOpen, setOpen] = useState(false);

  return (
    <Container style={containerStyle}>
      <Responsive {...Responsive.onlyComputer}>
        <img src={de_anza_logo} style={imgStyle}/>
      </Responsive>
      <div style={divStyle}>
        <Card style={cardStyle}>
          <Card.Content>
            <Header as='h2' style={{color: 'var(--lightShade)'}}>
              De Anza College
              <Responsive {...Responsive.onlyTablet} style={{display: 'inline'}}>
                <img src={de_anza_logo} style={headerLogoStyle}/>
              </Responsive>
            </Header>
            <Header as='h3' style={{color: 'var(--lightShade)'}}>Computer Lab Volunteer Tutor</Header>
            <p style={{fontSize:'1.2em'}}>During my return to education, I strengthened my knowledge by giving back and helping other students in
              programming courses at De Anza. I helped students with courses in C++, Python, and Linux.</p>
          </Card.Content>
        </Card>
      </div>
    </Container>
  );
}
