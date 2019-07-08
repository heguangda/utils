

// 运行生成器函数的一个容器
// 参数必须是一个生成器
function run(gen) {
  // 创建迭代器
  const task = gen();
  // 开始执行
  let result = task.next();
  
  (function step() {
      if (!result.done) {
          // 用Promise处理
          // 解释：无论result.value本身是不是promise对象，都会作为一个promise对象来异步处理
          const promise = Promise.resolve(result.value);
          promise.then(value => {
              // 把本次执行的结果返回
              // 也就是语句 const value = yield func(); 的返回值
              console.log(value)
              result = task.next(value);
              // 继续
              step();
          }).catch(err => {
              result = task.throw(err);
              // 继续
              step();
          })
      }
  }());
}

function setT(v){
  return new Promise((res, rej) => {
    setTimeout(function(){
       if (typeof v == 'number' && v < 100) 
       {
         res(v)
        } 
       else { rej(v) }
    },100)
  })
}

function* test(){
  let a = yield setT(99)
  console.log(a)
  yield setT(88)
  yield setT(101)
  return '1234'
}

run(test)