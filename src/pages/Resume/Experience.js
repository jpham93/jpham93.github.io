import React from 'react';
import {
  Container,
  Icon,
  Header,
  Item,
} from 'semantic-ui-react';
import devops_handbook from '../../assets/images/devops_handbook.png';

/**
 * "Experience" Container
 * Parent Container for the entire functional component
 */
const experienceContainer = {
  background: '#ffffff',
  color: '#000000',
  padding: '20px',
}

/**
 * img Style
 * 
 * Readjusts the size of the DevOps Handbook
 * Proportionally.
 */
const imgStyle = {
  maxHeight: '300px',
  width: 'auto',
}

/**
 * Item Style
 * 
 * adds margin to each specific Item
 */
const itemStyle = {
  margin: '2rem auto',
}

/**
 * Experience functional component
 * 
 * Holds all of my computer science experience in the form of
 * Containers nested in Items with headers labeling each sub-section
 */
export default function () {
  return (
    <Container fluid style={experienceContainer}>
      <Header as='h2' textAlign='center'>
        <Icon name='briefcase' />
        <Header.Content>Experience</Header.Content>
      </Header>
      <Item style={itemStyle}>
        <Container>
          <Header as='h3'>VTA Internship</Header>
          <p>As web developer intern at VTA, I work closely with a Senior
          Full Stack Engineer and a Senior DevOps Engineer. My daily work
          involves coding new features, providing reviews for pull requests, and
          many other industry standard practices. Below are a few examples of
          my direct contributions to the web development team.</p>
          <Header as='h4'>Feedback Application</Header>
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
            through Open Project.</li>
            <li>Coding mockups to consumer specifications defined in Invasion.</li>
            <li>Working and communicating with our stakeholders to </li>
            <li>Executing work packages by creating features and adding to code
            shared repository via Pull Requests.</li>
            <li>Using and testing with local Elasticsearch Index to plan and
            transform JSON formatted data to Elastich search documentation.</li>
          </ul>
          <Header as='h4'>Participating in Workshops</Header>
          <p>VTA sponsors many activies that values ongoing education to
          strengthen, retool, and keep lifelong learners current with the
          latest development technology. I got to experience both internal and
          external workshops in my internship.</p>
          <ul>
            <li>Attended MuleSoft's workshop and created APIs using their Anypoint Platform.</li>
            <li>Attened our internal teams Technology Learning Series (TLS) and
            learned about Wordpress, Agile Methodolgies, etc. – I
            actually used the gained knowledge from Wordpress to create a
            landing page for my mom's business.</li>
          </ul>
          <Header as='h4'>Books</Header>
          <p>As a supplement to my internship, I also read <em>The DevOps Handbook: How to Create World-Class Agility, Reliability, & Security in Technology Organization</em></p>
          <img style={imgStyle} src={devops_handbook} alt='The DevOps Handbook Cover' />
        </Container>
      </Item>
      <Item style={itemStyle}>
        <Container>
          <Header as='h3'>De Anza College</Header>
          <Header as='h4'>Computer Lab Volunteer Tutor</Header>
          <p>During my return to education, I strengthened my knowledge by giving back and helping other students in programming courses at De Anza. I helped students with courses in C++, Python, and Linux.</p>
        </Container>
      </Item>
      <Item style={itemStyle}>
        <Container>
          <Header as='h3'>Hackathons</Header>
          <p>During my early stages of programming, I shadowed and collaborated
          with professional coders and hobbyists in hackathons. I found great
          joy in the pressured filled environment to plan, innovate, and
          execute in a competition driven but supportive environment.</p>
          <Header as='h4'>Smallbiz Hackathon</Header>
          <p>This event, hosted by Inuit, was a large 2 day event at the
          Mountain View Intuit campus. There, I was able to observe teams
          brainstorm, attend workshops of sponsoring companies, and network
          with seasoned engineers. Here were a few things that I observed or participated in at the event:</p>
          <ul>
            <li>Free API workshops from Google Cloud, TSheets, Quickbooks from Intiut themselves, and Clarifai</li>
            <li>Teams using Google Cloud for voice recognition to connect to their TSheets API</li>
          </ul>
          <Header as='h4'>Contra Costa County Civic Hackathon</Header>
          <p>At this point, I was a more seasoned developer and was able to
          participate with my friend two others in this hackathon. Although it
          was much smaller than the Smallbiz Hackathon, our
          purpose was still regarded with the utmost sincerety to give back to
          the community. Our topic was to create a community calendar to
          connect Contra Costa County's community with a centralized community
          calendar.</p>
          <ul>
            <li>I made a simple Python web scraper to pull data from Eventbrite to populate our Full Calendar on React.</li>
            <li>We implemented a server to store our caldendar's events.</li>
            <li>We create a server to store data in a MongoDB cluster. The Node server was stored on an EC2 instance.</li>
            <li>We provided an API to allow outside users to interact the with </li>
          </ul>
        </Container>
      </Item>
    </Container>
  );
}