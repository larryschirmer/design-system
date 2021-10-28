import React from "react";

import Button from "./components/publish/Button";
import RadioToggle from "./components/publish/formElements/RadioToggle";
import Input from "./components/publish/formElements/Input";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <Button>Click</Button>
        <Input
          id="fuzz"
          label="Cat"
          name="label"
          value={"ghost"}
          placeholder="Cat's Name"
          onChange={(e) => console.log(e.target.value)}
        />
        <RadioToggle
          name="numbers"
          currentValue="one"
          buttons={[
            { id: "first", value: "one", label: "One" },
            { id: "second", value: "two", label: "Two" },
          ]}
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
    </div>
  );
};

export default App;
