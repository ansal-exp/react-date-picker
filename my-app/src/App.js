import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

import './Sample.css';

export default function Sample() {
  const [value, onChange] = useState(new Date());

  console.log('value', value);

  return (
    <div className="Sample">
      <header>
        <h1>react-date-picker sample page</h1>
      </header>
      <div className="Sample__container">
        <main className="Sample__container__content">
          <DatePicker
            calendarAriaLabel="Toggle calendar"
            clearAriaLabel="Clear value"
            dayAriaLabel="Day"
            monthAriaLabel="Month"
            nativeInputAriaLabel="Date"
            onChange={onChange}
            value={value}
            yearAriaLabel="Year"
            onInputFocused={(value) => {
              console.log('Sample:onInputFocused:', value);
            }}
            onInvalidEntry={() => {
              console.log('Sample:onInvalidEntry:', value);
            }}
          />
        </main>
      </div>
    </div>
  );
}
