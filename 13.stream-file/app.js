const Koa = require('koa');
const fs = require('fs');
const app = module.exports = new Koa();
const path = require('path');
const extname = path.extname;


app.use(async function(ctx) {

    console.log(ctx.path)
    const fpath = path.join(__dirname, ctx.path);

    const fstat = await stat(fpath);

    console.log(fpath)
    console.log(extname(fpath))

    if (fstat.isFile()) {
    ctx.type = extname(fpath);
    ctx.body = fs.createReadStream('../package.json');
    }

});


if (!module.parent) app.listen(6666);

/**
 * thunkify stat
 */

function stat(file) {

  return new Promise(function(resolve, reject) {
    fs.stat(file, function(err, stat) {
      if (err) {
        reject(err);
      } else {
        resolve(stat);
      }
    });
  });

}





