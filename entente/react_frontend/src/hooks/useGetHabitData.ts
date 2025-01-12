import { useEffect, useState } from 'react'
import axiosInstance from '../api/axiosApi'

export const useGetHabitData = (month: number, year: number) => {

  const [habitData, setHabitData] = useState([])

  const start_date = new Date(year, month - 1, 1).toISOString().substr(0, 10)
  const end_date = new Date(year, month, 0).toISOString().substr(0,10)
  useEffect(() => {
    async function handleFetch() {
      await axiosInstance.get(`http://localhost:8080/api/habits?start_date=${start_date}&end_date=${end_date}`)
      .then((response) => setHabitData(response.data))
      .catch((error) => console.log(error))
    }
    handleFetch()
  }, [month, year])

  return habitData
}
