let glob = require('glob'), async = require('async'), fs = require('fs'),
{ join, basename } = require('path');
module.exports = class Includer {
  constructor(...queries) {
    this.queries = queries;
  }
  apply(compiler) {
    let queries = this.queries;
    compiler.plugin('emit', function(compilation, cb) {
      async.each(queries,
        (query, qcb) => async.each(Object.getOwnPropertyNames(query),
          (property, pcb) => glob(query[property],
            (err, files) => async.map(files,
              fs.readFile,
              (err, results) => {
                for (let i = 0; i < results.length; i++) {
                  let buffer = results[i];
                  compilation.assets[join(property, basename(files[i]))] = {
                    source: () => buffer,
                    size: () => buffer.length
                  };
                }
                pcb();
              }
            )
          ),
          qcb
        ),
      cb);
    });
  }
};