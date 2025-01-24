import { useEffect, useMemo, useState } from "react";
import cn from "../../../utils/cn";
import ExampleSection from "../../common/example-section";
import Section from "../../common/section";
import MoonIcon from "../../icons/moon-icon";
import SunIcon from "../../icons/sun-icon";
import Switch, { SwitchBall, type SwitchSize } from "../../switch/switch";
import Text from "../../text/text";

const sizeList: SwitchSize[] = ["sm", "md", "lg"];

const SwitchExample = () => {
  const [isAirplaneMode, setIsAirplaneMode] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);
  const [sizeSwitch, setSizeSwitch] = useState(false);

  const switchBallStyle = useMemo(() => {
    return isNightMode ? "bg-[#FFA500]" : "bg-white";
  }, [isNightMode]);

  useEffect(() => {
    if (isNightMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isNightMode]);

  const handleisAirplaneModeToggle = () => {
    setIsAirplaneMode((prev) => !prev);
  };
  const handleNightModeToggle = () => {
    setIsNightMode((prev) => !prev);
  };

  return (
    <Section title="Switch Component Examples">
      {/* Default Switch */}
      <ExampleSection title="Default Switch">
        <Switch
          label="Airplane Mode"
          checked={isAirplaneMode}
          onChange={handleisAirplaneModeToggle}
        />
        <Text>{isAirplaneMode ? "on" : "off"}</Text>
      </ExampleSection>

      {/* Custom Switch */}
      <ExampleSection title="Custom Switch">
        <Switch
          label="Night Mode"
          checked={isNightMode}
          onChange={handleNightModeToggle}
          size="lg"
          className={isNightMode ? "bg-yellow-200" : ""}
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
      </ExampleSection>

      {/* Size Variants */}
      <ExampleSection title="Size Variants">
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
      </ExampleSection>
    </Section>
  );
};

export default SwitchExample;
