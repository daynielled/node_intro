const fs = require('fs');
const process = require('process')


function cat(path) {
  
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      process.exit(1);
    } else {
      console.log(data);
    }
  });
}


if (process.argv.length < 3) {
  console.error('Please provide a file path as a command line argument.');
} else {
    const filePath = process.argv[2];
  cat(filePath);
}
