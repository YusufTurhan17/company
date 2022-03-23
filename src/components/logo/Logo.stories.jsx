import React from 'react';

import Logo from './Logo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Logo',
  component: Logo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Logo {...args}></Logo>;

export const Default = Template.bind({});
Default.args = {
};

 



 
 