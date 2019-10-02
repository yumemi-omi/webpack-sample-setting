import React from "react";
import moomin from './むーみん.jpg';
import img from './muuuuminn';

const App = (props) => {
    return (
      <div>
        <img src={moomin} alt="あいう" />
        Hello {props.name}!!
        <img src={img} alt="えお" />
      </div>
    );
}

export default App;
