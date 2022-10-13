import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Datepicker() {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <div>
      <DatePicker
        className="inputDate"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
      />
    </div>
  )
}

export default Datepicker
