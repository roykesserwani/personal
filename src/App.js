import React from 'react';
import './App.css';
import '@zendeskgarden/react-chrome/dist/styles.css';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Chrome, Body, Sidebar, Content, Main } from '@zendeskgarden/react-chrome';
import HomeProfileCard from './components/home/HomeProfileCard/HomeProfileCard'



function App() {
  return (
      <ThemeProvider>
        <Chrome>
          <Body>
            <Content>
              <Sidebar style={{ padding: 28 }}>
                  <HomeProfileCard
                    image       = { 'https://media.licdn.com/dms/image/C5603AQEGswIRoSF-wg/profile-displayphoto-shrink_200_200/0?e=1564012800&v=beta&t=1y1uI6zbPV_IzTpsU829cF2lDdAWKd7-nwWBycQzKuQ' }
                    name        = { 'Roy Kesserwani' }
                    title       = { 'Software Engineer' }
                    description = { 'I am a passionate developer that likes to work out and code professionaly' }
                    skills      = {[ 'Javascript', 'HTML', 'Kubernetes', 'html' ]}
                    links       = { { linkedin: 'https://www.linkedin.com/in/roykesserwani/', twitter: 'https://www.linkedin.com/in/roykesserwani/'}}
                  >
                  </HomeProfileCard>
              </Sidebar>
              <Main>
              </Main>
            </Content>
          </Body>
        </Chrome>
      </ThemeProvider>
  );
}

export default App;
