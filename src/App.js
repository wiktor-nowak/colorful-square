import React from "react";
import { useState } from "react";
import Box from "./Box";
import Input from "./Input";

function App() {
  const [colorName, setColorName] = useState('');

  return (
    <div className="App">
      <Box
        colorName={colorName}/>
      <Input
        colorName={colorName}
        setColorName={setColorName}
      />
    </div>
  );
}

export default App;
