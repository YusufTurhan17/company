import React from 'react';

import Text from './Text';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Text {...args}>Yusuf Turhan</Text>;
 
export const Default = Template.bind({});
Default.args = {
};

export const Colored = Template.bind({});
Colored.args = {
  color: "secondary",
};
export const size = Template.bind({});
     size.args = {
     size:"small",
 }
// export const FontFamily = Template.bind({});
// Colored.args = {
//   color: "red",
// };