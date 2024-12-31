import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonSize, type ButtonColor } from "./button";
import SunIcon from "../icons/sun-icon";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["black", "white", "blue", "red", "purple", "gray", "rose"],
      description: "Set the color of the button.",
      table: {
        type: { summary: "ButtonColor" },
        defaultValue: { summary: "black" },
      },
    },
    appearance: {
      control: "select",
      options: ["filled", "outlined", "borderless"],
      description: "Set the appearance of the button.",
      table: {
        type: { summary: "Appearance" },
        defaultValue: { summary: "filled" },
      },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Set the size of the button.",
      table: {
        type: { summary: "ButtonSize" },
        defaultValue: { summary: "md" },
      },
    },
    fullWidth: {
      control: "boolean",
      description:
        "Sets the button to take the full width of its parent container.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    clickAction: {
      control: "boolean",
      description: "Triggers a scale animation action on click.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    icon: {
      control: "select",
      options: [false, <SunIcon />],
      description: "Adds an icon to the button",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "false" },
      },
    },
    children: {
      description: "Button text",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default Button",
    appearance: "filled",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The size of the Button is determined by its children and the padding defined by the size property. Styles can be further customized using the className prop with Tailwind CSS.",
      },
    },
  },
};

export const Outlined: Story = {
  args: {
    children: "Outlined Button",
    appearance: "outlined",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "This is an outlined button.",
      },
    },
  },
};

export const FullWidth: Story = {
  args: {
    children: "FullWidth",
    fullWidth: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This button stretches to take up the full width of its parent container.",
      },
    },
  },
};

export const WithClickAction: Story = {
  args: {
    children: "with action",
    clickAction: true,
  },
  parameters: {
    docs: {
      description: {
        story: "This button triggers a scale animation effect when clicked.",
      },
    },
  },
};

export const WithIcon: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Button icon={<SunIcon />}>with icon</Button>
        <Button icon={<SunIcon />} />
        <Button
          icon={<SunIcon color="#ef4444" />}
          className="m-4"
          appearance="borderless"
          color="red"
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates buttons with icons, including different placements, colors, and styles.",
      },
    },
  },
};

export const Size: Story = {
  render: () => {
    const size: ButtonSize[] = ["sm", "md", "lg"];
    return (
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        {size.map((size) => (
          <div key={size}>
            <Button color="black" size={size}>
              {size}
            </Button>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Displays buttons in different sizes (small, medium, and large) to demonstrate the size variations.",
      },
    },
  },
};

export const Colors: Story = {
  render: () => {
    const colors: ButtonColor[] = [
      "black",
      "white",
      "blue",
      "red",
      "purple",
      "gray",
      "rose",
    ];
    return (
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {colors.map((color) => (
          <div key={color} style={{ textAlign: "center" }}>
            <Button color={color}>{color}</Button>
            <div style={{ marginTop: "5px", fontSize: "12px", color: "#666" }}>
              {color}
            </div>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Displays buttons with different color variants, including black, white, blue, red, purple, gray, and rose.",
      },
    },
  },
};

export const BorderLess: Story = {
  render: () => {
    const colors: ButtonColor[] = [
      "black",
      "white",
      "blue",
      "red",
      "purple",
      "gray",
      "rose",
    ];
    return (
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {colors.map((color) => (
          <div key={color} style={{ textAlign: "center" }}>
            <Button color={color} appearance="borderless">
              {color}
            </Button>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Displays buttons with a borderless appearance.",
      },
    },
  },
};
