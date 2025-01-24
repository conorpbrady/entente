import { useEffect, useState } from 'react'
import axiosInstance from '../api/axiosApi'

type HabitObj = {
  title: string;
  habit_date: string;
  created: string;
  modified: string;
  id: number;
  status: number;
  owner: number;
}

interface Habit {
  [k: number]: string[];
}

function reduceHabitData(data: HabitObj[]) {
  const reduced_data = {} satisfies Habit

  data.forEach((element: HabitObj) => {
    const d = new Date(element.habit_date).getUTCDate()
    if (d in reduced_data) {
      reduced_data[d].push(1)
    } else {
      reduced_data[d] = [1]
    }
  })
  return reduced_data
}

export const useGetHabitData = (start_date: string, end_date: string) => {

  const [habitData, setHabitData] = useState({})

  //const dim = new Date(year, month, 0).getDay()

  useEffect(() => {
    async function handleFetch() {
      await axiosInstance.get(`http://localhost:8080/api/habits?start_date=${start_date}&end_date=${end_date}`)
      .then((response) => {
        const data = reduceHabitData(response.data)
        setHabitData(data)
      })
      .catch((error) => console.log(error))
    }
    handleFetch()
  }, [start_date, end_date])

  return { habitData }
}
