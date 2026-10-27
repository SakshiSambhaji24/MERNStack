import React, { useState } from "react";

function App() {
  const [data, setData] = useState("");

  // Read operation
  const readFile = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = (event) => {
      setData(event.target.result);
    };

    reader.readAsText(file);
  };

  // Write operation
  const writeFile = () => {
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "output.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h2>File Handling in React JS</h2>

      {/* Read File */}
      <input type="file" onChange={readFile} />

      <br /><br />

      <textarea
        value={data}
        onChange={(e) => setData(e.target.value)}
        rows="10"
        cols="40"
      />

      <br /><br />

      {/* Write File */}
      <button onClick={writeFile}>
        Write File
      </button>
    </div>
  );
}

export default App;