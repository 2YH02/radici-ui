import cn from "../../utils/cn";

export type ButtonColor =
  | "black"
  | "white"
  | "blue"
  | "red"
  | "purple"
  | "gray"
  | "rose";
export type Appearance = "filled" | "outlined" | "borderless";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  appearance?: Appearance;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  clickAction?: boolean;
  className?: React.ComponentProps<"button">["className"];
}

const baseStyles = "duration-200 rounded outline-none appearance-none";

const colorVariants = {
  black: "bg-gray-950 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-50",
  white: "bg-white text-black hover:bg-gray-50",
  blue: "bg-blue-500 text-white hover:bg-blue-600",
  red: "bg-red-500 text-white hover:bg-red-600",
  purple: "bg-purple-500 text-white hover:bg-purple-600",
  gray: "bg-gray-500 text-white hover:bg-gray-600",
  rose: "bg-rose-500 text-white hover:bg-rose-600",
};

const borderVariants = {
  black:
    "bg-transparent border border-solid border-gray-950 text-gray-950 hover:bg-gray-200 hover:bg-opacity-60",
  white:
    "bg-transparent border border-solid border-white text-white hover:bg-gray-50 hover:bg-opacity-60",
  blue: "bg-transparent border border-solid border-blue-500 text-blue-500 hover:bg-blue-200 hover:bg-opacity-40",
  red: "bg-transparent border border-solid border-red-500 text-red-500 hover:bg-red-200 hover:bg-opacity-40",
  purple:
    "bg-transparent border border-solid border-purple-500 text-purple-500 hover:bg-purple-200 hover:bg-opacity-40",
  gray: "bg-transparent border border-solid border-gray-500 text-gray-500 hover:bg-gray-200 hover:bg-opacity-40",
  rose: "bg-transparent border border-solid border-rose-500 text-rose-500 hover:bg-rose-200 hover:bg-opacity-40",
};

const sizeVariants = {
  sm: "px-3 py-2",
  md: "px-6 py-2",
  lg: "px-10 py-4",
};

export const Button: React.FC<ButtonProps> = ({
  color = "black",
  appearance = "filled",
  className,
  size = "md",
  fullWidth = false,
  icon,
  clickAction = false,
  children,
  ...props
}) => {
  const colorVariantStyles = colorVariants[color];
  const borderVariantStyles =
    appearance === "filled"
      ? ""
      : appearance === "borderless"
      ? `${borderVariants[color]} border-none`
      : borderVariants[color];
  const sizeVariantStyles = sizeVariants[size];
  const widthStyle = fullWidth ? "w-full" : "";

  const withIconStyle = icon
    ? children
      ? "flex gap-2 items-center justify-center"
      : "px-2 py-2"
    : "";

  const clickActionStyle = clickAction ? "active:scale-90" : "";
  return (
    <button
      className={cn(
        baseStyles,
        colorVariantStyles,
        borderVariantStyles,
        sizeVariantStyles,
        widthStyle,
        withIconStyle,
        clickActionStyle,
        clickActionStyle,
        className
      )}
      {...props}
    >
      {icon ? (
        <>
          <span>{icon}</span>
          <span>{children}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};
