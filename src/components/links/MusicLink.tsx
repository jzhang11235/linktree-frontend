import { useMemo } from 'react';
import styled from 'styled-components';
import ExpandableLink from './ExpandableLink';
import { Song } from '../../types';
import { ReactComponent as RightArrow } from '../../assets/right-arrow.svg';

const PlatformLinkHeight = 48;

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
  }
`;

const PlatformContainer = styled.div`
  height: ${PlatformLinkHeight}px;
  display: flex;
  align-items: center;
  position: relative;
`;

const PlayEmbedButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 0 16px 0 0;
  border: 0;
  border-bottom: 1px solid #dadee0;
  background: transparent;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  line-height: 28px;
`;

const MusicLink = (props: MusicLinkProps) => {
  const contentHeight = useMemo(() => {
    return props.song.links.length * PlatformLinkHeight;
  }, [props.song]);

  return (
    <ExpandableLink label={props.label} height={contentHeight}>
      <List>
        {props.song.links.map((link, i) => (
          <li key={link.platform}>
            <PlatformContainer>
              <PlayEmbedButton>
                {link.platform}
                <RightArrow />
              </PlayEmbedButton>
            </PlatformContainer>
          </li>
        ))}
      </List>
    </ExpandableLink>
  );
};

export default MusicLink;
