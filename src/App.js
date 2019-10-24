import React, { Component } from 'react';
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
  Projects,
  About,
  Contact
} from './pages';
import { Loader } from 'semantic-ui-react';

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

class App extends Component {
  state = { loading: true };

  componentDidMount = () => {
    if (this.state.loading)
      this.setState(() => {
        return { loading: false }
      });
  }

  render() {
    const { loading } = this.state;

    return (
      <>
        {
          loading
            ? <Loader active>Loading</Loader>
            : <BrowserRouter basename={process.env.PUBLIC_URL}>
              <div style={mainStyle}>
                <Navbar/>
                <ScrollUpButton style={scrollUpBtnStyle}/>
                <Switch>
                  <Route path='/projects' component={Projects}/>
                  <Route path='/about' component={About}/>
                  <Route path='/contact' component={Contact}/>
                  <Route exact path='/' component={Resume}/>
                  <Route path='*' component={NotFound}/>
                </Switch>
                <Footer attached='bottom'/>
              </div>
            </BrowserRouter>
        }
      </>
    )
      ;
  }
}

export default App;
