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
      available: true,
      url: '#',
    },
    {
      id: 'b',
      date: 'Apr 02 2019',
      location: 'Venue Name, Canberra',
      available: false,
      url: '#',
    },
    {
      id: 'c',
      date: 'Apr 03 2019',
      location: 'Venue Name, Sydney',
      available: true,
      url: '#',
    },
    {
      id: 'd',
      date: 'Apr 04 2019',
      location: 'Venue Name, Brisbane',
      available: true,
      url: '#',
    },
  ],
};
