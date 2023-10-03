const fs = require('fs');
if (!fs.existsSync('gh-pages')) {
  fs.mkdirSync('gh-pages');
}
