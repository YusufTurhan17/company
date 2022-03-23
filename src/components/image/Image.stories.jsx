import React from 'react'

import Image from './Image'
 
export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {}
}

 
 

const Template = (args) => <Image {...args}></Image>;


export const Default = Template.bind({});
Default.args = {
};

export const ImageObjectFitCover = Template.bind({})
ImageObjectFitCover.args = {
  objectFit: 'cover'
}
