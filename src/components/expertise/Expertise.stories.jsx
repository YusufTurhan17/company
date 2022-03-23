import React from "react";

import Expertise from "./Expertise";

import View from '../view/View'
import Text from "../text/Text";

export default {
  title: "Components/Expertise",
  subcomponents: {
    ExpertiseImage: Expertise.Image,
    ExpertiseTitle: Expertise.Title,
    ExpertiseContent: Expertise.Content,
  },
  component: Expertise,
};

const Template = (args) => (
  <View>
    <Expertise {...args}>
      <Expertise.Image src="https://static.agentestudio.com/assets/expertise/e-learning-5d1801ea6bd058c71cf0db5b4769701435e61050c3512b7f86c79fea1c226f7f.svg" />
        <Expertise.Content>
             <Expertise.Title>
                 E-learning
            </Expertise.Title>
            <Text>
               Online training, learning management systems, and mobile apps.
            </Text>
        </Expertise.Content>
        
    </Expertise>
  </View>
);

export const Default = Template.bind({});
Default.args = {};
