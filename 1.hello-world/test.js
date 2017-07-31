var app = require('./app')

var request   = require('supertest').agent(app.listen())


// 不可以使用，不知道为什么
describe('Hello World',function(){

    it('should say "Hello World"',function(done){

        request.get('/')
        .expect(200)
        .expect('Hwllsfas',done)

    })

})