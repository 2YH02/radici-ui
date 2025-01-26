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
  description?: string;
  className?: React.ComponentProps<"div">["className"];
  children: React.ReactNode;
}) => (
  <section>
    <Text typography="t2" fontWeight="bold" className="mb-3">
      {title}
    </Text>
    {description && (
      <Text typography="t5" display="block" className="mb-3 text-gray-500 dark:text-[#999]">
        {description}
      </Text>
    )}

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

export default ExampleSection;
