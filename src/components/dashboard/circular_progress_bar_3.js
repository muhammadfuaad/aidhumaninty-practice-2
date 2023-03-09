import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Circular_progress_bar_3() {
  const percentage = 50;
  const rotateDeg = 180 - (percentage * 3.6) / 2;
  return (
    <div
      style={{
        position: "relative",
        width: "7rem",
        height: "7rem",
        overflow: "hidden",
        borderRadius: "100%",
      }}
    >
      <CircularProgressbar
        value={percentage}
        background
        backgroundPadding={0}
        styles={{
          root: {
            transform: `rotate(${rotateDeg}deg)`,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          },
          background: {
            fill: "#102558"
          },
          path: {
            stroke: "#00ade9"
          },
          trail: {
            stroke: "transparent",
            transform: "rotate(90deg)",
            transformOrigin: "center center",
            rotation: 1 / 7 + 1 / 10
          }
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: `${percentage}%`,
          background: "#004cff66",
          backgroundOpacity: "50%"
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          width: "100%",
          fontSize: "2rem",
          transform: "translateY(-50%) translateX(20%)",
          fontWeight: "bold",
          color: "#fff"
        }}
      >
        {percentage}%
      </div>
    </div>
  );
}

export default Circular_progress_bar_3;
