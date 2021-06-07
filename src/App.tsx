import styled, { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/defaultTheme';
import GlobalStyle from './styles/globalStyle';
import Profile from './components/Profile';
import ClassicLink from './components/links/ClassicLink';
import EventsLink from './components/links/EventsLink';
import MusicLink from './components/links/MusicLink';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const ProfileContainer = styled.header`
  display: flex;
  justify-content: center;
  margin: 32px 0 24px;
`;

const Main = styled.main`
  margin-bottom: 100px;
`;

const LinkContainer = styled.div`
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Container>
        <ProfileContainer>
          <Profile username="@yourname" />
        </ProfileContainer>
        <Main>
          <LinkContainer>
            <ClassicLink label="Some link" to="#" />
          </LinkContainer>
          <LinkContainer>
            <ClassicLink label="Another link" to="#" />
          </LinkContainer>
          <LinkContainer>
            <EventsLink
              label="Upcoming shows"
              events={[
                {
                  id: 'a',
                  date: 'Apr 01 2019',
                  location: 'The Forum, Melbourne',
                  soldOut: false,
                  url: '#',
                },
                {
                  id: 'b',
                  date: 'Apr 02 2019',
                  location: 'Venue Name, Canberra',
                  soldOut: true,
                  url: '#',
                },
                {
                  id: 'c',
                  date: 'Apr 03 2019',
                  location: 'Venue Name, Sydney',
                  soldOut: false,
                  url: '#',
                },
                {
                  id: 'd',
                  date: 'Apr 04 2019',
                  location: 'Venue Name, Brisbane',
                  soldOut: false,
                  url: '#',
                },
              ]}
            />
          </LinkContainer>
          <LinkContainer>
            <MusicLink
              label="Music"
              song={{
                title: 'Song Name',
                artist: 'Artist Name',
                album: 'Album Name',
                links: [
                  { platform: 'spotify', embedUrl: '#', externalUrl: '#' },
                  { platform: 'apple-music', embedUrl: '#', externalUrl: '#' },
                  { platform: 'soundcloud', embedUrl: '#', externalUrl: '#' },
                  {
                    platform: 'youtube-music',
                    embedUrl: '#',
                    externalUrl: '#',
                  },
                  { platform: 'deezer', embedUrl: '#', externalUrl: '#' },
                  { platform: 'tidal', embedUrl: '#', externalUrl: '#' },
                  { platform: 'bandcamp', embedUrl: '#', externalUrl: '#' },
                ],
              }}
            />
          </LinkContainer>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
