import React from "react";

import Reasons from "./Reasons";

import View from '../view/View'
import Title from "../title/Title";
import Text from "../text/Text";
 
export default {
  title: "Components/Reasons",
  subcomponents: {
    ReasonsImage: Reasons.Image,
     ReasonsContent: Reasons.Content,
   },
  component: Reasons,
};

const Template = (args) => (
  <View width="400px" >
    <Reasons {...args}>
      <Reasons.Image src="https://static.agentestudio.com/assets/reasons/trusted-team-small-a56a8fbec923488436951365ccbcc6607430e12e4149caf12b89819ebff1c9e8.svg" />
        <Reasons.Content>
             <Title color="secondary" margin="0px" tagName="h3">
                 Trusted and Skilled Team
            </Title>
            <Text>
             Since 2009, we collaborate closely with startups and established brands to develop digital products from scratch or leverage their existing products. We serve customers from 5+ industries and are proud of our 100+ successful projects in product design, website, and mobile development.
            </Text>
        </Reasons.Content>
        
    </Reasons>
  </View>
);

export const Default = Template.bind({});
Default.args = {};
