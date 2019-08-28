import React, { useState } from 'react';
import {
  Menu,
  Icon
} from 'semantic-ui-react';

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
export default function () {
  const [activeItem, setActive] = useState(null);

  return (
    <Menu icon='labeled' style={menuStyle} inverted>
      <Menu.Item
        active={activeItem === 'home'}
        onClick={() => setActive('home')}
      >
        <Icon name='address card outline' />
        Resume
      </Menu.Item>
      <Menu.Item
        active={activeItem === 'projects'}
        onClick={() => setActive('projects')}
      >
        <Icon name='file code outline' />
        Projects
      </Menu.Item>
      <Menu.Item
        active={activeItem === 'about'}
        onClick={() => setActive('about')}
      >
        <Icon name='user circle' />
        About Me
      </Menu.Item>
      <Menu.Item
        active={activeItem === 'contact'}
        onClick={() => setActive('contact')}
      >
        <Icon name='mail outline' />
        Contact
      </Menu.Item>
    </Menu>
  );
}