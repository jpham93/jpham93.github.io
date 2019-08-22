import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
  Footer,
  Navbar,
  Header,
} from './components';
import {
  Resume,
} from './pages';

const mainStyle = {
  'height': '100vh',
  'background': '#333945',
  'color': '#ffffff'
};

function App() {
  return (
    <div style={mainStyle}>
      <Header />
      <Navbar />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
