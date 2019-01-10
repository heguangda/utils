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
  { id: 'c41ed3222c70899c122feb82bc85c297', phoen: '12345777777'}
];
const slow = id => {
  return mappings.find( v => v.id === id );
};

const memoize = function ( func , hasher ){
  const cache = {}
	return v => {
    let tempV = v
    if (typeof tempV === 'object') {
      tempV = hasher(JSON.stringify(tempV))
    }
    if (!cache[tempV]) {
      console.log('新值')
        cache[tempV] = func(tempV)
        return cache[tempV]
    } else {
      console.log('来自缓存')
    }
  }
};

(function test() {
	let quick = memoize( slow, createhash );
	quick('111');
  quick('111');
  quick({ one:1111 })
  quick({ one:1111 })
})();
