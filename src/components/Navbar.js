import React, {useState, useEffect} from 'react';
import {
  Menu,
  Container,
  Responsive,
  Icon,
  Button,
} from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import Sidebar from './Sidebar';
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
  height: 'var(--navHeight)',
  border: 'none',
  borderRadius: '0',
  boxShadow: 'none',
  background: 'var(--lightShade)',
  transition: 'background 1s ease, box-shadow 0.3s linear'
};

const mobileRespWrapper = {
  width: '98%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
};

const computerRespWrapper = {
  width: '100%',
  display: 'inline-flex',

};

const hamburgerStyle = {
  padding: '0',
  fontSize: '30px',
  background: 'rgba(0,0,0,0)',
  color: '#000'
};

const menuItemContainer = {
  margin: 'auto',
  display: 'flex',
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
  const [visible, setVisible] = useState(false);
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
   * @param {String} name of route to be pushed to history
   * selectPage helper function - changes route based on menu click
   */
  const selectPage = (page) => props.history.push(page);

  // if viewport width is smaller than 480,  always set the sidebar to false
  // if (window.innerWidth > 480) setVisible(false);

  return (
    <Menu icon='labeled' style={menuStyle} id='navbar' className={scrollTop > 0 ? 'navbar-animation' : ''}
          pointing secondary borderless fluid inverted={scrollTop > 0}>
      <Responsive maxWidth={480} style={mobileRespWrapper}>
        <Button icon='bars'
                style={hamburgerStyle}
                onClick={() => setVisible(!visible)}
                className={scrollTop > 0 ? 'hamburger-animation' : ''}
        />
        <Sidebar
          visible={visible}
          setVisible={setVisible}
          setActive={setActive}
          selectPage={selectPage}
        />
      </Responsive>
      <Responsive minWidth={481} style={computerRespWrapper}>
        <Container style={menuItemContainer} id='navbar-container'>
          <Menu.Item
            active={activeItem === '/'}
            onClick={() => {
              setActive('/');
              selectPage('/');
            }}
            className='menu-item'
          >
            Resume
          </Menu.Item>
          <Menu.Item
            active={activeItem === '/projects'}
            onClick={() => {
              setActive('/projects');
              selectPage('/projects');
            }}
            className='menu-item'
          >
            Projects
          </Menu.Item>
          <Menu.Item
            active={activeItem === '/about'}
            onClick={() => {
              setActive('/about');
              selectPage('/about');
            }}
            className='menu-item'
          >
            About Me
          </Menu.Item>
          <Menu.Item
            active={activeItem === '/contact'}
            onClick={() => {
              setActive('/contact');
              selectPage('/contact');
            }}
            className='menu-item'
          >
            Contact
          </Menu.Item>
        </Container>
      </Responsive>
    </Menu>
  );
});
