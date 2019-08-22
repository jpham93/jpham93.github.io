import React, { useState } from 'react';
import {
  Menu,
  Icon
} from 'semantic-ui-react';

const menuStyle = {
  display: 'flex',
  justifyContent: 'center',
  background: 'rgba(0, 0, 0, 0)',
  color: 'white',
}

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