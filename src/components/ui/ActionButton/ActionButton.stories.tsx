import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ActionButton from "./ActionButton";
import BoldIcon from "../../icons/BoldIcon";
import ItalicIcon from "../../icons/ItalicIcon";

export default {
  title: "ActionButton",
  component: ActionButton,
} as ComponentMeta<typeof ActionButton>;

const Template: ComponentStory<typeof ActionButton> = (args) => <ActionButton {...args} />;

export const BoldButton = Template.bind({});

BoldButton.args = {
  label: "Bold Button",
  children: <BoldIcon />
};

export const ItalicButton = Template.bind({});
ItalicButton.args = {
  label: "Italic Button",
  children: <ItalicIcon />
};