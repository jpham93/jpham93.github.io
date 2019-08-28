import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  Footer,
  Navbar,
  Header,
} from './components';
import {
  Resume,
  Projects,
  About,
  Contact
} from './pages';
import {
  Sticky,
} from 'semantic-ui-react';

const mainStyle = {
  'background': '#333945',
  'color': '#ffffff'
};

function App() {
  return (

    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div style={mainStyle}>
        <Header />
        <Sticky offset={0}>
          <Navbar />
        </Sticky>
        <Switch>
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route exact path='/' component={Resume} />
        </Switch>
        <Footer attached='bottom' />
      </div>
    </BrowserRouter>
  );
}

export default App;
