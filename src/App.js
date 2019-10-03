import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {
  Footer,
  Navbar,
} from './components';
import {
  Resume,
  Projects,
  About,
  Contact
} from './pages';

const mainStyle = {
  'background': 'var(--lightShade)',
};

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div style={mainStyle}>
        <Navbar/>
        <Switch>
          <Route path='/projects' component={Projects}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route exact path='/' component={Resume}/>
        </Switch>
        <Footer attached='bottom'/>
      </div>
    </BrowserRouter>
  );
}

export default App;
