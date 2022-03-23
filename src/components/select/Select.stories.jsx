import React from "react";
import { action } from '@storybook/addon-actions'
import Select from "./Select";

export default {
  title: "Components/Select",
  component: Select,
};

const Template = (args) => (
    <Select {...args} onChange={action("change")}>
          <Select.Option value="100">1000</Select.Option>
          <Select.Option value="200">2000</Select.Option>
          <Select.Option value="300">3000</Select.Option>
    </Select>
);

export const Default = Template.bind({});
Default.args = {
    onChange: (e) => e
};
