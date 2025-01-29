import { useState } from "react";
import cn from "../../../utils/cn";
import ExampleSection from "../../common/example-section";
import Section from "../../common/section";
import SearchIcon from "../../icons/search-icon";
import Input, { InputMessage, InputPlaceHolder } from "../../input/input";

const InputExample = () => {
  const [formValues, setFormValues] = useState({
    valueA: "",
    valueB: "",
    valueC: "",
    valueD: "",
    valueE: "",
    valueF: "",
    valueG: "",
    valueH: "",
    valueI: "",
    valueJ: "",
    valueK: "",
  });

  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <Section title="Input Component Examples">
      {/* Default Input */}
      <ExampleSection
        title="Default Input"
        description="A basic input field without additional styling or features."
      >
        <Input
          name="valueA"
          value={formValues.valueA}
          onChange={handleChange}
        />
        <Input
          name="valueA"
          value={formValues.valueA}
          onChange={handleChange}
          disabled
        />
      </ExampleSection>

      {/* With Label and Placeholder */}
      <ExampleSection
        title="With Label and Placeholder"
        description="An input field with a label and placeholder."
      >
        <Input
          name="valueB"
          value={formValues.valueB}
          onChange={handleChange}
          label="e-mail"
          type="email"
          labelFontWeight="bold"
          placeholder="radiciui@radici.com"
        />
      </ExampleSection>

      {/* With Placeholder Effect and Message */}
      <ExampleSection
        title="With Placeholder Effect and Message"
        description="An input field with a message, and placeholder translate effect."
      >
        <Input
          name="valueC"
          value={formValues.valueC}
          onChange={handleChange}
          label="e-mail"
          type="email"
          labelFontWeight="bold"
          placeholder="radiciui@radici.com"
          message="Please enter your e-mail"
          withEffect
        />
      </ExampleSection>

      {/* Add Message and Placeholder with Compound Component */}
      <ExampleSection
        title="With Compound Components for Customization"
        description="An example demonstrating the use of compound components like InputPlaceHolder and InputMessage for advanced customization."
      >
        <Input
          name="valueK"
          label="custom"
          value={formValues.valueK}
          onChange={handleChange}
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
      </ExampleSection>

      {/* With Icon */}
      <ExampleSection
        title="With Icon"
        description="Set an icon in the Input component and use the iconClick prop to handle icon clicks."
      >
        <Input
          name="valueD"
          value={formValues.valueD}
          onChange={handleChange}
          label="with left icon"
          iconLeft={<SearchIcon />}
        />
        <Input
          name="valueE"
          value={formValues.valueE}
          onChange={handleChange}
          label="with right icon"
          iconRight={<SearchIcon />}
        />
        <Input
          name="valueF"
          value={formValues.valueF}
          onChange={handleChange}
          label="with iconClick"
          iconRight={<SearchIcon />}
          iconClick={() => alert("value :" + formValues.valueF)}
        />
      </ExampleSection>

      {/* Custom Input */}
      <ExampleSection
        title="Custom Input"
        description="Customize the Input's style using the className prop with Tailwind CSS classes."
      >
        <Input
          name="valueG"
          value={formValues.valueG}
          onChange={handleChange}
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
      </ExampleSection>

      {/* Input Status Style */}
      <ExampleSection
        title="Input Status Style"
        description="The status prop changes the Input's styles to reflect states like default, error, success, or warning."
      >
        <Input
          name="valueH"
          status="error"
          message="error"
          value={formValues.valueH}
          onChange={handleChange}
        />
        <Input
          name="valueI"
          status="success"
          message="success"
          value={formValues.valueI}
          onChange={handleChange}
        />
        <Input
          name="valueJ"
          status="warning"
          message="warning"
          value={formValues.valueJ}
          onChange={handleChange}
        />
      </ExampleSection>
    </Section>
  );
};

export default InputExample;
