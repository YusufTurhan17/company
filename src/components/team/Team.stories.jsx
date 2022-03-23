import React from "react";

import Team from "./Team";
import Text from "../text/Text"
import Title from "../title/Title"

import View from '../view/View'
 
export default {
  title: "Components/Team",
  subcomponents: {
    TeamImage: Team.Image,
    TeamContent: Team.Content,
   
  },
  component: Team,
};

const Template = (args) => (
  <View width="400px" >
    <Team {...args}>
      <Team.Image src="https://static.agentestudio.com/assets/team/vasya-0e5c522bf2c14b2b9cf0622aaa84715ec511336bc6b124e3f3ea1afbab044122.jpg" />
        <Team.Content>
            <Title fontWeight="normal" size="small">Oleg Romeyko</Title>
             <Text opacity="0.5">CTO, Partner</Text>
        </Team.Content>
        
    </Team>
  </View>
);

export const Default = Template.bind({});
Default.args = {};
