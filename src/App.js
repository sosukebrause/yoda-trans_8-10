import React, { useState } from "react";
import "./App.css";

import TranslationList from "./components/TranslationList.js";
import TranslationInputs from "./components/TranslationInputs";

function App() {
  const [translation, setTranslation] = useState({
    text: "",
    translationList: [],
  });

  const editText = (e) => {
    setTranslation({ ...translation, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="jumbotron rounded-0">
          <TranslationInputs editText={editText} />
        </div>
      </div>
      <h1>Hello world</h1>
      <TranslationInputs />
      <TranslationList />
    </div>
  );
}

export default App;
