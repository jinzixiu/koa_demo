const Koa = require('koa')
const auth = require('koa-basic-auth')


const app = module.exports = new Koa()

app.use(async function(ctx,next){
    try{
        await next()
    }catch(err){
        
        console.log(11111111)
        if(err.status === 401){
            console.log(2222222222)
            ctx.status = 401
            ctx.set('WWW-Authenticate', 'Basic');
            ctx.body = 'cant haz that';
        }else{
            console.log(333333333)
            throw err
        }
        
    }

})

app.use(auth({name:'tj',pass:'tobi'}));

app.use(async function(ctx){
    ctx.body = 'secret';
})


if (!module.parent) app.listen(6666);