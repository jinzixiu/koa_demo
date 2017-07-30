const Koa = require('koa')
const app = module.exports = new Koa()



app.use(async function(ctx){
    ctx.body = 'hello world'
});


console.log(module.parent)

if(!module.parent) app.listen(6666)

