import React from "react";

import List from "./List";
import  View  from '../view/View'
import Text from "../text/Text";
 
export default {
  title: "Components/List",
  subcomponents: {
    ListItem: List.Item,
 
  },
  component: List,
};

const Template = (args) => (
  <View>
    <List type="square" {...args}>
        <List.Item>
                deneme deneme
        </List.Item>
            <List.Item>
                deneme deneme
        </List.Item>
            <List.Item>
                deneme deneme
        </List.Item>
    </List>
  </View>
);


export const Default = Template.bind({});
Default.args = {};
