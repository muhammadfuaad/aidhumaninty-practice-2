import React from "react";
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import ChangingProgressProvider from "./ChangingProgressProvider";

// Radial separators
import RadialSeparators from "./RadialSeparators";

const percentage = 66;

const App = () => (
  <div style={{ padding: "40px 40px 40px 40px" }}>
    <h1>react-circular-progressbar examples</h1>
    <p>
      <a href="https://github.com/kevinsqi/react-circular-progressbar">
        <strong>View Github docs</strong>
      </a>
    </p>

    <h2>Common style customizations</h2>
    <Example label="Circular bar">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        background
        backgroundPadding={0}
        styles={buildStyles({
          backgroundColor: "#102558",
          textColor: "#fff",
          pathColor: "#00ade9",
          trailColor: "transparent"
        })}
      />
    </Example>
  </div>
);

function Example(props) {
  return (
    <div style={{ marginBottom: 80 }}>
      <hr style={{ border: "2px solid #ddd" }} />
      <div style={{ marginTop: 30, display: "flex" }}>
        <div style={{ width: "30%", paddingRight: 30 }}>{props.children}</div>
        <div style={{ width: "70%" }}>
          <h3 className="h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

render(<App />, document.getElementById("root"));
