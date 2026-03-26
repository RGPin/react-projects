import { useState } from "react";

export default function Tabs({ tabs, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  return (
    <div className="wrapper">
      <div className="heading">
        {tabs.map((item) => (
          <div key={item.label}>
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
