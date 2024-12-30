import React from 'react';
import './MonthlyCalendar.css'

const month: number = new Date().getMonth() + 1;
const year: number = new Date().getFullYear();

const MONTHS: string[] = [, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


const getStartOfMonth = (month: number, year: number) => {
    const d: Date = new Date(year, month - 1, 1);
    return d.getDay();
  }

const getDaysInMonth = (month: number, year: number) => {
    const d = new Date(year, month, 0)
    return d.getDate();
  }


const generateDays = (month: number, year: number) => {
  const start = getStartOfMonth(month, year);
  const all_days = Array.from(Array(getDaysInMonth(month, year))).map((e: number, i: number) => i+1);
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
export default function MonthlyCalendar() {
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
      {generateDays(month, year).map((week) => <MonthlyWeek week={week} />)}

      </table>
  );
};

function MonthlyWeek({ week }: { week: number[] }): React.JSX.Element {
  return (
    <tr>
      {week.map((day) => <MonthlyDay day={day} />)}
      </tr>
  );
};

function MonthlyDay({ day }: {day: number }): React.JSX.Element {
  return day != 0 ? (<td>{day}</td>): (<td></td>)
};
