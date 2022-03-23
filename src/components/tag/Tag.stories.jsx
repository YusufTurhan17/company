import React from "react";

import Tag from "./Tag";
import View from "../view/View";
 
 
export default {
  title: "Components/Tag",

  subcomponents: {},
  component: Tag,
};

const Template = (args) => (
  <View>
    <Tag  {...args}>Deneme</Tag>

     
  </View>
);


export const Default = Template.bind({});
Default.args = {};
