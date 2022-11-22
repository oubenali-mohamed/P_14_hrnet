import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Datepicker() {
  const [startDate, setStartDate] = useState(null)

  return (
    <DatePicker
      className="inputDate"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="dd/MM/yyyy"
    />
  )
}

export default Datepicker
