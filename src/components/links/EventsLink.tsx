import { useState } from 'react';
import styled from 'styled-components';
import Link from './Link';
import { SongkickEvent } from '../../types';

export type EventsLinkProps = {
  label: string;
  events: SongkickEvent[];
};

const ExpandableLinkContainer = styled.div`
  border-radius: 4px;
  background: #dadee0;
`;

const EventsLink = (props: EventsLinkProps) => {
  const [showEvents, setShowEvents] = useState(false);

  return (
    <ExpandableLinkContainer>
      <Link as="button" onClick={() => setShowEvents(!showEvents)}>
        {props.label}
      </Link>
      {showEvents && (
        <ul>
          {props.events.map(event => (
            <li key={event.id}>{event.location}</li>
          ))}
        </ul>
      )}
    </ExpandableLinkContainer>
  );
};

export default EventsLink;
