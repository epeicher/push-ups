const fs = require('fs');

const fileLines = fs.readFileSync('pushups.csv', 'utf-8').split('\r\n');

const [header, ...linesOfData] = fileLines;

const dataObj = {
  data: {
    values: getDataset(linesOfData)
  }
};

const bySeries = {
  data: {
    values: getSplitData(linesOfData)
  }
};

fs.writeFileSync('pushups.json', JSON.stringify(dataObj));
fs.writeFileSync('pushupsSplit.json', JSON.stringify(bySeries));

function getSplitData(lines) {
  const data = [];
  lines.forEach(lineStr => {
    const line = lineStr.split(',');
    for (i = 1; i <= 6; i++) {
      data.push(getDataObjectByIndex(line, i));
    }
  });
  return data;
}

function getDataset(lines) {
  return lines.map(l => getDataObject(l.split(',')));
}

function getDataObject(values) {
  const [date, serie1, serie2, serie3, serie4, serie5, serie6] = values;
  return {
    date,
    serie1: parseInt(serie1),
    serie2: parseInt(serie2),
    serie3: parseInt(serie3),
    serie4: parseInt(serie4) || 0,
    serie5: parseInt(serie5) || 0,
    serie: parseInt(serie6) || 0
  };
}
function getDataObjectByIndex(values, idx) {
  const date = values[0];
  const value = values[idx];
  return {
    date,
    serieIndex: idx,
    amount: parseInt(value) || 0
  };
}
