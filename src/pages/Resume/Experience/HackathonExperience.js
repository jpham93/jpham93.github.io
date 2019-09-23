import React, {useState} from 'react';
import {
  Card,
  Accordion,
  Icon,
  Container, Header, Grid,
  Responsive, Transition,
} from "semantic-ui-react";

const containerStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  marginBottom: '2em',
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
  border: 'none',
  borderRadius: '10px',
  boxShadow: 'none',
};

const iconStyle = {
  fontSize: '100px',
  display: 'block',
  marginTop: '65px',
  marginLeft: '10px',
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
  color: 'white',
  marginLeft: '10px',
  marginBottom: '5px',
};

export default function () {
  const [isOpen, setOpen] = useState(false);

  return (
    <Container style={containerStyle}>
      <div style={divStyle}>
        <Card style={cardStyle}>
          <Card.Content>
            <Header as='h2' style={{color: 'var(--lightShade)'}}>
              Hackathons
              <Responsive {...Responsive.onlyTablet} style={{display: 'inline'}}>
                <Icon name='laptop' style={headerLogoStyle}/>
              </Responsive>
            </Header>
            <p style={{fontSize: '1.2em'}}>During my early stages of programming, I shadowed and collaborated
              with professional coders and hobbyists in hackathons. I found great
              joy in the pressured filled environment to plan, innovate, and
              execute in a competition driven but supportive environment.</p>
          </Card.Content>
          <Accordion>
            <p
              onClick={() => setOpen(!isOpen)}
              style={{color: 'var(--lightAccent)'}}
            >
              {
                !isOpen ?
                  <> <Icon name='chevron down'/> Details </> :
                  <> <Icon name='chevron up'/> Close </>
              }
            </p>
          </Accordion>
        </Card>
        <Transition.Group animation={'slide down'} duration={500}>
          {
            isOpen &&
            <div>
              <Header as='h3' style={{color: 'var(--darkAccent)'}}>Smallbiz Hackathon</Header>
              <p>This event, hosted by Inuit, was a large 2 day event at the
                Mountain View Intuit campus. There, I was able to observe teams
                brainstorm, attend workshops of sponsoring companies, and network
                with seasoned engineers. Here were a few things that I observed or participated in at the event:</p>
              <ul>
                <li>Free API workshops from Google Cloud, TSheets, Quickbooks from Intiut themselves, and Clarifai
                </li>
                <li>Teams using Google Cloud for voice recognition to connect to their TSheets API</li>
              </ul>
              <Header as='h3' style={{color: 'var(--darkAccent)'}}>Contra Costa County Civic Hackathon</Header>
              <p>At this point, I was a more seasoned developer and was able to
                participate with my friend two others in this hackathon. Although it
                was much smaller than the Smallbiz Hackathon, our
                purpose was still regarded with the utmost sincerity to give back to
                the community. Our topic was to create a community calendar to
                connect Contra Costa County's community with a centralized community
                calendar.</p>
              <ul>
                <li>I made a simple Python web scraper to pull data from Eventbrite to populate our Full Calendar on
                  React.
                </li>
                <li>We implemented a server to store our calendar events.</li>
                <li>We create a server to store data in a MongoDB cluster. The Node server was stored on an EC2
                  instance.
                </li>
                <li>We provided an API to allow outside users to interact the with</li>
              </ul>
            </div>
          }
        </Transition.Group>
      </div>
      <Responsive {...Responsive.onlyComputer}>
        <Icon name='laptop' style={iconStyle}/>
      </Responsive>
    </Container>
  );
}

