let 本金 = 4000
let 日率 = 0.04 / 365
let 存放年数 = 30
let 天数 = 365 * 存放年数
let 月 = 30 // 假设每个月都是30天
let _月 = 0 //加到30就当做过了一个月，发4000工资
for ( ; 天数 > 0; 天数--) {
  本金 = 本金 * (1 + 日率)
  _月++
  if( _月 == 月){
    本金 += 4000
    _月 = 0
  }
}
console.log(本金)
