import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
  Footer,
  Navbar,
  Header,
} from './components'

const mainStyle = {
  'height': '100vh',
  'background': '#555',
  'color': '#ffffff'
};

function App() {
  return (
    <div style={mainStyle}>
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
