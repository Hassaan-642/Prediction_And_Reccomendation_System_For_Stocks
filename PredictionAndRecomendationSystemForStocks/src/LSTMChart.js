import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LSTMChart = ({ fileName }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/${fileName}`)
      .then(response => response.text())
      .then(csvData => {
        Papa.parse(csvData, {
          header: true,
          dynamicTyping: true,
          complete: (results) => {
            const parsedData = results.data.map(item => ({
              ...item,
              DATE: new Date(item.DATE), // Ensure DATE is a Date object
              PREDICTED_CLOSE: parseFloat(item.PREDICTED_CLOSE) // Convert PREDICTED_CLOSE to number
            }));

            const validData = parsedData.filter(item => !isNaN(item.DATE));

            setData(validData.slice(0, 50)); // Use the first 50 entries
          },
        });
      })
      .catch(error => {
        console.error('Error fetching CSV file:', error);
      });
  }, [fileName]);

  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    if (isNaN(date)) {
      console.error(`Invalid date: ${dateTimeString}`);
      return ''; // Handle invalid date accordingly
    }
    return date.toISOString().split('T')[0]; // Returns only the date portion
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 20, // Increased bottom margin to accommodate X-axis labels
        }}
      >
        <defs>
          <linearGradient id="colorPredictedClose" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="DATE"
          tickFormatter={formatDate} // Format the date to show only the date portion
          interval={4} // Display every 4th label to avoid overcrowding
          angle={-45} // Rotate labels by -45 degrees for better readability
          textAnchor="end" // Anchor text at the end of the label
        />
        <YAxis type="number" />
        <Tooltip
          labelFormatter={(value) => {
            return formatDate(value);
          }}
        />
        <Legend />
        <Area
          type="monotone"
          dataKey="PREDICTED_CLOSE"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPredictedClose)"
          activeDot={{ r: 8 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default LSTMChart;
