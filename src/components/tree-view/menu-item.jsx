import { useState } from "react";
import MenuList from "./menu-list";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li>
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? (
              <FaMinus color="white" size={25} />
            ) : (
              <FaPlus color="white" size={25} />
            )}
          </span>
        ) : null}
      </div>
      {item && item.children && item.children.length > 0 && isOpen ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
