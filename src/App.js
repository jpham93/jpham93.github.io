import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
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

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div style={mainStyle}>
        <Navbar/>
        <ScrollUpButton style={scrollUpBtnStyle}/>
        <Switch>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/' component={Resume}/>
          <Route path='*' component={NotFound}/>
        </Switch>
        <Footer attached='bottom'/>
      </div>
    </BrowserRouter>
  );
}

export default App;
