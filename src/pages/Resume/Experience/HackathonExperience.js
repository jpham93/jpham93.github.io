import React, {useState} from 'react';
import {
  Card,
  Icon,
  Container, Header,
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

let cardStyle = {
  width: '100%',
  background: 'var(--mainBrand)',
  color: 'var(--lightShade)',
  padding: '10px',
  paddingBottom: '20px',
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
              with professional coders and hobbyists at hackathons. I
              enjoyed the pressured filled environment to plan, innovate, and
              execute in a competition-driven but supportive community.</p>
          </Card.Content>
          <a onClick={() => setOpen(!isOpen)} style={{color: 'var(--lightAccent)'}}
          >
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
              <Header as='h3' style={{color: 'var(--darkAccent)'}}>Smallbiz Hackathon</Header>
              <p>My first event, hosted by Inuit, was a significant two-day event at the
                Mountain View Intuit campus. There, I observed teams
                brainstorm, attended workshops of sponsoring companies, and networked
                with seasoned engineers. Here were a few things that I saw or participated in at the event:</p>
              <ul>
                <li>Free API workshops from Google Cloud, TSheets, Quickbooks from Intiut themselves, and Clarifai
                </li>
                <li>Teams using Google Cloud for voice recognition to connect to their TSheets API</li>
                <li>Fast 30 minute huddles about API to application integrations.</li>
                <li>Innovated idea for transforming and re-purposing existing tools into an entirely new product.</li>
              </ul>
              <Header as='h3' style={{color: 'var(--darkAccent)'}}>Contra Costa County Civic Hackathon</Header>
              <p>
                At this point, I was a more seasoned developer and was able to participate with a friend and two
                strangers in this hackathon. Although it was much smaller than the Smallbiz Hackathon, our purpose was
                still regarded with the utmost sincerity to give back to the community. Our topic was to create a
                community calendar to connect Contra Costa County's population with a centralized community calendar.
              </p>
              <ul>
                <li>I made a simple Python web scraper to pull data from Eventbrite to populate our Full Calendar on
                  React.
                </li>
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

