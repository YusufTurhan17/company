import React from "react";

import Box from "./Box";

import View from '../view/View'
import Text from "../text/Text";

export default {
  title: "Components/Box",
  subcomponents: {
    BoxImage: Box.Image,
    BoxTitle: Box.Title,
  },
  component: Box,
};

const Template = (args) => (
  <View width="400px">
    <Box {...args}>
      <Box.Image src="https://static.agentestudio.com/assets/services/web-development-6870dd6c27a4b419727566e7ed22c6c8885220364432664c4974e28a415739a8.svg" />
        <Box.Title>
          Web Development
        </Box.Title>
        <Text>
          Frontend, Backend,
        </Text>
    </Box>
  </View>
);

export const Default = Template.bind({});
Default.args = {};
