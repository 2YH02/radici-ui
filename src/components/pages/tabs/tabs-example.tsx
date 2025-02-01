import ExampleSection from "../../common/example-section";
import Section from "../../common/section";
import Tabs, { TabButton, TabContent, TabList } from "../../tabs/tabs";
import Text from "../../text/text";

const TabsExample = () => {
  return (
    <Section title="Tabs Component Examples">
      {/* Default Tabs */}
      <ExampleSection title="Default Tabs">
        <Tabs>
          <TabList>
            <TabButton value="1">
              <Text>tab 1</Text>
            </TabButton>
            <TabButton value="2">
              <Text>tab 2</Text>
            </TabButton>
            <TabButton value="3">
              <Text>tab 3</Text>
            </TabButton>
            <TabButton value="4">
              <Text>tab 4</Text>
            </TabButton>
          </TabList>
          <TabContent value="1">
            <Text>content 1</Text>
          </TabContent>
          <TabContent value="2">
            <Text>content 2</Text>
          </TabContent>
          <TabContent value="3">
            <Text>content 3</Text>
          </TabContent>
          <TabContent value="4">
            <Text>content 4</Text>
          </TabContent>
        </Tabs>
      </ExampleSection>

      {/* With Sticky Position and Changing the Active Border Color */}
      <ExampleSection
        title="With Sticky Position and Changing the Active Border Color"
        description={[
          "With the sticky property, the Tabs component remains fixed at the top while scrolling.",
          "The activeBorderColor property lets you set the active tab color using Tailwind CSS's border-[userColor] classes.",
        ]}
      >
        <Tabs sticky activeBorderColor="border-red-300 dark:border-blue-300">
          <TabList>
            <TabButton value="1">
              <Text>tab 1</Text>
            </TabButton>
            <TabButton value="2">
              <Text>tab 2</Text>
            </TabButton>
            <TabButton value="3">
              <Text>tab 3</Text>
            </TabButton>
          </TabList>
          <TabContent value="1">
            {Array.from({ length: 30 }, (_, index) => (
              <Text key={index} display="block">
                content 1
              </Text>
            ))}
          </TabContent>
          <TabContent value="2">
            <Text>content 2</Text>
          </TabContent>
          <TabContent value="3">
            <Text>content 3</Text>
          </TabContent>
        </Tabs>
      </ExampleSection>
    </Section>
  );
};

export default TabsExample;
