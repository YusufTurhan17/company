import Slider from "./Slider";
import View from "../view/View";

export default {
  title: "Components/Slider",
  component: Slider,
};

const Template = (args) => (
  <View>
    <Slider {...args}>
      <Slider.Item>
        <p>Dnemee</p>
      </Slider.Item>
      <Slider.Item>
        <p>Dnemee</p>
      </Slider.Item>
      <Slider.Item>
        <p>Dnemee</p>
      </Slider.Item>
    </Slider>
  </View>
);

export const Default = Template.bind({});
Default.args = {};