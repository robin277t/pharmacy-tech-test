import logo from "./logo.svg";
import "./App.css";
import ShowScripts from "./components/ShowScripts";
import AddScripts from  "./components/AddScripts"
import { useState } from "react";

function App() {
  const [shownElement, setShownElement] = useState(null);

  const updateShownElement = (type) => {
    setShownElement(type);
    console.log(shownElement);
  };

  if (shownElement === "show") {
    return <ShowScripts />;
  }

  if (shownElement === "add") {
    return <AddScripts />;
  }

  return (
    <div className="App">
      <button
        onClick={() => {
          updateShownElement("show");
        }}
      >
        Show Scripts
      </button>
      <button
        onClick={() => {
          updateShownElement("add");
        }}
      >
        Add Script
      </button>
    </div>
  );
}

export default App;
