import Tab from "../custom-tab/Tab";
import "./custom.css";

function RandomComponent() {
  return <h1>Some random content</h1>;
}

function CustomTab() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>Hii my name kriti</div>,
    },
    {
      label: "Tab 2",
      content: <div>I have been learning web dev</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tab tabContent={tabs} onChange={handleChange} />;
}

export default CustomTab;
