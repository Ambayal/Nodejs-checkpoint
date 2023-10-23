const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('welcome.txt has been created with the content.');
  }
});
