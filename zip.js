// Create a zip archive of the built app

var fs = require('fs');

var archiver = require('archiver');

var output = fs.createWriteStream(__dirname + '/these-things-happen.zip');
var archive = archiver('zip');

output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('App zip package created!');
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);


archive
  // Grab everything in the dist folder
  .bulk({expand: true, cwd: 'dist/', src: './*', dest: '.'})
  .finalize();
