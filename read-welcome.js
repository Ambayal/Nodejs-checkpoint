const fs = require('fs');

fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Content of welcome.txt:');
    console.log(data);
  }
});
