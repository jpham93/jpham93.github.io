import React, {useState, useEffect} from 'react';
import {
  Menu,
  Container,
} from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import './styles.css';

/**
 * Menu Style
 *
 * Style for Menu. Flex displays centers
 * the choices in center of the menu.
 */
const menuStyle = {
  zIndex: '99',
  position: 'fixed',
  display: 'flex',
  justifyContent: 'space-between',
  alignItem: 'center',
  minHeight: '50px',
  border: 'none',
  borderRadius: '0',
  boxShadow: 'none',
  background: 'var(--lightShade)',
  transition: 'background 1s ease, box-shadow 0.3s linear'
};

const menuItemContainer = {
  justifyContent: 'flex-end',
  alignItems: 'center',
};

/**
 * Navbar functional component
 *
 * Navbar for user to navigate to each separate page.
 * Uses hooks to maintain functional state for active
 * button.
 */
export default withRouter(function (props) {
  const [activeItem, setActive] = useState(props.location.pathname);
  const [scrollTop, setScrollTop] = useState(0);

  /**
   * useEffect for scrolling Hook
   *
   * Keeps track of scroll height for UI effect
   */
  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollTop]);

  /**
   * @param {*} page
   * selectPage helper function - changes route based on menu click
   */
  const selectPage = (page) => props.history.push(page);

  return (
    <Menu icon='labeled' style={menuStyle} id='navbar' className={scrollTop > 0 ? 'navbar-animation' : ''}
          pointing secondary borderless fluid inverted={scrollTop > 0}>
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
    </Menu>
  );
});
