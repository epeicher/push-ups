import React, { useState, useEffect } from 'react';
import { VegaEmbed } from 'react-vega';
import spec from './spec.json'

function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/);
  const values = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(',');
    const date = cols[0];
    for (let s = 1; s <= 6; s++) {
      values.push({ date, serieIndex: s, amount: parseInt(cols[s]) || 0 });
    }
  }
  return values;
}

const BarChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/pushups.csv')
      .then(res => res.text())
      .then(text => setData(parseCsv(text)));
  }, []);

  if (!data) return null;

  const updatedSpec = { ...spec, data: { values: data } };
  return <VegaEmbed spec={updatedSpec} />;
}

export default BarChart;
