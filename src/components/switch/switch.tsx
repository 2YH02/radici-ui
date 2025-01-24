import { createContext, useContext } from "react";
import cn from "../../utils/cn";

const sizeVariants = {
  sm: "h-6 w-11",
  md: "h-7 w-14",
  lg: "h-8 w-16",
};

const ballSizeVariants = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};
const ballTranslateVariants = {
  sm: "translate-x-6",
  md: "translate-x-8",
  lg: "translate-x-9",
};

export type SwitchSize = keyof typeof sizeVariants;

interface SwitchProps {
  size?: SwitchSize;
  checked?: boolean;
  onChange?: VoidFunction;
  label?: string;
  children?: React.ReactNode;
  className?: React.ComponentProps<"button">["className"];
}

const SwitchContext = createContext<{ checked: boolean; size: SwitchSize }>({
  checked: false,
  size: "sm",
});

const Switch: React.FC<SwitchProps> = ({
  size = "sm",
  checked = false,
  onChange,
  label,
  className,
  children,
}) => {
  const sizeVariantStyles = sizeVariants[size];

  return (
    <SwitchContext.Provider value={{ checked, size }}>
      <div className="flex items-center">
        {label && (
          <span className="mr-3 text-[#111] dark:text-white">{label}</span>
        )}
        <button
          onClick={onChange}
          role="switch"
          aria-checked={checked}
          className={cn(
            "relative inline-flex items-center rounded-full transition-colors",
            checked ? "bg-blue-500" : "bg-gray-300",
            sizeVariantStyles,
            className
          )}
        >
          {children ? children : <SwitchBall />}
        </button>
      </div>
    </SwitchContext.Provider>
  );
};

export const SwitchBall: React.FC<{
  className?: React.ComponentProps<"span">["className"];
  children?: React.ReactNode;
}> = ({ children, className }) => {
  const { size, checked } = useContext(SwitchContext);

  const sizeVariantStyles = ballSizeVariants[size];
  const transitionStyles = ballTranslateVariants[size];

  return (
    <span
      className={cn(
        "relative transform transition-transform inline-block w-4 h-4 bg-white rounded-full ",
        checked ? transitionStyles : "translate-x-1",
        sizeVariantStyles,
        className
      )}
    >
      {children}
    </span>
  );
};

export default Switch;
