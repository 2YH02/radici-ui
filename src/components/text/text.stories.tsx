import type { Meta, StoryObj } from "@storybook/react";
import Text, { Typography } from "./text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    typography: {
      control: "select",
      options: ["t1", "t2", "t3", "t4", "t5", "t6", "t7"],
      description: "Set the size of the text.",
      table: {
        type: { summary: "Typography" },
        defaultValue: { summary: "t5" },
      },
    },
    display: {
      control: "select",
      options: ["inline", "block", "inline-block"],
      description: "Set the display of the text.",
      table: {
        type: { summary: "'inline' | 'block' | 'inline-block'" },
        defaultValue: { summary: "inline-block" },
      },
    },
    textAlign: {
      control: "select",
      options: ["left", "center", "right"],
      description: "Set the align of the text.",
      table: {
        type: { summary: "'left' | 'center' | 'right'" },
        defaultValue: { summary: "left" },
      },
    },
    fontWeight: {
      control: "select",
      options: ["normal", "bold", "lighter", "bolder"],
      description: "Set the font weight of the text.",
      table: {
        type: { summary: "'normal' | 'bold' | 'lighter' | 'bolder" },
        defaultValue: { summary: "normal" },
      },
    },
    as: {
      control: "select",
      options: ["h1", "h3", "p", "div", "a"],
      description: "Set the html tag of the text.",
      table: {
        type: { summary: "keyof JSX.IntrinsicElements" },
        defaultValue: { summary: "span" },
      },
    },
    children: {
      description: "text",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "Default Text",
  },
};

export const TextTypography: Story = {
  render: () => {
    const typographyList: Typography[] = [
      "t1",
      "t2",
      "t3",
      "t4",
      "t5",
      "t6",
      "t7",
    ];

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {typographyList.map((typography) => {
          return (
            <Text typography={typography}>This is a {typography} text</Text>
          );
        })}
      </div>
    );
  },
};
