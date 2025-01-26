import {
  Children,
  createContext,
  isValidElement,
  useContext,
  useId,
  useMemo,
  useState,
} from "react";
import cn from "../../utils/cn";

const statusVariants = {
  default: "border-gray-300",
  error: "border-red-400",
  success: "border-blue-400",
  warning: "border-yellow-400",
};

const messageStatusVariants = {
  default: "text-gray-500 dark:border-[#999]",
  error: "text-red-400",
  success: "text-blue-400",
  warning: "text-yellow-400",
};

export type InputStatus = keyof typeof statusVariants;
export type InputType = "text" | "email" | "password" | "url";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  type?: InputType;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  message?: string;
  status?: InputStatus;
  withEffect?: boolean;
  iconClick?: VoidFunction;
  labelFontWeight?: "bold" | "normal";
  className?: React.ComponentProps<"div">["className"];
  children?: React.ReactNode[];
}

const InputContext = createContext<{
  value: string;
  withEffect: boolean;
  status: InputStatus;
} | null>(null);

const Input: React.FC<InputProps> = ({
  value = "",
  onChange,
  label,
  disabled = false,
  placeholder,
  type = "text",
  iconRight,
  iconLeft,
  message,
  status = "default",
  withEffect = false,
  iconClick,
  labelFontWeight,
  className,
  children,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const id = useId();

  const [inputPlaceHolder, inputMessage] = useMemo(() => {
    let placeHolder = null;
    let message = null;
    Children.forEach(children, (child) => {
      if (isValidElement(child)) {
        if (child.type === InputPlaceHolder) {
          placeHolder = child;
        } else if (child.type === InputMessage) {
          message = child;
        }
      }
    });
    return [placeHolder, message];
  }, [children]);

  const IconContainer = iconClick ? "button" : "span";
  return (
    <InputContext.Provider value={{ value, withEffect, status }}>
      <div className={cn("w-full")}>
        {label && (
          <label
            htmlFor={id}
            className={cn(
              "mb-1 text-sm text-gray-700 dark:text-gray-200",
              labelFontWeight === "bold" ? "font-bold" : "font-medium"
            )}
          >
            {label}
          </label>
        )}
        <span
          className={cn(
            "relative flex items-center border rounded-md overflow-hidden p-2 bg-white transition-shadow text-inherit dark:bg-[#111] dark:text-white",
            statusVariants[status],
            disabled ? "border-gray-100 dark:border-gray-500" : "bg-white",
            isFocused && "shadow-sm border-gray-400",
            className
          )}
        >
          {iconLeft && (
            <IconContainer className="mr-2" onClick={iconClick}>
              {iconLeft}
            </IconContainer>
          )}
          <div className="flex-1 relative">
            {!placeholder && inputPlaceHolder ? (
              inputPlaceHolder
            ) : (
              <InputPlaceHolder>{placeholder}</InputPlaceHolder>
            )}

            <input
              id={id}
              className="w-full focus:outline-none bg-transparent"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              value={value}
              onChange={onChange}
              type={type}
              disabled={disabled}
              {...props}
            />
          </div>
          {iconRight && (
            <IconContainer className="mr-2" onClick={iconClick}>
              {iconRight}
            </IconContainer>
          )}
          {disabled && (
            <div className="absolute top-0 left-0 w-full h-full cursor-not-allowed bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)]" />
          )}
        </span>
        {!message && inputMessage ? (
          inputMessage
        ) : (
          <InputMessage>{message}</InputMessage>
        )}
      </div>
    </InputContext.Provider>
  );
};

export const InputPlaceHolder = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: React.ComponentProps<"span">["className"];
}) => {
  const inputContext = useContext(InputContext);

  if (!inputContext) {
    throw new Error(
      "InputPlaceHolder should be used with the Input component."
    );
  }

  const { value, withEffect } = inputContext;

  return (
    <div
      className={cn(
        "h-full w-full absolute top-0 left-1 text-gray-300 dark:text-[#777] transition-all pointer-events-none select-none",
        withEffect
          ? value.length > 0
            ? "translate-x-full opacity-0 duration-200"
            : "opacity-100 duration-200"
          : value.length > 0
          ? "opacity-0 duration-0"
          : "opacity-100 duration-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export const InputMessage = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: React.ComponentProps<"span">["className"];
}) => {
  const inputContext = useContext(InputContext);

  if (!inputContext) {
    throw new Error("InputMessage should be used with the Input component.");
  }

  const { status } = inputContext;

  const messageColor = messageStatusVariants[status];

  return (
    <div
      className={cn(
        "h-full w-full relative mt-1 text-xs",
        messageColor,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Input;
