import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MDXEditor from "./MDXEditor";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "React MDX Editor",
  component: MDXEditor,
} as ComponentMeta<typeof MDXEditor>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MDXEditor> = (args) => <MDXEditor {...args} />;

export const Editor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Editor.args = {
  text: "Hello games!",
};
