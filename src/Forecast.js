import React, { useState, useEffect } from "react";
import { get } from './mockBackend/fetch';

export default function Forecast() {
  const [data, setData] = useState();
  const [notes, setNotes] = useState({});
  const [forecastType, setForecastType] = useState('/daily');

  useEffect(() => {
    alert('Requested data from server...');
    get(forecastType).then((response) => {
      // alert('Response: ' + JSON.stringify(response,'',2));
      setData(response.data);
    });
  }, [forecastType]);
  // The second argument is a dependency array
  // A dependency array tells our useEffect() call to only re-render when the items within this array are updated
  // An empty dependency array will tell our useEffect() call to never re-render/re-run, only render/run on the first load
  // In this case, this prevents the app from reloading every time any change happens, for example, when the note inputs are typed in

  const handleChange = (index) => ({ target }) =>
    setNotes((prev) => ({
      ...prev,
      [index]: target.value
    }));

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className='App'>
      <h1>My Weather Planner</h1>
      <div>
        <button onClick={() => setForecastType('/daily')}>5-day</button>
        <button onClick={() => setForecastType('/hourly')}>Today</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Summary</th>
            <th>Avg Temp</th>
            <th>Precip</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={item.id}>
              <td>{item.summary}</td>
              <td> {item.temp.avg}°F</td>
              <td>{item.precip}%</td>
              <td>
                <input
                  value={notes[item.id] || ''}
                  onChange={handleChange(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
