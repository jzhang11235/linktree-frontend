import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import Link from './Link';
import ExpandableLinkContainer from './ExpandableLinkContainer';
import { SongkickEvent } from '../../types';
import { ReactComponent as RightArrow } from '../../assets/right-arrow.svg';
import { ReactComponent as SongkickWordmark } from '../../assets/by-songkick-wordmark.svg';

const EventLinkHeight = 72;
const WordmarkHeight = 48;

export type EventsLinkProps = {
  label: string;
  events: SongkickEvent[];
};

const Content = styled(animated.div)`
  overflow: hidden;
`;

const List = styled.ul`
  margin: 0;
  padding-left: 16px;
  li {
    list-style: none;
    margin: 0;
  }
`;

const EventLink = styled.a`
  height: ${EventLinkHeight}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
  border-bottom: 1px solid #dadee0;
  color: inherit;
  text-decoration: none;
`;

const EventDate = styled.div`
  font-size: 16px;
  line-height: 28px;
`;

const EventInfo = styled.div`
  font-size: 12px;
  line-height: 24px;
`;

const WordmarkContainer = styled.div`
  height: ${WordmarkHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EventsLink = (props: EventsLinkProps) => {
  const [showContent, setShowContent] = useState(false);

  const contentHeight = useMemo(() => {
    return props.events.length * EventLinkHeight + WordmarkHeight;
  }, [props.events]);

  const contentStyles = useSpring(
    showContent
      ? { opacity: 1, height: `${contentHeight}px` }
      : { opacity: 0, height: '0px' }
  );

  return (
    <ExpandableLinkContainer>
      <Link as="button" onClick={() => setShowContent(!showContent)}>
        {props.label}
      </Link>
      <Content style={contentStyles} aria-hidden={!showContent}>
        <List>
          {props.events.map(event => (
            <li key={event.id}>
              <EventLink href={event.url} target="_blank">
                <div>
                  <EventDate>{event.date}</EventDate>
                  <EventInfo>{event.location}</EventInfo>
                </div>
                {event.soldOut ? (
                  <EventInfo>Sold out</EventInfo>
                ) : (
                  <RightArrow />
                )}
              </EventLink>
            </li>
          ))}
        </List>
        <WordmarkContainer>
          <SongkickWordmark />
        </WordmarkContainer>
      </Content>
    </ExpandableLinkContainer>
  );
};

export default EventsLink;
