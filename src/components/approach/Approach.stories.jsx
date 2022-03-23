import React from "react";

import Approach from "./Approach";

import View from '../view/View'
import Text from "../text/Text";
import Title from "../title/Title";

export default {
  title: "Components/Approach",
  subcomponents: {
    ApproachContent: Approach.Content,
  },
  component: Approach,
};

const Template = (args) => (
  <View width="400px">
    <Approach {...args}>
         <Approach.Content>
             <Title display="flex" alignItems="center" tagName="h3">
                <Title marginRight="10px" color="secondary" tagName="span">01</Title> Why?
            </Title>
            <Text>
               We believe in the power of design in software development. We thrive on building relationships and helping good people and organizations succeed through a collaborative process. 
            </Text>
        </Approach.Content>
        
    </Approach>
  </View>
);

export const Default = Template.bind({});
Default.args = {};
