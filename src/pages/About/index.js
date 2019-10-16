import React from 'react';
import {
  Container,
  Header,
} from 'semantic-ui-react';

const aboutContainer = {
  fontSize: '1.2rem',
  padding: 'var(--verticalPadding)',
  minHeight: 'calc(100vh - var(--footerHeight))',
};

/**
 * About functional component
 * 
 * A mini autobiography section.
 */
export default function () {
  return (
    <Container style={aboutContainer}>
      <Header as='h1' textAlign='center'>About Me!</Header>
      <p>
        I am a Bay Area Native and still currently live in the area. I own a loving pitbull named Zoe. My hobbies
        include reading fiction, following professional sports, exercise, and martial arts. I've boxed for several
        years now and was formerly an amateur competitor. Brazillian Jiu-Jitsu is also another martial art that I
        recently entered, and I thoroughly enjoy it. In my relaxation time, I watch television, mainly Netflix series.
        Recently, I've entrenched myself in fiction as well, after being inspired to read more novels by large fandoms
        such as the <em>A Song of Ice and Fire</em> universe (better known as Game of Thrones from the television
        series) or more recently, <em>The Expanse</em> series.
      </p>
      <Header style={{color: 'var(--darkAccent)'}} as='h3'>How I Began Coding</Header>
      <p>
        Becoming a web developer was not my original career path.
        Coding was not even in my professional repertoire until early 2017 when I first started to learn Python. I
        entered college as an Economics major as a blind pick of the mill career path. Then, by drawing some
        similarities between sports and physiology, my major changed to a health-related field intending to apply for
        Pharmacy School. But while gaining some work experience as a pharmacy technician, I concluded that becoming a
        Pharmacist was the wrong industry for me as it became nothing more than a job.
      </p>
      <p>
        In January 2017, after observing a few of my friends change careers to
        software engineering and having compelling testimonials, I decided to
        follow suit and give it a try.
      </p>
      <p>
        I first learned how to code on a few tutorial sites such as Codecademy,
        and then EDX. Both were beneficial to me, but for a stronger foundation, I returned to school full time in the
        Fall of 2017. With in-person instruction, I developed abstract concepts better, including grasping
        Object-Oriented Programming, algorithms, and data structures. It was also at school where I had my first
        encounter with HTML and CSS. There, I made my first connections with code and real-world applications. Because
        the concepts were entirely front-end and engaging to me, web development immediately took my center focus. I
        grew passionate and learned every aspect of web development, and to this day, I am still learning web
        development.
      </p>
    </Container>
  );
}
