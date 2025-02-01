import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import styles from "./tabs.module.css";
import cn from "../../utils/cn";

interface TabsProps {
  sticky?: boolean;
  activeBorderColor?: string;
  className?: React.ComponentProps<"div">["className"];
  children: React.ReactNode;
}

const TabsContext = createContext<{
  activeTab: string | null;
  setActiveTab: (value: string) => void;
  activeBorderColor: string;
  sticky: boolean;
} | null>(null);

const Tabs: React.FC<TabsProps> = ({
  sticky = false,
  activeBorderColor = "border-black dark:border-white",
  className,
  children,
}) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <TabsContext.Provider
      value={{ activeTab, setActiveTab, activeBorderColor, sticky }}
    >
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
};

export default Tabs;

export const TabList = ({
  className,
  children,
}: {
  className?: React.ComponentProps<"div">["className"];
  children: React.ReactNode;
}) => {
  const tabsContext = useContext(TabsContext);

  if (!tabsContext) {
    throw new Error("TabList should be used with the Tabs component.");
  }
  const { setActiveTab, sticky } = tabsContext;

  useEffect(() => {
    const firstTab = Children.toArray(children)[0] as React.ReactElement;
    setActiveTab(firstTab.props.value);
  }, []);

  return (
    <div
      className={cn(
        "flex bg-white dark:bg-[#111]",
        sticky && "sticky top-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export const TabButton = ({
  value,
  className,
  onClick,
  children,
}: {
  value: string;
  className?: React.ComponentProps<"div">["className"];
  onClick?: VoidFunction;
  children: React.ReactNode;
}) => {
  const tabsContext = useContext(TabsContext);

  if (!tabsContext) {
    throw new Error("TabButton should be used with the Tabs component.");
  }
  const { activeTab, setActiveTab, activeBorderColor } = tabsContext;

  return (
    <button
      className={cn(
        "grow p-3 border-b border-solid border-[#ccc] hover:bg-[#ececec] dark:border-[#333] hover:dark:bg-[#222]",
        value === activeTab && activeBorderColor,
        className
      )}
      onClick={() => {
        setActiveTab(value);
        if (onClick) onClick();
      }}
    >
      {children}
    </button>
  );
};

export const TabContent = ({
  value,
  children,
}: {
  children: React.ReactNode;
  value: string;
}) => {
  const tabsContext = useContext(TabsContext);

  if (!tabsContext) {
    throw new Error("TabContent should be used with the Tabs component.");
  }

  const { activeTab } = tabsContext;

  if (activeTab === value) {
    return <div className={styles.tabContent}>{children}</div>;
  }
};
