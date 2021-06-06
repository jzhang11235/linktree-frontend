import { useState } from 'react';
import Link from './Link';
import ExpandableLinkContainer from './ExpandableLinkContainer';
import { Song } from '../../types';

export type MusicLinkProps = {
  label: string;
  song: Song;
};

const MusicLink = (props: MusicLinkProps) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <ExpandableLinkContainer>
      <Link as="button" onClick={() => setShowContent(!showContent)}>
        {props.label}
      </Link>
    </ExpandableLinkContainer>
  );
};

export default MusicLink;
