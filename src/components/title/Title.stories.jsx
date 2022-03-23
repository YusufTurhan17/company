import React from 'react';
import Title from './Title';

export default {
  title: 'Components/Title',
  component: Title,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Title {...args}>Başlık</Title>;

export const Default = Template.bind({});
Default.args = {
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};