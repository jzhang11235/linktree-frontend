import { Meta, Story } from '@storybook/react';
import EventsLink, { EventsLinkProps } from './EventsLink';

export default {
  title: 'Links/Events',
  component: EventsLink,
} as Meta;

const Template: Story<EventsLinkProps> = args => <EventsLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Upcoming shows',
  events: [
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
  ],
};
