import { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };

  const handleMultiSelection = (currentId) => {
    setMultiple((prevMultiple) =>
      prevMultiple.includes(currentId)
        ? prevMultiple.filter((id) => id !== currentId)
        : [...prevMultiple, currentId],
    );
  };

  console.log(multiple);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              onClick={
                enableMultiSelection
                  ? () => handleMultiSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)
              }
              className="item"
              key={dataItem.id}
            >
              <div className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.includes(dataItem.id) && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
              {/* {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
