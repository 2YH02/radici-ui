import { Button, type ButtonColor, type ButtonSize } from "../../button";
import ExampleSection from "../../common/example-section";
import Section from "../../common/section";
import SunIcon from "../../icons/sun-icon";

const ButtonExample = () => {
  const colors: ButtonColor[] = [
    "black",
    "white",
    "blue",
    "red",
    "purple",
    "gray",
    "rose",
  ];

  const sizeList: ButtonSize[] = ["sm", "md", "lg"];

  return (
    <Section title="Button Component Examples">
      {/* Default Buttons */}
      <ExampleSection title="Default Buttons">
        {colors.map((color) => (
          <Button key={color} color={color} className="m-2">
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </Button>
        ))}
      </ExampleSection>

      {/* Outlined Buttons */}
      <ExampleSection title="Outlined Buttons">
        {colors.map((color) => (
          <Button
            key={color}
            color={color}
            appearance="outlined"
            className="m-2"
          >
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </Button>
        ))}
      </ExampleSection>

      {/* Borderless Buttons */}
      <ExampleSection title="Borderless Buttons">
        {colors.map((color) => (
          <Button
            key={color}
            color={color}
            appearance="borderless"
            className="m-2"
          >
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </Button>
        ))}
      </ExampleSection>

      {/* Size Variants */}
      <ExampleSection title="Size Variants">
        {sizeList.map((size) => (
          <div key={size}>
            <Button color="black" size={size} className="m-2">
              {size.toUpperCase()}
            </Button>
          </div>
        ))}
      </ExampleSection>

      {/* Full Width Button */}
      <ExampleSection title="Full Width Button">
        <Button fullWidth className="m-2">
          Full Width
        </Button>
      </ExampleSection>

      {/* Buttons with Icons */}
      <ExampleSection title="Buttons with Icons">
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button
            icon={<SunIcon />}
            className="m-2"
            aria-label="Sun Icon Button"
          >
            With Icon
          </Button>
          <Button
            icon={<SunIcon />}
            className="m-2"
            aria-label="Sun Icon Only"
          />
          <Button
            icon={<SunIcon color="#ef4444" />}
            className="m-2 flex flex-col justify-center gap-0 text-xs w-14 h-14 p-0"
            appearance="borderless"
            aria-label="Sun Icon Button"
            clickAction
          >
            Icon
          </Button>
          <Button
            icon={<SunIcon color="#ef4444" />}
            className="m-2"
            appearance="borderless"
            color="red"
            aria-label="Red Sun Icon Button"
          />
        </div>
      </ExampleSection>

      {/* Buttons with Click Action */}
      <ExampleSection title="Buttons with Click Action">
        <div className="flex justify-center">
          <Button clickAction className="m-2">
            With Action
          </Button>
        </div>
      </ExampleSection>
    </Section>
  );
};

export default ButtonExample;
