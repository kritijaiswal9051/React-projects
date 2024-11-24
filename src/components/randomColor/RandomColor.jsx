import { useEffect, useState } from "react";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#154815");

  function randomNumber(length) {
    return Math.floor(Math.random() * length);
  }
  const handleRandomHexColor = () => {
    // #678678
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomNumber(hex.length)];
    }
    setColor(hexColor);
  };
  const handleRandomRgbColor = () => {
    const r = randomNumber(256);
    const g = randomNumber(256);
    const b = randomNumber(256);
    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") handleRandomRgbColor();
    else handleRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        marginTop: "10px",
        width: "100vw",
        height: "100vh",
        background: color,
        textAlign: "center",
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB color</button>
      <button
        onClick={
          typeOfColor === "hex" ? handleRandomHexColor : handleRandomRgbColor
        }
      >
        Genrate Random Color
      </button>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          color: "#fff",
          fontSize: "50px",
          marginTop: "50px",
          flexDirection: "column",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <p>{color}</p>
      </div>
    </div>
  );
}

export default RandomColor;

// function RandomColor() {
//   const [typeOfColor, setTypeOfColor] = useState("hex");
//   const [color, setColor] = useState("#586244");

//   function randomNumber(length) {
//     return Math.floor(Math.random() * length);
//   }
//   const handleRandomHexColor = () => {
//     const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//     let hexColor = "#";
//     for (let i = 0; i < 6; i++) {
//       hexColor += hex[randomNumber(hex.length)];
//     }
//     setColor(hexColor);
//   };
//   const handleRandomRgbColor = () => {
//     const r = randomNumber(256);
//     const g = randomNumber(256);
//     const b = randomNumber(256);
//     setColor(`rgb(${r},${g},${b})`);
//   };

//   return (
//     <div
//       style={{
//         width: "100vw",
//         height: "100vh",
//         background: color,
//         textAlign: "center",
//       }}
//     >
//       <button onClick={() => setTypeOfColor("hex")}>HEX Color</button>
//       <button onClick={() => setTypeOfColor("rgb")}>RGB Color</button>
//       <button
//         onClick={
//           typeOfColor === "hex" ? handleRandomHexColor : handleRandomRgbColor
//         }
//       >
//         Genrate Random Color
//       </button>
//       <div>
//         <h2>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h2>
//         <p>{color}</p>
//       </div>
//     </div>
//   );
// }

// export default RandomColor;
