import React from "react";

import Promo from "./Promo";
import Text from "../text/Text"
import Title from "../title/Title"
import View from '../view/View'
import Button from '../button/Button'
import Container from '../container/Container'
 import Background from '../../assets/images/background-image.png'
 
export default {
  title: "Components/Promo",
  subcomponents: {
    PromoContent: Promo.Content,
   },
  component: Promo,
};

const Template = (args) => (
  <View>
    <Promo {...args} backgroundImage={`url('${Background}')`} >
            
                <Container> 
                     
                        <Promo.Content> 
                            <Title>Who we are</Title>
                            <Text>Get to know us better by studying the way we work and the most prominent projects we’ve worked on so far</Text>
                            <Button>Get Company Profile</Button>
                        </Promo.Content>
                  
                </Container>
       
            
       
     </Promo>
  </View>
);

export const Default = Template.bind({});
Default.args = {};
