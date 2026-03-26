import { useState } from "react";

export default function Tabs({ tabs, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(index) {
    setCurrentTabIndex(index);
    onChange(index);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabs.map((item, index) => (
          <div onClick={() => handleOnClick(index)} key={item.label}>
            <span className="label">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabs[currentTabIndex] && tabs[currentTabIndex].content}
      </div>
    </div>
  );
}
