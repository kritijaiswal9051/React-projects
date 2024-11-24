import { useState } from "react";
import data from "./data";
import "./Accordian.css";

function Accordian() {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId);
  };
  return (
    <div className="acc-wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem, i) => (
            <div
              key={i}
              onClick={() => handleSingleSelection(dataItem.id)}
              className="item"
            >
              <div className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="acc-content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
