import React from "react";

import Newslatter from "./Newslatter";
import View  from '../view/View'
import Text from "../text/Text";
import Title from "../title/Title";
import Image from "../image/Image";
import Input from "../input/Input";
import Button from "../button/Button";
 
export default {
  title: "Components/Newslatter",

  subcomponents: {
 
    NewslatterContent: Newslatter.Content,
   },
  component: Newslatter,
};

const Template = (args) => (
  <View>
    <Newslatter  {...args}>
      <Newslatter.Content>
            <Title size="small" tagName="h3">Stay tuned for news</Title>
            <Text>
                Useful articles from our content team right to your inbox!
            </Text>
            <Image width="110px" height="110px" src="https://static.agentestudio.com/uploads/author/photo/7/thumb_A.png"/>
            <Title  tagName="h4">Agente Content Team</Title>
            <Input width="100%" type="email" placeholder="E-mail Address" />    
            <Button marginTop="30px " variant="secondary">Subscribe</Button>
       
      </Newslatter.Content>
    </Newslatter>
  </View>
);


export const Default = Template.bind({});
Default.args = {};
