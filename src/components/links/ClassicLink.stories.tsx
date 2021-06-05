import { Meta, Story } from '@storybook/react';
import ClassicLink, { ClassicLinkProps } from './ClassicLink';

export default {
  title: 'Links/Classic',
  component: ClassicLink,
} as Meta;

const Template: Story<ClassicLinkProps> = args => <ClassicLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Link to some page',
  to: '#',
};
