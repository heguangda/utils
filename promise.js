// const EventEmitter = require('events')

// class Myevent extends EventEmitter {}

// function mypromise (cb) {
//   this.pending = true
//   this.rej = false
//   this.res = false
//   this.myevnet = new Myevent()
//   this.resolveCB = function(){}
//   this.rejectCB = function(){}


//   // this.then = ((cb)=>{
//   //   if (typeof cb !== 'function') {
//   //     throw new Error('then error')
//   //   }
//   //   this.myevnet.on('then',cb)
//   //   return this
//   // })

  
//   // this.catch = ((cb) => {
//   //   if (typeof cb !== 'function') {
//   //     throw new Error('then error')
//   //   }
//   //   this.myevnet.on('catch',cb)
//   //   return this
//   // })

//   cb(this.resolve.bind(this), this.reject.bind(this))
//   return this
// }
// mypromise.prototype.then = function(cb) {
//   if (typeof cb !== 'function') {
//     throw new Error('then error')
//   }
//   this.myevnet.on('then',cb)
//   return this
// }

// mypromise.prototype.catch = function(cb) {
//   if (typeof cb !== 'function') {
//     throw new Error('then error')
//   }
//   this.myevnet.on('catch',cb)
//   return this
// }

// mypromise.prototype.resolve = function(){
//   this.res = true
//   console.log('执行了res')
//   this.myevnet.emit('then',...arguments)
// }

// mypromise.prototype.reject = function(){
//   this.rej = true
//   console.log('执行了rej')
//   this.myevnet.emit('catch',...arguments)
// }

// function test(){
//   return new mypromise((res,rej) => {
//     setTimeout(function(){
//       res(100)
//       rej(200)
//     },100)
//   })
// }

// test().then((data) => console.log(data)).catch(err => console.log(err))

const vm = require('vm');

const x = 1;

const sandbox = { x: 2 };
vm.createContext(sandbox); // Contextify the sandbox.

const code = 'x += 40; var y = 17;';
// x and y are global variables in the sandboxed environment.
// Initially, x has the value 2 because that is the value of sandbox.x.
vm.runInContext(code, sandbox);

console.log(sandbox.x); // 42
console.log(sandbox.y); // 17

console.log(x); // 1; y is not defined.