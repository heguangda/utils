var crypto = require('crypto')
function createhash (str){
  var hasher = crypto.createHash('md5')
  hasher.update(str,'utf-8')
  return hasher.digest('hex')
}


const mappings = [
	{ id: '111', phone: '111111' },
	{ id: '222', phone: '222222' },
	{ id: '333', phone: '333333' },
];
const slow = id => {
	console.log("i am slow");
  return mappings.find( v => v.id === id );
};

const memoize = function ( func , hasher ){
  const cache = {}
	return v => {
    if (!cache[v]) {
      console.log('新值')
      if (typeof v === 'object') {
        var tempV = createhash(JSON.stringify(v))
        console.log(tempV)
        cache[tempV] = '88888'
      } else {
        cache[v] = func(v)
      }
    } else {
      console.log('来自缓存')
    }
    console.log(cache)
  }
};

(function test() {
	let quick = memoize( slow );
	quick('111');
  quick('111');
  quick({ one:1111 })
})();
