import type { Meta, StoryObj } from "@storybook/react";
import Tabs, { TabList, TabButton, TabContent } from "./tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    sticky: {
      control: "boolean",
      description: "Makes the TabList sticky at the top of the container.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    activeBorderColor: {
      control: "text",
      description:
        "Set the active tab color using Tailwind CSS's border-[userColor] classes.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "border-black dark:border-white" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs>
      <TabList>
        <TabButton value="tab1">Tab 1</TabButton>
        <TabButton value="tab2">Tab 2</TabButton>
        <TabButton value="tab3">Tab 3</TabButton>
      </TabList>
      <TabContent value="tab1">Content for Tab 1</TabContent>
      <TabContent value="tab2">Content for Tab 2</TabContent>
      <TabContent value="tab3">Content for Tab 3</TabContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Basic tab component with three tabs and corresponding content sections.",
      },
    },
  },
};

export const StickyTabs: Story = {
  render: () => (
    <Tabs sticky>
      <TabList>
        <TabButton value="tab1">Sticky Tab 1</TabButton>
        <TabButton value="tab2">Sticky Tab 2</TabButton>
      </TabList>
      <TabContent value="tab1">Sticky Tab Content 1</TabContent>
      <TabContent value="tab2">Sticky Tab Content 2</TabContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Tabs with a sticky tab list that stays fixed at the top when scrolling.",
      },
    },
  },
};

export const CustomBorderColor: Story = {
  render: () => (
    <Tabs activeBorderColor="border-red-500">
      <TabList>
        <TabButton value="tab1">Custom Red Border</TabButton>
        <TabButton value="tab2">Custom Red Border</TabButton>
      </TabList>
      <TabContent value="tab1">Tab with Red Border</TabContent>
      <TabContent value="tab2">Another Tab with Red Border</TabContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: "Tabs with a custom red border color for the active tab.",
      },
    },
  },
};
