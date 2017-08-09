

var Transform = require('stream').Transform;
var inherits = require('util').inherits;

inherits(SSE, Transform);

function SSE( options ){

    if( !(this instanceof SSE) ) return new SSE(options)
    options = options ||{}
    Transform.call(this,options)

}


SSE.prototype._transform = function(data,enc,cb){

    this.push('data: '+data.toString('utf-8')+'\n\n')
    cb();
}


module.exports = SSE;