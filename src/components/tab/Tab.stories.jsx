import React from "react";

import Tab from "./Tab";

import  View  from '../view/View'
  
export default {
  title: "Components/Tab",
  subcomponents: {},
  component: Tab,
};

const Template = (args) => (
  <View>
    <Tab  {...args}>
      <Tab.Item index={1} header="birinci">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, vitae!</Tab.Item>
      <Tab.Item index={2} header="birinci"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, autem!</Tab.Item>
      <Tab.Item index={3} header="birinci">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, accusantium!</Tab.Item>
      <Tab.Item index={4} header="birinci" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, neque?</Tab.Item>
    </Tab>
  </View>
);

export const Default = Template.bind({});
Default.args = {};
