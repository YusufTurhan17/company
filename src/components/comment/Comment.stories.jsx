import React from "react";

import Comment from "./Comment";
import Text from "../text/Text"
import View from '../view/View'
 
export default {
  title: "Components/Comment",
  subcomponents: {
    CommentAuthor: Comment.Author,
    CommentContent: Comment.Content,
    CommentImage: Comment.Image,
   },
  component: Comment,
};

const Template = (args) => (
  <View>
    <Comment {...args}>
         <Comment.Author>
                <Comment.Image src="https://static.agentestudio.com/uploads/testimonial/photo/2/thumb_ben-lozano.png"/>
                <Text margin="0" tagName="h4">Benjamin Lozano</Text>     
                <Text marginTop="10px" tagName="h5">CEO, True North Business Exchange</Text>     
        </Comment.Author> 
        <Comment.Content>
            <Text fontSize="20px">Investor and stakeholder feedback has been positive, users appreciate the sleek, smooth user interface. Agente managed the workload successfully. Their artistic vision was highly valued.</Text>
        </Comment.Content>
     </Comment>
  </View>
);

export const Default = Template.bind({});
Default.args = {};
