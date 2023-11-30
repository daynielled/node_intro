const fs = require('fs');
const axios = require('axios')

function cat(path) {
    // Read the file with the specified path
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file: ${err.message}`);
        process.exit(1);
      } else {
        // Print the contents of the file
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

  