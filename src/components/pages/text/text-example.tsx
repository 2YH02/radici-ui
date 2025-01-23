import ExampleSection from "../../common/example-section";
import Section from "../../common/section";
import Text, { type Typography } from "../../text/text";

const TextExample = () => {
  const typographyList: Typography[] = [
    "t1",
    "t2",
    "t3",
    "t4",
    "t5",
    "t6",
    "t7",
  ];

  return (
    <Section title="Text Component Examples">
      <ExampleSection title="Typography" className="flex-col items-start">
        {typographyList.map((typography) => {
          return (
            <Text typography={typography}>This is a {typography} text</Text>
          );
        })}
      </ExampleSection>
      <ExampleSection title="Bold" className="flex-col items-start">
        <Text fontWeight="bold">Bold Text</Text>
      </ExampleSection>
    </Section>
  );
};

export default TextExample;
