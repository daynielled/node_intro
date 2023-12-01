const fs = require('fs').promises;
const axios = require('axios');
const process = require('process');



async function cat(path, outputPath) {
  try {

    const data = await fs.readFile(path, 'utf8');
    if (outputPath) {

      await fs.writeFile(outputPath, data);
      console.log(`File content written to ${outputPath}`);
    } else {

      console.log(data);
    }
    process.exit(0);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}


async function webCat(url, outputPath) {
  try {
    const response = await axios.get({ url: 'https://www.t-mobile.com/' });
    const data = response.data;
    if (outputPath) {

      await fs.writeFile(outputPath, data);
      console.log(`URL content written to ${outputPath}`);
    } else {

      console.log(data);
    }
    process.exit(0);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}


const outIndex = process.argv.indexOf('--out');
if (outIndex !== -1 && process.argv[outIndex + 1]) {
  const outputPath = process.argv[outIndex + 1];

  const argumentIndex = outIndex + 2;
  const argument = process.argv[argumentIndex];

  if (argument && (argument.startsWith('http://') || argument.startsWith('https://'))) {
   
    webCat(argument, outputPath);
  } else {
    
    cat(argument, outputPath);
  }
} else {
  
  if (process.argv.length < 3) {
    console.error('Please provide a file path or URL as a command line argument.');
    process.exit(1);
  } else {
   
    const argument = process.argv[2];

    
    if (argument.startsWith('http://') || argument.startsWith('https://')) {
      
      webCat(argument);
    } else {
      
      cat(argument);
    }
  }
}


