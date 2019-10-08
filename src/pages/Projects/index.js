import React, {useState} from 'react';
import {
  Container,
  Grid,
  Modal,
  Card,
  Button,
  Reveal,
} from 'semantic-ui-react';
import Introduction from './Introduction';
import Portfolio from './Portfolio';
import Feedback from './Feedback';
import YelpCamp from './YelpCamp';
import MHNLanding from './MHNLanding';
import Pomodoro from './Pomodoro';
import FCC from './FCC'
import './styles.css';
import vta_logo from '../../assets/images/vta_logo.png';
import ionic_logo from '../../assets/images/ionic_logo.png';
import fcc_logo from '../../assets/images/freecodecamp.png';


const projectsContainerStyle = {
  paddingTop: '5rem',
  minHeight: 'calc(100vh - 58px)',
};

/**
 * Projects Page component
 *
 * Contains all of the projects as components within this
 * page with summary and external links.
 */
export default function () {
  const [openKey, setOpen] = useState(false);

  // list of components exported here to be viewed as a modal.
  const projectComponents = [
    {
      component: <Feedback/>,
      img: vta_logo,
      title: 'VTA Feedback App'
    },
    {
      component: <Pomodoro/>,
      img: '',
      title: 'iOS Pomodoro Clock'
    },
    {
      component: <MHNLanding/>,
      img: '',
      title: 'Magic Hair & Nails Landing Page'
    },
    {
      component: <YelpCamp/>,
      img: '',
      title: 'Yelp Camp'
    },
    {
      component: <Portfolio/>,
      img: '',
      title: 'My Web Portfolio'
    },
    {
      component: <FCC/>,
      img: '',
      title: 'Free Code Camp Collections'
    }
  ];

  return (
    <Container style={projectsContainerStyle}>
      <Introduction/>
      <Grid columns={3} doubling>
        {
          projectComponents.map((component, key) => {
            return (
              <Grid.Column key={key}>
                <Card onClick={() => setOpen(key)}>
                  <Reveal animated='move'>
                    <Reveal.Content visible>
                      {component.title}
                      <img src={component.img}/>
                    </Reveal.Content>
                    <Reveal.Content hidden>
                      Bar
                    </Reveal.Content>
                  </Reveal>
                  {/*Had to assign key to open in order to have the correct modal pop up*/}
                  <Modal dimmer open={openKey === key ? true : false} onClose={() => setOpen(-1)} closeIcon>
                    {component.component}
                    <Button onClick={() => setOpen(-1)}>
                      Close
                    </Button>
                  </Modal>
                </Card>
              </Grid.Column>
            )
          })
        }
      </Grid>
    </Container>
  );
}
