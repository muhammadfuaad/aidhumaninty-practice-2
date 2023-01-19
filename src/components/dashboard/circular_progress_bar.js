import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function Circular_progress_bar() {
  const percentage = 55;

  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          rotation: 1 / 4 + 1 / 10,
        })}
      />
    </div>
  );
}

export default Circular_progress_bar;
