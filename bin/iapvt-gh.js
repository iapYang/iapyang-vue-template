const ghpages = require('gh-pages');
const path = require('path');

ghpages.publish(path.resolve(process.cwd(), './dist'), err => {
    if (err) throw err;
    console.log('upload successfully!');
});
