import React, {useState, useEffect, Component} from 'react';
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
import {project_logos} from './logos';
import ModalTemplate from './Modal'

/**
 * Projects Container Style
 *
 * Main style for the whole page wrapper
 */
const projectsContainerStyle = {
  padding: 'var(--verticalPadding)',
  minHeight: 'calc(100vh - 58px)',
};

/**
 * Grid Styles
 *
 * change display/layout for Grid system to hug
 * elements close to each other using flex
 */
const gridStyle = {
  alignItems: 'center',
};

/**
 * Cards Styling
 *
 * Individual styling for each card component
 */
const cardStyle = {
  width: '60%',
  minWidth: '280px',
  height: 'auto',
  margin: 'auto',
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
};

/**
 * Modal Styling
 *
 */
const modalStyle = {
  padding: '20px',
};

/**
 * close button Styling
 */
const buttonStyle = {
  position: 'absolute',
  right: '20px',
  bottom: '20px'
};

// list of exported objects to be injected into template and viewed as a modal.
const projectComponents = [
  {
    component: Feedback,
    img: project_logos.vta,
    title: 'VTA Feedback App'
  },
  {
    component: Pomodoro,
    img: project_logos.pomodoro,
    title: 'iOS Pomodoro Clock'
  },
  {
    component: MHNLanding,
    img: project_logos.mhn,
    title: 'Magic Hair & Nails Landing Page'
  },
  {
    component: YelpCamp,
    img: project_logos.yelp_camp,
    title: 'Yelp Camp'
  },
  {
    component: Portfolio,
    img: project_logos.jp,
    title: 'My Web Portfolio'
  },
  {
    component: FCC,
    img: project_logos.fcc,
    title: 'Free Code Camp Collections'
  }
];

/**
 * Projects Page component
 *
 * Contains all of the projects as components within this
 * page with summary and external links.
 */
export default class extends Component {
  state = {openKey: -1}

  setOpen = (val) => {this.setState({openKey: val}); console.log(this.state.openKey);}

  render() {
    return (
      <Container style={projectsContainerStyle}>
        <Introduction/>
        <Grid columns={3} doubling style={gridStyle} stackable>
          {
            projectComponents.map((component, key) => {
              return (
                <Grid.Column key={key}>
                  <Card onClick={() => this.setOpen(key)} style={cardStyle} className='card-styling'>
                    <Reveal animated='move'>
                      <Reveal.Content visible style={visibleStyle}>
                        <img src={component.img} style={imgStyle}/>
                      </Reveal.Content>
                      <Reveal.Content hidden style={hiddenStyle}>
                      <span style={{fontSize: '34px'}}>Read More <Icon
                        name='arrow alternate circle right outline'/></span>
                      </Reveal.Content>
                    </Reveal>
                    {/*Had to assign key to open in order to have the correct modal pop up*/}
                    <Modal
                      dimmer
                      open={this.state.openKey === key}
                      closeIcon
                      onClose={() => this.setOpen(-1)}
                      style={modalStyle}
                    >
                      {ModalTemplate(component.component)}
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
}