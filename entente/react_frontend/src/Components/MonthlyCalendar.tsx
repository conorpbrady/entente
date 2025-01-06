import React, { useState } from 'react';
import './MonthlyCalendar.css'



const MONTHS: string[] = [, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


const getStartOfMonth = (m: number, y: number) => {
    const d: Date = new Date(y, m - 1, 1);
    return d.getDay();
  }

const getDaysInMonth = (m: number, y: number) => {
    const d = new Date(y, m, 0)
    return d.getDate();
  }


const generateDays = (m: number, y: number) => {
  const start = getStartOfMonth(m, y);
  const all_days = Array.from(Array(getDaysInMonth(m, y))).map((e: number, i: number) => i+1);
  const cal_days = []
    while (all_days.length > 0) {
      let week: number[] = []
      if(cal_days.length == 0) {
        week = week.concat(Array.from({length: start}, (v, i) => 0))
      }
      while(week.length < 7) {
        if(all_days.length == 0) {
          week.push(0);
        }
        else {
        week.push(all_days.shift())
        }
      }
        cal_days.push(week);

    }
    return cal_days;
  }
export default function MonthlyCalendar({ displayDate, changeDate }: { displayDate: Date, changeDate: (d: Date) => void }) {

  const [month, setMonth] = useState(new Date().getMonth() + 1)
  const [year, setYear] = useState(new Date().getFullYear())
  return (
    <table className={"monthly-calendar"}>
    <tr>
      <th>Su</th>
      <th>Mo</th>
      <th>Tu</th>
      <th>We</th>
      <th>Th</th>
      <th>Fr</th>
      <th>Sa</th>
      </tr>
      {generateDays(month, year).map((week, i) => <MonthlyWeek key={i} month={month} year={year} week={week} currentDate={displayDate} changeDate={changeDate} />)}

      </table>
  );
};

function MonthlyWeek({ month, year, week, currentDate, changeDate }: { month: number, year: number, week: number[], currentDate: Date, changeDate: (d: Date) => void }): React.JSX.Element {
  return (
    <tr>
      {week.map((day, i) => <MonthlyDay key={i} month={month} year={year} day={day} currentDate={currentDate} changeDate={changeDate} />)}
      </tr>
  );
};

function MonthlyDay({ month, year, day, currentDate, changeDate }: {month: number, year: number, day: number, currentDate: Date, changeDate: (d: Date) => void  }): React.JSX.Element {
  const activeClass = day === currentDate.getDate() ? "highlighted-day" : ""
  const d = new Date(`${month}/${day}/${year}`)
  return day != 0 ? (<td className={activeClass} onClick={() => changeDate(d)}>{day}</td>): (<td></td>)
};
