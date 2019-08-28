import React, { createRef } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
  Footer,
  Navbar,
  Header,
} from './components';
import {
  Resume,
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
    <div style={mainStyle}>
      <Header />
      <Sticky offset={0}>
        <Navbar />
      </Sticky>
      <Resume />
      <Footer attached='bottom' />
    </div>
  );
}

export default App;
