import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

function Circular_progress_bar() {
  const percentage = 50;

  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        background
        backgroundPadding={0}
        style={{
          fontSize: "2.5rem",
        }}
        

        styles={buildStyles({
          fontSize: "2.5rem",
          fontWeight: "900",   
          backgroundColor: "#102558",
          textColor: "#fff",
          pathColor: "#00ade9",
          trailColor: "transparent",
          transform: "rotate(90deg)",
          rotation: 1 / 7 + 1 / 10,
          text: {
            // Text color
            fill: '#1d1d1d',
            // Text size
            fontSize: '2.5rem',
          },
        })}
      />
    </div>
  );
}

export default Circular_progress_bar;
