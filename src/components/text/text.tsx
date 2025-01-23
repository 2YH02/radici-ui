import cn from "../../utils/cn";

const typographyVariants = {
  t1: "text-[30px] leading-[1.35]",
  t2: "text-[26px] leading-[1.34]",
  t3: "text-[22px] leading-[1.4]",
  t4: "text-[20px] leading-[1.45]",
  t5: "text-[16px] leading-[1.5]",
  t6: "text-[14px] leading-[1.5]",
  t7: "text-[12px] leading-[1.5]",
};

export type Typography = keyof typeof typographyVariants;

interface TextProps {
  typography?: Typography;
  display?: "inline" | "block" | "inline-block";
  textAlign?: "left" | "center" | "right";
  fontWeight?: "normal" | "bold" | "lighter" | "bolder";
  as?: keyof JSX.IntrinsicElements;
  className?: React.ComponentProps<"span">["className"];
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
  typography = "t5",
  display = "inline-block",
  textAlign = "left",
  fontWeight = "normal",
  as = "span",
  className,
  children,
}) => {
  const Component = as;

  const textStyle = cn(
    typographyVariants[typography],
    display === "inline"
      ? "inline"
      : display === "block"
      ? "block"
      : "inline-block",
    textAlign === "left"
      ? "text-left"
      : textAlign === "center"
      ? "text-center"
      : "text-right",
    fontWeight === "normal"
      ? "font-normal"
      : fontWeight === "bold"
      ? "font-bold"
      : fontWeight === "lighter"
      ? "font-light"
      : "font-extrabold"
  );

  return (
    <Component
      className={cn(textStyle, "text-[#111] dark:text-white", className)}
    >
      {children}
    </Component>
  );
};

export default Text;
