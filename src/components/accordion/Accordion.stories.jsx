import React from "react";

import Accordion from "./Accordion";

import  View  from '../view/View'
  
export default {
  title: "Components/Accordion",
  subcomponents: {},
  component: Accordion,
};

const Template = (args) => (
  <View>
    <Accordion  {...args}>
      <Accordion.Item index={1} header="birinci" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, minima."></Accordion.Item>
      <Accordion.Item index={2} header="birinci" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, minima."> </Accordion.Item>
      <Accordion.Item index={3} header="birinci" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, minima."></Accordion.Item>
      <Accordion.Item index={4} header="birinci" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, minima."></Accordion.Item>
    </Accordion>
  </View>
);

export const Default = Template.bind({});
Default.args = {};
