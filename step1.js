const fs = require('fs');
const process = require('process')

// Define the cat function
function cat(path) {
  // Read the file with the specified path
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      process.exit(1);
    } else {
      // Print the contents of the file
      console.log(data);
    }
  });
}

// Check if a file path is provided as a command line argument
if (process.argv.length < 3) {
  console.error('Please provide a file path as a command line argument.');
} else {
  // Get the file path from the command line argument
  const filePath = process.argv[2];

  // Call the cat function with the provided file path
  cat(filePath);
}
