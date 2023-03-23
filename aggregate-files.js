const fs = require('fs');

/**
 * Function will return a string of all JSON objects concatenated by \n
 */ 
function createFilesStringFromJsonFiles(files) {
  let aggregatedFiles = ''
  for (const file in files) {
    console.log(`Aggregated ${file.name} data`)
    aggregatedFiles += file.content
  }
}

module.exports = (dirname, onFileContent, onError) => {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }

    const files = []
    filenames.forEach(function(filename) {
      fs.readFile(dirname + filename, 'utf-8', function(err, content) {
        if (err) {
          onError(err);
          return;
        }
        files.push({fileName, content})
      });
    });

    return createFilesStringFromJsonFiles(files)
  });
}
