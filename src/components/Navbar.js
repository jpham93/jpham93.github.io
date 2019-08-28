import React, { useState } from 'react';
import {
  Menu,
  Icon
} from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

/**
 * Menu Style
 * 
 * Style for Menu. Flex displays centers 
 * the choices in center of the menu.
 */
const menuStyle = {
  display: 'flex',
  justifyContent: 'center',
  background: '#333945',
  color: 'white',
  zIndex: '1',
}

/**
 * Navbar functional component
 * 
 * Navbar for user to navigate to each separate page.
 * Uses hooks to maintain functional state for active
 * button.
 */
export default withRouter(function () {
  const [activeItem, setActive] = useState(null);

  return (
    <Menu icon='labeled' style={menuStyle} inverted>
      <Link to='/'>
        <Menu.Item
          active={activeItem === 'home'}
          onClick={() => setActive('home')}
        >
          <Icon name='address card outline' />
          Resume
      </Menu.Item>
      </Link>
      <Link to='/projects'>
        <Menu.Item
          active={activeItem === 'projects'}
          onClick={() => setActive('projects')}
        >
          <Icon name='file code outline' />
          Projects
      </Menu.Item>
      </Link>
      <Link to='/about'>
        <Menu.Item
          active={activeItem === 'about'}
          onClick={() => setActive('about')}
        >
          <Icon name='user circle' />
          About Me
      </Menu.Item>
      </Link>
      <Link to='/contact'>
        <Menu.Item
          active={activeItem === 'contact'}
          onClick={() => setActive('contact')}
        >
          <Icon name='mail outline' />
          Contact
      </Menu.Item>
      </Link>
    </Menu>
  );
});