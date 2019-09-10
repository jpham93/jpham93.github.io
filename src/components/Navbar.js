import React, { useState } from 'react';
import {
  Menu,
  Container,
} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import logo from '../assets/logo/android-chrome-512x512.png';

/**
 * Menu Style
 * 
 * Style for Menu. Flex displays centers 
 * the choices in center of the menu.
 */
const menuStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItem: 'center',
  background: '#333945',
  color: 'white',
  zIndex: '1',
};

const logoStyle = {
  height: '50px',
  width: 'auto',
};

const menuItemContainer = {
  justifyContent: 'flex-end',
  alignItems: 'center',
}

/**
 * Navbar functional component
 * 
 * Navbar for user to navigate to each separate page.
 * Uses hooks to maintain functional state for active
 * button.
 */
export default withRouter(function (props) {
  const [activeItem, setActive] = useState(props.location.pathname);

  /**
   * selectPage helper function - changes route based on menu click
   * @param {*} page 
   */
  const selectPage = (page) => props.history.push(page);

  return (
    <Menu icon='labeled' style={menuStyle} id='navbar' inverted pointing borderless fluid>
      <Menu.Header>
        <img alt='JP' src={logo} style={logoStyle} />
      </Menu.Header>
      <Container style={menuItemContainer}>
        <Menu.Item
          active={activeItem === '/'}
          onClick={() => {
            setActive('/');
            selectPage('/');
          }}
        >
          Resume
      </Menu.Item>
        <Menu.Item
          active={activeItem === '/projects'}
          onClick={() => {
            setActive('/projects');
            selectPage('/projects');
          }}
        >
          Projects
      </Menu.Item>
        <Menu.Item
          active={activeItem === '/about'}
          onClick={() => {
            setActive('/about');
            selectPage('/about');
          }}
        >
          About Me
      </Menu.Item>
        <Menu.Item
          active={activeItem === '/contact'}
          onClick={() => {
            setActive('/contact');
            selectPage('/contact');
          }}
        >
          Contact
      </Menu.Item>
      </Container>
    </Menu >
  );
});