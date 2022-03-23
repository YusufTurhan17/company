import React from "react";

import Card from "./Card";

import  View  from '../view/View'
import Text from "../text/Text";
 
export default {
  title: "Components/Card",
  subcomponents: {
    CardImage: Card.Image,
    CardTitle: Card.Title,
    CardContent: Card.Content,
    CardTag: Card.Tag,
  },
  component: Card,
};

const Template = (args) => (
  <View>
    <Card  direction="row"  {...args}>
      <Card.Image src="https://static.agentestudio.com/uploads/post/image/18/thumb_Header_BG.png" />
      <Card.Content>
        <Card.Title>
          Top eCommerce Website Design Features and Tips in 2022
        </Card.Title>
        <Text>
          While creating an online store, it is difficult to orientate quickly
          and understand how the website should look to create a positive impact
          on the owner’s income. It determines whether clients remain on store’s
          page, would they have confidence in the store and would they like to
          purchase
        </Text>
        <View Flex="flex">
          <Card.Tag>
              Web Development
          </Card.Tag>
          <Card.Tag>
              Mobile Development
          </Card.Tag>
        </View>
       
      </Card.Content>
    </Card>
  </View>
);


export const Default = Template.bind({});
Default.args = {};
