// CustomDatePicker.js
import React, { useState } from 'react';
// import DatePickerCalendar from './DatePickerCalendar';
import DatePickerCalendar from './DatePickerCalender';
import './CustomDatePicker.css';
import TimePicker from 'react-time-picker';


const formatDate = (date) => {
// Create a new Date object
console.log(date);
// Get individual components of the date and time in GMT
var year = date.getUTCFullYear();
var month = ('0' + (date.getUTCMonth() + 1)).slice(-2); // Months are zero-based
var day = ('0' + (date.getUTCDate()+1)).slice(-2);
var hours = ('0' + date.getUTCHours()).slice(-2);
var minutes = ('0' + date.getUTCMinutes()).slice(-2);

// Construct the GMT-formatted date string
var formattedDateGMT = year + '-' + month + '-' + day + 'T' + hours + ':' + minutes;
return formattedDateGMT;

}

const CustomDatePicker = ({ onDateChange }) => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const [selectedTime, setSelectedTime] = useState(new Date());

  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime);
  };

  const handleDateChangeInternal = (selectedDates) => {

    setFromDate(formatDate(selectedDates.fromDate[0]));
    // console.log("diff",selectedDates.fromDate[1].getDate()-selectedDates.fromDate[0].getDate());
    // if(selectedDates.fromDate[1]-selectedDates.fromDate[0]>1){
    setToDate(formatDate(selectedDates.fromDate[1]));
    //}
    onDateChange(selectedDates);
  };

  return (
    <div className="custom-date-picker">
      <div className="date-inputs">
        <input type="datetime-local" value={fromDate || ''} readOnly />
        <input type="datetime-local" value={toDate || ''} readOnly />
      </div>
      <DatePickerCalendar
        selectedFromDate={fromDate}
        selectedToDate={toDate}
        onDateChange={handleDateChangeInternal}
      />
      <TimePicker
        onChange={handleTimeChange}
        value={selectedTime}
        format="HH:mm" // Optionally remove clear button
      />
    </div>
  );
};

export default CustomDatePicker;
