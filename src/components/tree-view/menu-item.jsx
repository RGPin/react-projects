import { useState } from "react";
import MenuList from "./menu-list";

export default function MenuItem({ item }) {
  const [displayChildren, setDisplayChildren] = useState({});
  function handleToggleChildren(label) {
    setDisplayChildren({
      ...displayChildren,
      [label]: !displayChildren[label],
    });
  }
  return (
    <li>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayChildren[item.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
