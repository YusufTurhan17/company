import React from "react";

import Stack from "./Stack";

import View from '../view/View'
 
export default {
  title: "Components/Stack",
  subcomponents: {
    StackImage: Stack.Image,
    StackTitle: Stack.Title,
    StackContent: Stack.Content,
    StackText: Stack.Text,
  },
  component: Stack,
};

const Template = (args) => (
  <View width="400px" >
    <Stack {...args}>
      <Stack.Image src="https://static.agentestudio.com/assets/stack/people-78df4fbe0646d9088bf9c813038e2a332544b18c625bdd4c20dcb88364d041ed.svg" />
        <Stack.Content>
             <Stack.Title>
                 People
            </Stack.Title>
            <Stack.Text>
              We value relationships with our clients, partners and employees and put people’s interests before anything else.
            </Stack.Text>
        </Stack.Content>
        
    </Stack>
  </View>
);

export const Default = Template.bind({});
Default.args = {};
