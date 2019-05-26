import React from 'react';
import './App.css';
import '@zendeskgarden/react-chrome/dist/styles.css';
import '@zendeskgarden/react-buttons/dist/styles.css';

import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Chrome, Body, Header, HeaderItem, HeaderItemIcon, HeaderItemText, Sidebar, Content, Main, Nav, NavItem, NavItemIcon, NavItemText } from '@zendeskgarden/react-chrome';
import styled from 'styled-components'
import { ReactComponent as MenuIcon } from '@zendeskgarden/svg-icons/src/16/menu-stroke.svg';
import ResponsiveSideBar from './components/home/SideBar/index'
import ProfileCard from "./components/home/ProfileCard/ProfileCard";
import {ReactComponent as HomeIcon} from "@zendeskgarden/svg-icons/src/16/home-fill.svg";
import {ReactComponent as BlogIcon} from "@zendeskgarden/svg-icons/src/16/file-document-stroke.svg";
import {ReactComponent as CodeIcon} from "@zendeskgarden/svg-icons/src/16/markup-stroke.svg";
import ResponsiveNav from "./components/home/SideBar/ResponsiveNav";
import config from './config.json';


const MenuIconWrapper = styled(MenuIcon)`
    width: 30px;
    height: 30px;
    cursor: pointer;
    
`;

const ResponsiveContent = styled(Content)`
    @media screen and (max-width: 700px) {
        display: flex;
        flex-direction: column;
    }
    
`;


const ResponsiveHeader = styled(Header)`
    @media screen and (max-width: 700px) {
       position: relative;
       top: 0;
       width: 100%;
    }
    
     @media screen and (min-width: 700px) {
       display: none;
    }
`;



function App() {
  return (
      <ThemeProvider>
        <Chrome>
          <Body>
              <ResponsiveHeader>
                  <HeaderItem>
                      <HeaderItemIcon>
                          <MenuIconWrapper />
                      </HeaderItemIcon>
                      <HeaderItemText clipped>Products</HeaderItemText>
                  </HeaderItem>
              </ResponsiveHeader>


              <ResponsiveContent>
                <ResponsiveSideBar>
                    <ProfileCard
                        image         = { config.image }
                        name          = { config.name }
                        title         = { config.title }
                        description   = { config.description }
                        skills        = { config.skills }
                        links         = { config.links }
                    />
                    <ResponsiveNav
                        expanded
                        items         = { config.nav }
                    />
                  </ResponsiveSideBar>
                  <Main>
                      <body>
                        <p>Hello how are you doing ?</p>
                      </body>
                  </Main>
            </ResponsiveContent>
          </Body>
        </Chrome>
      </ThemeProvider>
  );
}

export default App;
