import React from "react";

import FileUpload from "./FileUpload";

import View from '../view/View'
 
export default {
  title: "Components/FileUpload",
  subcomponents: {
   },
  component: FileUpload,
};

const Template = (args) => (
  <View>
    <FileUpload {...args} id="deneme" />
  </View>
);

export const Default = Template.bind({});
Default.args = {};


export const Multiple = Template.bind({});
Multiple.args = {
  multiple: true
};

export const Accept = Template.bind({});
Accept.args = {
  accept: "image/*"
};


 