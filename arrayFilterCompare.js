function ranNum(min, max){
  return min + Math.floor(Math.random() * max)
}

var arr = []
for (let i =0; i < 10000000; i++) {
  arr.push(ranNum(1, 20))
}

function setfilter(arr){
  let b = [...new Set(arr)]
  return b
}

function filter(arr){
  let a = arr
  let temp = {}
  return a.filter(x => {
    if(temp[x]){
      return false
    } else {
      temp[x] = true
      return true
    }
  })
}

console.time('filter')
var filterResult =  filter(arr)
console.timeEnd('filter')


console.time('setfilter')
var setResult = setfilter(arr)
console.timeEnd('setfilter')

console.log(filterResult)
console.log(setResult)
