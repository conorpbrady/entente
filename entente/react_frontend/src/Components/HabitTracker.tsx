import React from 'react';
import './HabitTracker.css';

const habits: number[][] = [[0, 0, 0], [1, 0, 1], [0, 0, 1]]


function transpose(matrix: number[][]): number[][] {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
   return matrix;
}

export default function HabitTracker() {
  return (
    <div className={"habit-grid"}>
    {
      transpose(habits).map((habit) => {
        return habit.map((active) => <HabitCell active={active} />);
      })
    }

    </div>
  );
};

function HabitCell({ active }: { active: number }): React.JSX.Element {
  const activeClass = active ? "active-cell" : "";
  const classes = `habit-cell ${activeClass}`
  return (
    <div className={classes}>
    </div>
  );
};
