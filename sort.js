
/**
 * 快速排序
 * 取一个k值，一般为数组的第一个arr[0]
 * 设置i,j两个变量，i从0开始递增，j = 从 arr.length - 1 开始递减
 * @param {Array} arr 原数组
 * @return {Array} 排序后的数组 
 */
function qsort(arr){
  let k = arr[0]
  let i = 0, j = arr.length - 1

  for (;i < j; ) {

    //
    for (;i < j;j--) {
      if (arr[j] < k) {
        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
        break
      }
    }

    //
    for (;i < j;i++) {
      if (arr[i] > k ) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        break
      }
    }
    if (i == j) {
      arr[i] = k
    }
    console.log(arr)
  }
  return arr
}
let testarr = [6,2,7,3,8,9]
function qsssort(_arr){
  let arr = [..._arr]
  if (arr.length <= 1) return arr
  let kindex = Math.floor(arr.length / 2)
  let k = arr.splice(kindex, 1)[0]
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return qsssort(left).concat([k],qsssort(right));
}
console.log(qsssort(testarr))