import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md"],
      description: "Set the size of the badge.",
      table: {
        type: { summary: "BadgeSize" },
        defaultValue: { summary: "sm" },
      },
    },
    variant: {
      control: "select",
      options: ["default", "outline"],
      description: "Set the variant of the badge.",
      table: {
        type: { summary: "BadgeVariants" },
        defaultValue: { summary: "default" },
      },
    },
    children: {
      description: "Badge children",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Default Badge",
    variant: "default",
  },
  parameters: {
    docs: {
      description: {
        story: "A default badge with no border.",
      },
    },
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Badge",
    variant: "outline",
  },
  parameters: {
    docs: {
      description: {
        story: "An outlined badge with a border.",
      },
    },
  },
};

export const Size: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <div>
        <Badge size="sm">Small Badge</Badge>
      </div>
      <div>
        <Badge size="md">Medium Badge</Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Badges with different size variants.",
      },
    },
  },
};
