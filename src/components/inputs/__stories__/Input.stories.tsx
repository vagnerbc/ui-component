import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '../Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isInvalid: false,
  disabled: false,
  placeholder: 'Primary',
};

export const Success = Template.bind({});
Success.args = {
  isInvalid: false,
  disabled: false,
  placeholder: 'Success',
};

export const Error = Template.bind({});
Error.args = {
  isInvalid: true,
  disabled: false,
  placeholder: 'Error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: 'Disabled',
};
