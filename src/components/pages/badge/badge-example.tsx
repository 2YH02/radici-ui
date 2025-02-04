import Badge from "../../badge/badge";
import ExampleSection from "../../common/example-section";
import Section from "../../common/section";

const BadgeExample = () => {
  return (
    <Section title="Badge Component Examples">
      {/* Default Buttons */}
      <ExampleSection title="Default Badge">
        <Badge>Badge</Badge>
      </ExampleSection>

      {/* Outline Buttons */}
      <ExampleSection title="Outline Badge">
        <Badge variant="outline">Outline</Badge>
      </ExampleSection>

      {/* Size Variants */}
      <ExampleSection title="Size Variants">
        <Badge size="sm">SM</Badge>
        <Badge size="md">MD</Badge>
      </ExampleSection>
    </Section>
  );
};

export default BadgeExample;
