import React from "react";
import { backgroundImage } from "./assets/jpg";
import Header from "./component/header/header";
const STYLE = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

function App() {

  return <div className="w-screen h-screen fixed top-0 left-0" style={STYLE}>
    <div className="bg-black/75 w-full h-full absolute -z-10"></div>
    <Header/>
  </div>;
}

export default App;
