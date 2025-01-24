import type { Meta, StoryObj } from "@storybook/react";
import { useMemo, useState } from "react";
import cn from "../../utils/cn";
import MoonIcon from "../icons/moon-icon";
import SunIcon from "../icons/sun-icon";
import Text from "../text/text";
import Switch, { SwitchBall, type SwitchSize } from "./switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Set the size of the switch.",
      table: {
        type: { summary: "SwitchSize" },
        defaultValue: { summary: "sm" },
      },
    },
    checked: {
      control: "boolean",
      description: "Determines whether the switch is on or off.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onChange: {
      description: "Callback function triggered when the switch state changes.",
      table: {
        type: { summary: "VoidFunction" },
      },
    },
    label: {
      control: "text",
      description: "Label displayed next to the switch.",
      table: {
        type: { summary: "string" },
      },
    },
    children: {
      description: "Additional elements to render inside the switch component.",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (arg) => {
    const [isAirplaneMode, setIsAirplaneMode] = useState(false);
    const handleisAirplaneModeToggle = () => {
      setIsAirplaneMode((prev) => !prev);
    };

    return (
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Switch
          label="Airplane Mode"
          checked={isAirplaneMode}
          onChange={handleisAirplaneModeToggle}
          {...arg}
        />
        <Text>{isAirplaneMode ? "on" : "off"}</Text>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Default Switch.",
      },
    },
  },
};

export const CustomSwitch: Story = {
  render: (arg) => {
    const [isNightMode, setIsNightMode] = useState(false);
    const switchBallStyle = useMemo(() => {
      return isNightMode ? "bg-[#FFA500]" : "bg-white";
    }, [isNightMode]);

    const handleNightModeToggle = () => {
      setIsNightMode((prev) => !prev);
    };

    return (
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Switch
          label="Night Mode"
          checked={isNightMode}
          onChange={handleNightModeToggle}
          size="lg"
          className={isNightMode ? "bg-yellow-200" : ""}
          {...arg}
        >
          <SwitchBall
            className={cn(
              switchBallStyle,
              "flex items-center justify-center text-xs"
            )}
          >
            {isNightMode ? "on" : "off"}
          </SwitchBall>
          <div
            className={cn(
              "absolute top-1/2 -translate-y-1/2",
              isNightMode ? "left-2" : "right-2"
            )}
          >
            {isNightMode ? (
              <SunIcon size={20} />
            ) : (
              <MoonIcon size={18} color="black" />
            )}
          </div>
        </Switch>
        <Text>{isNightMode ? "on" : "off"}</Text>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "With SwitchBall, you can freely customize the switch to create a unique and desired design.",
      },
    },
  },
};

export const Size: Story = {
  render: () => {
    const [sizeSwitch, setSizeSwitch] = useState(false);

    const sizeList: SwitchSize[] = ["sm", "md", "lg"];
    return (
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        {sizeList.map((size) => {
          return (
            <Switch
              key={size}
              label={size}
              size={size}
              checked={sizeSwitch}
              onChange={() => {
                setSizeSwitch((prev) => !prev);
              }}
            />
          );
        })}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Displays switch in different sizes (small, medium, and large) to demonstrate the size variations.",
      },
    },
  },
};
