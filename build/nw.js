var NwBuilder = require('nw-builder');
let pkg = require('../package.json');
let { posix: { resolve, join } } = require('path');

var nw = new NwBuilder({
    files: join(resolve('../dist/'), '**/**'), // use the glob format
    platforms: ['osx64', 'linux', 'win'],
    buildDir: resolve('../release'),
    appName: pkg.name,
    appVersion: pkg.version,
    buildType: 'timestamped',

});

//Log stuff you want

nw.on('log',  console.log);

// Build returns a promise
nw.build().then(function () {
   console.log('all done!');
}).catch(function (error) {
    console.error(error);
});