import React, {useState} from 'react';
import {
  Card,
  Accordion,
  Icon,
  Container,
  Header,
  Responsive
} from "semantic-ui-react";
import vta_logo from "../../../assets/images/vta_logo_2017.svg";
import devops_handbook from "../../../assets/images/devops_handbook.png";

const containerStyle = {
  display: 'flex',
  justifyContent: 'flex-start'
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
 * Accordion.Title style
 *
 * styles "Read More" and places it at the bottom
 * of the card.
 */
const accordionTitleStyle = {
  color: 'var(--lightAccent)',
  position: 'absolute',
  bottom: '0',
};

export default function () {
  const [isOpen, setOpen] = useState(false);

  return (
    <Container style={containerStyle}>
      <div style={divStyle}>
        <Card style={cardStyle}>
          <Card.Content>
            <Header as='h2' style={{color: 'var(--lightShade)'}}>VTA Internship <img src={vta_logo}/></Header>
            <p style={{fontSize: '1.2em'}}>As web developer intern at VTA, I work closely with a Senior
              Full Stack Engineer and a Senior DevOps Engineer. My daily work
              involves coding new features, providing reviews for pull requests, and
              many other industry standard practices.</p>
          </Card.Content>
          <Accordion>
            <Accordion.Title
              active={isOpen}
              onClick={() => setOpen(!isOpen)}
              style={accordionTitleStyle}
            >
              <Icon name='dropdown'/> {isOpen ? 'Close' : 'Read More'}
            </Accordion.Title>
            <Accordion.Content active={isOpen}>
              <Header as='h3' style={{color: 'var(--lightShade)'}}>Feedback Application</Header>
              <p>VTA is developing a progressive web application to enable customers
                tunnel direct feedback to the customer service department. Because
                this application is built internally, I had the pleasure of
                participating in its development cycle from the early planning stages
                to executing code implementations. My involvement in the development
                process includes:
              </p>
              <ul>
                <li>Creating work packages for our application's roadmap using
                  Agile Epics, Stories, Features, and Tasks. Each task was managed
                  through Open Project.
                </li>
                <li>Coding mockups to consumer specifications defined in Invasion.</li>
                <li>Working and communicating with our stakeholders to</li>
                <li>Executing work packages by creating features and adding to code
                  shared repository via Pull Requests.
                </li>
                <li>Using and testing with local Elasticsearch Index to plan and
                  transform JSON formatted data to Elastic search documentation.
                </li>
              </ul>
              <Header as='h3' style={{color: 'var(--lightShade)'}}>Participating in Workshops</Header>
              <p>VTA sponsors many activies that values ongoing education to
                strengthen, retool, and keep lifelong learners current with the
                latest development technology. I got to experience both internal and
                external workshops in my internship.</p>
              <ul>
                <li>Attended MuleSoft's workshop and created APIs using their Anypoint Platform.</li>
                <li>Attened our internal teams Technology Learning Series (TLS) and
                  learned about Wordpress, Agile Methodolgies, etc. – I
                  actually used the gained knowledge from Wordpress to create a
                  landing page for my mom's business.
                </li>
              </ul>
              <Header as='h3' style={{color: 'var(--lightShade)'}}>Books</Header>
              <p>As a supplement to my internship, I also read <em>The DevOps Handbook: How to Create World-Class
                Agility,
                Reliability, & Security in Technology Organization</em></p>
              <img style={imgStyle} src={devops_handbook} alt='The DevOps Handbook Cover'/>
            </Accordion.Content>
          </Accordion>
        </Card>
      </div>
      <Responsive {...Responsive.onlyComputer}>
        <img src={vta_logo} style={logoStyle}/>
      </Responsive>
    </Container>
  );
}
