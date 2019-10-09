import React, {useState} from 'react';
import {
  Container,
  Grid,
  Modal,
  Card,
  Button,
  Reveal,
  Icon
} from 'semantic-ui-react';
import Introduction from './Introduction';
import Portfolio from './Portfolio';
import Feedback from './Feedback';
import YelpCamp from './YelpCamp';
import MHNLanding from './MHNLanding';
import Pomodoro from './Pomodoro';
import FCC from './FCC'
import './projects.css';
import vta_logo from '../../assets/images/vta_logo.png';
import pomodoro_img from '../../assets/images/pomodoro_app.png';
import fcc_logo from '../../assets/images/freecodecamp.png';
import mhn_logo from '../../assets/images/mhn_logo.png';
import yelp_camp_img from '../../assets/images/yelp_camp_img.png';
import jp_logo from '../../assets/logo/android-chrome-512x512.png'

/**
 * Projects Container Style
 *
 * Main style for the whole page wrapper
 */
const projectsContainerStyle = {
  padding: '6rem 0',
  minHeight: 'calc(100vh - 58px)',
};

/**
 * Cards Styling
 *
 * Individual styling for each card component
 */
const cardStyle = {
  width: '30%',
  minWidth: '300px',
  height: 'auto',
  padding: '5px',
  background: 'var(--darkGradient)',
};

/**
 * Visible Reveal Style
 *
 * styling for the visible portion of Reveal
 */

const visibleStyle = {
  background: 'rgba(0, 0, 0, 0)',
};

/**
 * Hidden Reveal Style
 *
 * styling for the hidden portion for Reveal
 */
const hiddenStyle = {
  background: 'var(--darkGradient)',
  height: '100%',
  width: '100%',
  color: 'var(--lightShade)',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

/**
 * Image Styling
 *
 * img style to be contained and proportional within its container
 */
const imgStyle = {
  width: '100%',
  height: 'auto',
}

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
      img: pomodoro_img,
      title: 'iOS Pomodoro Clock'
    },
    {
      component: <MHNLanding/>,
      img: mhn_logo,
      title: 'Magic Hair & Nails Landing Page'
    },
    {
      component: <YelpCamp/>,
      img: yelp_camp_img,
      title: 'Yelp Camp'
    },
    {
      component: <Portfolio/>,
      img: jp_logo,
      title: 'My Web Portfolio'
    },
    {
      component: <FCC/>,
      img: fcc_logo,
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
                <Card onClick={() => setOpen(key)} style={cardStyle}>
                  <Reveal animated='move'>
                    <Reveal.Content visible style={visibleStyle}>
                      <img src={component.img} style={imgStyle}/>
                    </Reveal.Content>
                    <Reveal.Content hidden style={hiddenStyle}>
                      <span style={{fontSize: '40px'}}>Read More <Icon name='arrow alternate circle right outline'/></span>
                    </Reveal.Content>
                  </Reveal>
                  {/*Had to assign key to open in order to have the correct modal pop up*/}
                  <Modal dimmer open={openKey === key} onClose={() => setOpen(-1)} closeIcon>
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