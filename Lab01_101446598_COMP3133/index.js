const fs = require('fs');
const csv = require('csv-parser');

const canadaFile = 'canada.txt';
const usaFile = 'usa.txt';
const inputFile = 'input_countries.csv'; 
const deleteFileIfExists = (fileName) => {
    if (fs.existsSync(fileName)) {
        fs.unlinkSync(fileName);
    }
};

deleteFileIfExists(canadaFile);
deleteFileIfExists(usaFile);

const canadaData = [];
const usaData = [];

fs.createReadStream(inputFile)
  .pipe(csv())
  .on('data', (row) => {
    if (row.country.toLowerCase() === 'canada') {
      canadaData.push(row);
    } else if (row.country.toLowerCase() === 'united states') {
      usaData.push(row);
    }
  })
  .on('end', () => {
    writeToFile(canadaFile, canadaData);
    writeToFile(usaFile, usaData);
    console.log('Data filtering completed!');
  });

const writeToFile = (fileName, data) => {
    const header = 'country,year,population\n';
    const rows = data.map(item => `${item.country},${item.year},${item.population}`).join('\n');
    fs.writeFileSync(fileName, header + rows, 'utf-8');
};
