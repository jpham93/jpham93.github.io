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
  justifyContent: 'flex-end'
};

const divStyle = {
  maxWidth: '750px',
  width: '100%',
};

const cardStyle = {
  width: '100%',
  background: 'var(--mainBrand)',
  color: 'var(--lightShade)',
};

const imgStyle = {
  marginTop: '25px',
  marginRight: '10px',
  height: '100px',
  width: 'auto',
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
            <Header as='h2'>De Anza College <img src={de_anza_logo}/></Header>
            <Header as='h3'>Computer Lab Volunteer Tutor</Header>
            <p>During my return to education, I strengthened my knowledge by giving back and helping other students in
              programming courses at De Anza. I helped students with courses in C++, Python, and Linux.</p>
          </Card.Content>
        </Card>
      </div>
    </Container>
  );
}
