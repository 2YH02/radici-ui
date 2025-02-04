import cn from "../../utils/cn";

const baseStyles =
  "rounded-2xl bg-gray-950 text-white dark:bg-white dark:text-gray-950";

const sizeVariants = {
  sm: "px-5 py-1 text-sm",
  md: "px-6 py-[6px] text-md",
};

const borderVariants = {
  outline:
    "bg-white border border-solid border-gray-950 text-gray-950 dark:bg-gray-950 dark:border-white dark:text-white",
  default: "",
};

export type BadgeSize = keyof typeof sizeVariants;
export type BadgeVariants = keyof typeof borderVariants;

interface BadgeProps {
  size?: BadgeSize;
  variant?: BadgeVariants;
  className?: React.ComponentProps<"button">["className"];
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  size = "sm",
  variant = "default",
  className,
  children,
}) => {
  const sizeVariantStyles = sizeVariants[size];
  const borderVariantsStyles = borderVariants[variant];

  return (
    <span
      className={cn(
        baseStyles,
        sizeVariantStyles,
        borderVariantsStyles,
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
