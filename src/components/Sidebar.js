import React, {useState} from 'react';
import {
  Sidebar,
  Menu,
  Icon,
} from 'semantic-ui-react';

const sidebarStyle = {
  background: 'var(--mainGradient)',
  color: 'var(--lightShade)',
};

export default function ({visible, setVisible, setActive, selectPage}) {
  return (
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      onHide={() => setVisible(false)}
      vertical
      visible={visible}
      width='thin'
      direction='top'
      style={sidebarStyle}
      inverted
    >
      <Menu.Item
        onClick={() => {
          setActive('/');
          selectPage('/');
        }}>
        <Icon name='address card outline'/>
        Resume
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          setActive('/projects');
          selectPage('/projects');
        }}>
        <Icon name='code'/>
        Projects
      </Menu.Item>
      <Menu.Item onClick={() => {
        setActive('/about');
        selectPage('/about');
      }}>
        <Icon name='user'/>
        About
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          setActive('/contact');
          selectPage('/contact');
        }}>
        <Icon name='mail'/>
        Contact
      </Menu.Item>
      <Menu.Item
        onClick={() => setVisible(false)}
        style={{position: 'absolute', top: 0, right: 0}}
      >
        <Icon name='window close'/>
      </Menu.Item>
    </Sidebar>
  );
}