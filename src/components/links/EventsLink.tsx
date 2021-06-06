import Link from './Link';

export type EventsLinkProps = {
  label: string;
};

const EventsLink = (props: EventsLinkProps) => {
  return <Link as="button">{props.label}</Link>;
};

export default EventsLink;
