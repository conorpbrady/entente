import React from 'react';
import './HabitTracker.css';
import { useGetHabitData } from '../hooks/useGetHabitData'

export default function HabitTracker({ selectedDate }: { selectedDate: Date }) {

    const m = selectedDate.getMonth() + 1
    const y = selectedDate.getFullYear()
    const start_date = new Date(y, m - 1, 1).toISOString().substr(0,10)
    const end_date = new Date(y, m, 0).toISOString().substr(0,10)

    const dim = new Date(m, y, 0).getDate()

    const { habitData } = useGetHabitData(start_date, end_date)

    const habit_id = 1

    return (
     <div className={"habit-grid"}>
    {
      [...Array(dim + 1).keys()].map((d) => {
        const day = d + 1
        const active: boolean = (day in habitData && habitData[day].includes(habit_id))
        return (<HabitCell key={day} active={active} />)
      })
    }

    </div>
  );
};

function HabitCell({ active }: { active: boolean }): React.JSX.Element {
  const activeClass = active ? "active-cell" : "";
  const classes = `habit-cell ${activeClass}`
  return (
    <div className={classes}>
    </div>
  );
};
