import React from 'react';
import {
  Container,
  Icon,
  Header,
  Item,
} from 'semantic-ui-react';

const experienceContainer = {
  background: '#ffffff',
  color: '#000000',
  padding: '20px',
}

export default function () {
  return (
    <Container fluid style={experienceContainer}>
      <Header as='h2' textAlign='center'>
        <Icon name='briefcase' />
        <Header.Content>Experience</Header.Content>
      </Header>
      <Item>
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
          <img src='' alt='The DevOps Handbook Cover' />
        </Container>
      </Item>
      <Item>
        <Container>
          <Header as='h3'>De Anza College</Header>
          <Header as='h4'>Computer Lab Volunteer Tutor</Header>
          <p>During my return to education, I strengthened my knowledge by giving back and helping other students in programming courses at De Anza. I helped students with courses in C++</p>
        </Container>
      </Item>
    </Container>
  );
}