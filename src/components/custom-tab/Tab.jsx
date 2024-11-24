import { useState } from "react";

function Tab({ tabContent, onChange }) {
  const [currentTab, setCurrentTab] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTab(getCurrentIndex);
    onChange(getCurrentIndex);
  }
  return (
    <div className="wrapper">
      <div className="heading">
        {tabContent.map((tabItem, index) => (
          <div
            className={`tab-item ${currentTab === index ? "active" : ""}`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{ color: "red", fontSize: "30px" }}>
        {tabContent[currentTab] && tabContent[currentTab].content}
      </div>
    </div>
  );
}

export default Tab;
