import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import cn from "../../utils/cn";
import SearchIcon from "../icons/search-icon";
import Input, { InputMessage, InputPlaceHolder } from "./input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "text",
      description: "Set the value of the input field.",
      table: {
        type: { summary: "string" },
      },
    },
    onChange: {
      control: "text",
      description: "Handle the input's value change event.",
      table: {
        type: { summary: "VoidFunction" },
      },
    },
    label: {
      control: "text",
      description: "Add a label to describe the input field.",
      table: {
        type: { summary: "string" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disable the input to prevent user interaction.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    placeholder: {
      control: "text",
      description: "Set the placeholder text for the input field.",
      table: {
        type: { summary: "string" },
      },
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "url"],
      description:
        "Define the input type, such as text, email, password, or url.",
      table: {
        type: { summary: "InputType" },
        defaultValue: { summary: "text" },
      },
    },
    iconRight: {
      control: "select",
      options: [false, <SearchIcon />],
      description: "Add an icon to the right side of the input field.",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "false" },
      },
    },
    iconLeft: {
      control: "select",
      options: [false, <SearchIcon />],
      description: "Add an icon to the left side of the input field.",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "false" },
      },
    },
    message: {
      control: "text",
      description:
        "Provide a helper or validation message below the input field.",
      table: {
        type: { summary: "string" },
      },
    },
    status: {
      control: "select",
      options: ["default", "error", "success", "warning"],
      description:
        "Set the input's visual state, such as default, error, success, or warning.",
      table: {
        type: { summary: "InputStatus" },
        defaultValue: { summary: "default" },
      },
    },
    withEffect: {
      control: "boolean",
      description:
        "Enable placeholder animation effects based on input focus and value.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "falsee" },
      },
    },
    iconClick: {
      control: "boolean",
      description: "Handle click events on the input's icon.",
      table: {
        type: { summary: "VoidFunction" },
      },
    },
    labelFontWeight: {
      control: "select",
      options: ["normal", "bold"],
      description: "Set the font weight of the input label (bold or normal).",
      table: {
        type: { summary: "'normal', 'bold'" },
        defaultValue: { summary: "normal" },
      },
    },
    children: {
      description:
        "Render custom components like InputPlaceHolder or InputMessage as children.",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
};

export const WithLabelAndPlaceholder: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="e-mail"
          type="email"
          placeholder="radiciui@radici.com"
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "An input field with a label and placeholder.",
      },
    },
  },
};

export const WithPlaceholderEffectandMessage: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="e-mail"
          type="email"
          labelFontWeight="bold"
          placeholder="radiciui@radici.com"
          message="Please enter your e-mail"
          withEffect
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "An input field with a message, and placeholder translate effect.",
      },
    },
  },
};

export const AddMessageAndPlaceholderwithCompoundComponent: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Input
          name="valueK"
          label="custom"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          withEffect
        >
          <InputPlaceHolder className="duration-500">
            <span className="block rounded-full  absolute left-9 top-[13px] w-3 h-1 bg-[#444] dark:bg-[#eee] transform -rotate-45" />
            <span className="block rounded-full  absolute left-9 top-[7px] w-3 h-1 bg-[#444] dark:bg-[#eee] transform rotate-45" />
            <span className="block rounded-full absolute left-3 top-1/2 -translate-y-1/2 w-8 h-1 bg-[#444] dark:bg-[#eee]" />
          </InputPlaceHolder>
          <InputMessage>
            <span className="inline-block w-2 h-2 bg-red-300 mr-1 rounded-full" />
            <span className="inline-block w-2 h-2 bg-green-300 mr-1 rounded-full" />
            <span className="inline-block w-2 h-2 bg-blue-300 mr-1 rounded-full" />
          </InputMessage>
        </Input>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "An example demonstrating the use of compound components like InputPlaceHolder and InputMessage for advanced customization.",
      },
    },
  },
};

export const WithIcon: Story = {
  render: () => {
    const [valueA, setValueA] = useState("");
    const [valueB, setValueB] = useState("");
    const [valueC, setValueC] = useState("");
    return (
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Input
          value={valueA}
          onChange={(e) => setValueA(e.target.value)}
          label="with left icon"
          iconLeft={<SearchIcon />}
        />
        <Input
          value={valueB}
          onChange={(e) => setValueB(e.target.value)}
          label="with right icon"
          iconRight={<SearchIcon />}
        />
        <Input
          value={valueC}
          onChange={(e) => setValueC(e.target.value)}
          label="with iconClick"
          iconRight={<SearchIcon />}
          iconClick={() => alert("value :" + valueC)}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Set an icon in the Input component and use the iconClick prop to handle icon clicks.",
      },
    },
  },
};

export const CustomInput: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={cn(
            "rounded-3xl pl-4 bg-red-50",
            isFocused ? "border-red-300" : "border-blue-100"
          )}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Customize the Input's style using the className prop with Tailwind CSS classes.",
      },
    },
  },
};

export const InputStatusStyle: Story = {
  render: () => {
    const [valueA, setValueA] = useState("");
    const [valueB, setValueB] = useState("");
    const [valueC, setValueC] = useState("");
    return (
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Input
          status="error"
          message="error"
          value={valueA}
          onChange={(e) => setValueA(e.target.value)}
        />
        <Input
          status="success"
          message="success"
          value={valueB}
          onChange={(e) => setValueB(e.target.value)}
        />
        <Input
          status="warning"
          message="warning"
          value={valueC}
          onChange={(e) => setValueC(e.target.value)}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "The status prop changes the Input's styles to reflect states like default, error, success, or warning.",
      },
    },
  },
};
