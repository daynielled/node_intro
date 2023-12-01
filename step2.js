const fs = require('fs');
const axios = require('axios')
const process = require('process');

function cat(path) {
    
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file: ${err.message}`);
        process.exit(1);
      } else {
        
        console.log(data);
        process.exit(0);
      }
    });
  }

  async function webCat(url) {
    try {
       const response = await axios.getAdapter(url);
       console.log(response.data);
       process.exit(0); 
    }catch (error) {
        console.error(`Error fetching URL: ${error.message}`);
        process.exit(1);
    }
  }

if (process.argv.length < 3) {
     console.error('Please provide a file path or URL as a command line argument.');
    process.exit(1);
  }else{
     
    const argument = process.argv[2];

    
    if (argument.startsWith('http://') || argument.startsWith('https://')) {
    
  } else {
    
    cat(argument);
  }
}