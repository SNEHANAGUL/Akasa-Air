// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import CustomDatePicker from './CustomDatePicker';

const App = () => {
  const handleDateChange = (selectedDates) => {
    console.log('Selected Dates:', selectedDates);
  };

  return (
    <div className="app-container">
      <span className='heading'>AKASA AIR</span>
      <CustomDatePicker onDateChange={handleDateChange} />
    </div>
  );
};

export default App;