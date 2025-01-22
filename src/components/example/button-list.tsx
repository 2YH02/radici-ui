import { Button, type ButtonSize, type ButtonColor } from "../button";
import SunIcon from "../icons/sun-icon";

const ButtonList = () => {
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
    <div className="space-y-8 p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-center">
        Button Component Examples
      </h1>

      {/* Default Buttons */}
      <ButtonSection title="Default Buttons">
        {colors.map((color) => (
          <Button key={color} color={color} className="m-2">
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </Button>
        ))}
      </ButtonSection>

      {/* Outlined Buttons */}
      <ButtonSection title="Outlined Buttons">
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
      </ButtonSection>

      {/* Borderless Buttons */}
      <ButtonSection title="Borderless Buttons">
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
      </ButtonSection>

      {/* Size Variants */}
      <ButtonSection title="Size Variants">
        {sizeList.map((size) => (
          <div key={size}>
            <Button color="black" size={size} className="m-2">
              {size.toUpperCase()}
            </Button>
          </div>
        ))}
      </ButtonSection>

      {/* Full Width Button */}
      <ButtonSection title="Full Width Button">
        <Button fullWidth className="m-2">
          Full Width
        </Button>
      </ButtonSection>

      {/* Buttons with Icons */}
      <ButtonSection title="Buttons with Icons">
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
            className="m-2"
            appearance="borderless"
            color="red"
            aria-label="Red Sun Icon Button"
          />
        </div>
      </ButtonSection>

      {/* Buttons with Click Action */}
      <ButtonSection title="Buttons with Click Action">
        <div className="flex justify-center">
          <Button clickAction className="m-2">
            With Action
          </Button>
        </div>
      </ButtonSection>
    </div>
  );
};

const ButtonSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section>
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <div className="flex flex-wrap gap-4 items-center">
      {children}
    </div>
  </section>
);

export default ButtonList;
