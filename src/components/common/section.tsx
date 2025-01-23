import Text from "../text/text";

const Section = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="space-y-8 p-6">
      {title && (
        <Text
          as="h1"
          typography="t2"
          fontWeight="bold"
          textAlign="center"
          display="block"
        >
          {title}
        </Text>
      )}
      {children}
    </div>
  );
};

export default Section;
