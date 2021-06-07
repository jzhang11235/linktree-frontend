import { useState } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import ExpandableLink from './ExpandableLink';
import musicPlatformInfo from './musicPlatformInfo';
import { Song } from '../../types';
import { ReactComponent as RightArrow } from '../../assets/right-arrow.svg';

/**
 * @todo
 * Implement embed music player.
 * What happens if link is collapsed while a track is playing?
 */

const PlatformLinkHeight = 48;
const EmbedPlayerHeight = 100;

export type MusicLinkProps = {
  label: string;
  song: Song;
};

const List = styled.ul`
  margin: 0;
  padding: 0;
  li {
    list-style: none;
    margin: 0;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      width: calc(100% - 56px);
      height: 1px;
      background: #dadee0;
    }
    &:last-child::after {
      display: none;
    }
  }
`;

const PlatformContainer = styled.div`
  height: ${PlatformLinkHeight}px;
  display: flex;
  align-items: center;
  position: relative;
`;

const ExternalLink = styled.a`
  display: block;
  padding: 12px 16px;
  line-height: 0;
`;

const PlayEmbedButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 0 16px 0 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  line-height: 28px;
`;

const EmbedPlayer = styled(animated.div)`
  overflow: hidden;
`;

const MusicLink = (props: MusicLinkProps) => {
  const [showEmbed, setShowEmbed] = useState(false);

  const embedHeight = showEmbed ? EmbedPlayerHeight : 0;
  const contentHeight =
    props.song.links.length * PlatformLinkHeight + embedHeight;

  const styles = useSpring({ height: `${embedHeight}px` });

  return (
    <ExpandableLink label={props.label} childHeight={contentHeight}>
      <EmbedPlayer style={styles} aria-hidden={!showEmbed}>
        Music player placeholder
      </EmbedPlayer>
      <List>
        {props.song.links.map(link => {
          const { displayName, iconUrl } = musicPlatformInfo[link.platform];
          return (
            <li key={link.platform}>
              <PlatformContainer>
                <ExternalLink href={link.externalUrl} target="_blank">
                  <img src={iconUrl} alt="" />
                </ExternalLink>
                <PlayEmbedButton onClick={() => setShowEmbed(!showEmbed)}>
                  {displayName}
                  <RightArrow />
                </PlayEmbedButton>
              </PlatformContainer>
            </li>
          );
        })}
      </List>
    </ExpandableLink>
  );
};

export default MusicLink;
