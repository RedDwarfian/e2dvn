let async = require('async');
let { join, basename, extname } = require('path');
let glob = require('glob');
let { sync } = glob;
let getPixels = require('get-pixels');
let savePixels = require('save-pixels');
let { Packer } = require('bin-packing');
let zeros = require('zeros');
let fs = require('fs');

async.map(
  sync('./assets/!(*.*)'),
  (folder, cb, files) => async.map(
    files = sync(join(folder, '*.@(png|jpg|jpeg|gif)')),
    getPixels,
    (err, pixels) => cb(err, err ? null : { folder, name: basename(folder), pixels, files })
  ),
  (err, result) => err ? cb(err) : async.each(
    result,
    (result, defcb) => {
      let definition = {
        "moods": []
      };
      let { folder, name, pixels, files } = result;
      let packer = new Packer(10000, 10000);
      let rects = [];
      for (let i = 0; i < files.length; i++) {
        let file = basename(files[i]), name =  basename(file, extname(file)), pixel = pixels[i];
        rects.push({
          file,
          name,
          w: pixel.shape[0],
          h: pixel.shape[1],
          pixel
        });
      }
      rects.sort((a,b) => b.h < a.h)
      packer.fit(rects);

      let fullWidth = 0, fullHeight = 0;
      for(let rect of rects) {
        fullWidth = Math.max(rect.fit.x + rect.w, fullWidth);
        fullHeight = Math.max(rect.fit.y + rect.h, fullWidth);
        definition.moods.push({
          name: rect.name,
          x: rect.fit.x,
          y: rect.fit.y,
          w: rect.w,
          h: rect.h,
          file: rect.file
        });
      }
      let finalImage = zeros([fullWidth, fullHeight, 4], 'uint8');
      for (let rect of rects) {
        for (let x = 0; x < rect.w; x++) {
          for (let y = 0; y < rect.h; y++) {
            for(let a = 0; a < 4; a++) {
              finalImage.set(
                x + rect.fit.x,
                y + rect.fit.y,
                a,
                rect.pixel.get(x, y, a)
              );
            }
          }
        }
      }

      async.parallel([
        (cb) => {
          let writeStream = fs.createWriteStream(`./assets/${name}.png`);
          let pixelStream = savePixels(finalImage, "png");
          pixelStream.pipe(writeStream);
          pixelStream.on('end', cb);
        },
        (cb) => fs.writeFile(`./assets/${name}.json`, JSON.stringify(definition, null, "  "), cb)
      ]);
    }
  )
);
