import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  Footer,
  Navbar,
  NotFound
} from './components';
import {
  Resume,
  About,
  Projects,
  Contact,
} from './pages';

/**
 * main style
 *
 * Style for the entire web page
 */
const mainStyle = {
  background: 'var(--lightShade)',
};

/**
 * scroll up button style
 *
 * style scroll up button
 */
const scrollUpBtnStyle = {
  background: 'rgba(0, 0, 0, 0)',
  zIndex: '99',
};

/**
 * MainWrapper Component
 *
 *
 *
 * @param location - prop of the route to identify which class to apply
 */
function MainWrapper({location}) {
  return (
    <div style={mainStyle} classNames='fade-enter fade-enter-active fade-exit fade-exit-active'>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{enter: 300, exit: 300}}
          classNames='fade'
        >
          <Switch>
            <Route exact path='/projects' component={Projects}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/' component={Resume}/>
            <Route path='*' component={NotFound}/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

const Main = withRouter(MainWrapper);

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div style={mainStyle}>
        <Navbar/>
        <Main/>
        <ScrollUpButton style={scrollUpBtnStyle}/>
        <Footer attached='bottom'/>
      </div>
    </BrowserRouter>
  );
}

export default App;
