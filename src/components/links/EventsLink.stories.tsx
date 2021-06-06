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
};
