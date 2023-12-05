// DatePickerCalendar.js
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DatePickerCalendar = ({ selectedFromDate, selectedToDate, onDateChange }) => {
  const handleDateClick = (date) => {
    //  console.log("insidedate",date);
    if (!selectedFromDate || (selectedFromDate && selectedToDate)) {
      onDateChange({ fromDate: date, toDate: null });
    } else if (selectedFromDate && !selectedToDate && date > selectedFromDate) {
      onDateChange({ fromDate: selectedFromDate, toDate: date });
    }
  };

  return (
    <div className="date-picker-calendar">
      <Calendar
        onChange={(date) => handleDateClick(date)}
        value={selectedFromDate || new Date()}
        selectRange={true}
        tileClassName={({ date, view }) => {
          if (
            selectedFromDate &&
            (!selectedToDate || (date > selectedFromDate && date < selectedToDate))
          ) {
            return 'selected-range';
          }
        }}
      />
    </div>
  );
};

export default DatePickerCalendar;
