import React from "react";
import Home from "./Pages/Home";
const App = () => {
  function asim(data) {
    console.log(data);
  }
  asim(12);
  return (
    <div>
      <Home></Home>
    </div>
  );
};

export default App;
