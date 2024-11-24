import { useRef, useState } from "react";

function ToDo() {
  const [toDo, setToDo] = useState([]);
  const [input, setInput] = useState("");
  const [inc, setInc] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    setToDo([...toDo, input]);
  };
  return (
    <div style={{ textAlign: "center", background: "pink", padding: "10px" }}>
      <h1>ToDO List</h1>
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleClick}> Submit</button>
      </form>
      <ul>
        {toDo.map((todos, i) => {
          return <li key={i}>{todos}</li>;
        })}
      </ul>
      <h1>{inc}</h1>
      <button onClick={() => setInc((p) => p - 1)}>-</button>
      <button onClick={() => setInc((p) => p + 1)}>+</button>
    </div>
  );
}

export default ToDo;
