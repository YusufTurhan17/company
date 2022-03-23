import { action } from '@storybook/addon-actions';
import React from 'react'
import Input from './Input'
 
export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {}
}

const Template = (args) => <Input placeholder="Ad Soyad" {...args} onChange={action("change")}></Input>;

export const Default = Template.bind({});
Default.args = {
};

 
