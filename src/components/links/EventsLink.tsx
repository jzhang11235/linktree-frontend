import { useState } from 'react';
import styled from 'styled-components';
import Link from './Link';
import { SongkickEvent } from '../../types';
import { ReactComponent as RightArrow } from '../../assets/right-arrow.svg';
import { ReactComponent as SongkickWordmark } from '../../assets/by-songkick-wordmark.svg';

export type EventsLinkProps = {
  label: string;
  events: SongkickEvent[];
};

const ExpandableLinkContainer = styled.div`
  border-radius: 4px;
  background: #f5f7f8;
`;

const List = styled.ul`
  margin: 0;
  padding-left: 16px;
  li {
    list-style: none;
  }
`;

const EventLink = styled.a`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
  border-bottom: 1px solid #dadee0;
  color: inherit;
`;

const EventDate = styled.div`
  font-size: 16px;
  line-height: 28px;
`;

const EventLocation = styled.div`
  font-size: 12px;
  line-height: 24px;
`;

const WordmarkContainer = styled.div`
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EventsLink = (props: EventsLinkProps) => {
  const [showEvents, setShowEvents] = useState(false);

  return (
    <ExpandableLinkContainer>
      <Link as="button" onClick={() => setShowEvents(!showEvents)}>
        {props.label}
      </Link>
      {showEvents && (
        <>
          <List>
            {props.events.map(event => (
              <li key={event.id}>
                <EventLink href={event.url} target="_blank">
                  <div>
                    <EventDate>{event.date}</EventDate>
                    <EventLocation>{event.location}</EventLocation>
                  </div>
                  <RightArrow />
                </EventLink>
              </li>
            ))}
          </List>
          <WordmarkContainer>
            <SongkickWordmark />
          </WordmarkContainer>
        </>
      )}
    </ExpandableLinkContainer>
  );
};

export default EventsLink;
