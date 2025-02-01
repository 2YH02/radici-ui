import { borderMainColor } from "../../App";
import cn from "../../utils/cn";
import Text from "../text/text";

const ExampleSection = ({
  title,
  description,
  className,
  children,
}: {
  title: string;
  description?: string | string[];
  className?: React.ComponentProps<"div">["className"];
  children: React.ReactNode;
}) => {
  return (
    <section>
      <Text typography="t2" fontWeight="bold" className="mb-3">
        {title}
      </Text>
      {description && <Description description={description} />}

      <div
        className={cn(
          "flex flex-wrap gap-4 justify-center items-center py-14 px-8 border",
          borderMainColor,
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};

const Description = ({ description }: { description: string | string[] }) => {
  if (typeof description === "string") {
    return (
      <Text
        typography="t5"
        display="block"
        className="mb-3 text-gray-500 dark:text-[#999]"
      >
        {description}
      </Text>
    );
  } else {
    return (
      <div className="mb-3">
        {description.map((v) => {
          return (
            <Text
              key={v}
              typography="t5"
              className="mb text-gray-500 dark:text-[#999]"
            >
              {v}
            </Text>
          );
        })}
      </div>
    );
  }
};

export default ExampleSection;
