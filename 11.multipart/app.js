
const os = require('os')
const path  = require('path')
const Koa = require('koa')

const fs = require('fs-promise');
const koaBody = require('koa-body');



const app= module.exports = new Koa();

app.use(koaBody({ multipart: true }));

app.use(async function(ctx){

    // console.log(path.join(os.tmpdir(),uid()))
    // console.log(path.join(os.tmpdir()))
    // console.log(path.join( uid() ))

    let tmpdir = path.join(os.tmpdir(),uid())

    await fs.mkdir(tmpdir)
    const filePaths = []
    const files = ctx.request.body.files ||{}
    console.log(ctx.request.body)
    
    for (let key in files){
        const file = files[key]
        const filepath = path.join(tmpdir,file.name)

        const reader = fs.createReadStream(file.path);
        const writer = fs.createWriteStream(filepath);

        reader.pipe(writer)

        filePaths.push(filepath)
    }

    ctx.body = filePaths;
})

function uid(){
    return Math.random().toString(36).slice(2)
}


if (!module.parent) app.listen(6666);