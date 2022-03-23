import SocialBox from "./SocialBox";
import View from "../view/View";

export default {
  title: "Components/SocialBox",

 
  component: SocialBox,
};

const Template = (args) => (
  <View>
    <SocialBox   {...args}/>
  </View>
);


export const Default = Template.bind({});
Default.args = {};