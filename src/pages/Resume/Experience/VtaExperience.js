import React, {useState} from 'react';
import {
  Card,
  Icon,
  Container,
  Header,
  Responsive,
  Transition
} from "semantic-ui-react";
import vta_logo from "../../../assets/images/vta_logo_2017.svg";
import devops_handbook from "../../../assets/images/devops_handbook.png";
import './experience.css';

const containerStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
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

/**
 * logo Style
 *
 * Readjusts the size of the Vta Logo
 * to match the card size.
 */
const logoStyle = {
  marginTop: '40px',
  marginLeft: '10px',
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
  marginBottom: '5px'
};

/**
 * img style (DevOps Handbook)
 *
 * centers and sizes the image of the DevOps hand books
 */
const imgStyle = {
  width: '200px',
  height: 'auto',
  margin: 'auto',
  display: 'block',
};

/**
 * VtaExperience Component
 *
 * A card component that shares my internship experience at VTA
 */
export default function () {
  const [isOpen, setOpen] = useState(false);

  return (
    <Container style={containerStyle}>
      <div style={divStyle}>
        <Card style={cardStyle}>
          <Card.Content>
            <Header as='h2' style={{color: 'var(--lightShade)'}}>
              VTA Internship
              <Responsive {...Responsive.onlyTablet} style={{display: 'inline'}}>
                <img src={vta_logo} style={headerLogoStyle}/>
              </Responsive>
            </Header>
            <p style={{fontSize: '1.2em'}}>I am a full stack web developer intern. Here, I learn from
              a Senior Full Stack Engineer and a Senior DevOps Engineer. My daily work
              includes developing new features, providing code reviews, and
              participating in daily stand ups.</p>
          </Card.Content>
          <a onClick={() => setOpen(!isOpen)} style={{color:'var(--lightAccent)'}}>
            {
              !isOpen ?
                <> <Icon name='chevron down'/> Details </> :
                <> <Icon name='chevron up'/> Close </>
            }
          </a>
        </Card>
        <Transition.Group animation={'slide down'} duration={500}>
          {
            isOpen &&
            <div>
              <Header as='h3' style={{color: 'var(--darkAccent)'}}>Feedback Application</Header>
              <p>
                VTA is currently developing a mobile application to help customers
                provide feedback to our organization. Because
                this application is being built internally, I participated in its Software Development Life Cycle (SLDC).
                My involvement in the development process includes:
              </p>
              <ul>
                <li>
                  Creating work packages for our application's road map by logging
                  Agile Epics, Stories, Features, and Tasks for the DevOps team to complete.
                </li>
                <li>Producing code replicas of mock ups to stakeholders' specifications.</li>
                <li>Communicating face to face with our stakeholders</li>
                <li>
                  Following Github's Pull Request work flow when committing code to a new branch.
                </li>
                <li>
                  Using and testing with a local Elasticsearch Index to plan and
                  transform JSON formatted data to Elastic search documentation.
                </li>
              </ul>
              <Header as='h3' style={{color: 'var(--darkAccent)'}}>Participating in Workshops</Header>
              <p>VTA sponsors many activities that value ongoing education to
                strengthen, retool, and ensure that we are lifelong learners. I was fortunate to experience
                both internal and external workshops in my internship.</p>
              <ul>
                <li>Attended MuleSoft's workshop and created APIs using their Anypoint Platform.</li>
                <li>Received hands-on professional training for Elastic's tools as part of their 2019 world tour.</li>
                <li>Participated in our internal teams Technology Learning Series (TLS) and
                  learned about Wordpress, Agile Methodolgies, etc. – I
                  later used the gained knowledge from Wordpress to create a
                  landing page for my mom's business!
                </li>
              </ul>
              <Header as='h3' style={{color: 'var(--darkAccent)'}}>Books</Header>
              <p>As a supplement to my internship, I also read <em>The DevOps Handbook: How to Create World-Class
                Agility, Reliability, & Security in Technology Organization</em></p>
              <img style={imgStyle} src={devops_handbook} alt='The DevOps Handbook Cover'/>
            </div>
          }
        </Transition.Group>
      </div>
      <Responsive {...Responsive.onlyComputer}>
        <img src={vta_logo} style={logoStyle}/>
      </Responsive>
    </Container>
  );
}
