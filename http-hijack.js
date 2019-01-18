var reqId = {} //存储当前处理中的请求的标记

/**
 * 先给这个请求标记，然后执行reqfunc，在响应的时候执行resfunc，
 * 若此reqfunc还没执行完，则等待reqfunc执行完后再去执行resfunc
 * @param {Object} req 请求
 * @param {Object} res 响应
 * @param {Function} reqfunc 请求截取函数
 * @param {Function} resfunc 响应截取函数
 */
module.exports = function Httphijack(req, res, reqfunc, resfunc) {
  var resSend = res.send
  markRequest(req, res) // 标记这个请求
  res.send = function(val) {
    try {
      handleResfunc(res, val, resfunc)
    } catch (error) {
      delete reqId[req.onlyId]
      console.log(error)
    }
    return resSend.bind(res)(val)
  }
  handelReqfunc(req, reqfunc, resfunc).then(()=>{}).catch(err => {
    console.log(err)
  })
}

/**
 * 两个异步事件分别为A B，A不依赖B, B依赖A的数据，
 * B事件也许在A事件完成之前就已经可能触发开始运行了,
 * 这时候A可能还未完成
*/

/**
 * 事件A
 * @param {Object} req 请求
 * @param {Function(Promise)} reqfunc 请求截取函数
 * @param {Function(Promise)} resfunc 响应截取函数
 * @return {Promise}
 */
function handelReqfunc(req, reqfunc, resfunc){
  return new Promise((resolve, reject) => {
    reqfunc(req).then(reqfuncResult => {
      reqId[req.onlyId]['Adone'] = true
      reqId[req.onlyId]['extraData'] = reqfuncResult
      if (reqId[req.onlyId]['Bbegin']) {
        resfunc(reqId[req.onlyId]['resData'], reqId[req.onlyId]['extraData']).then(() => {
          delete reqId[req.onlyId]
          resolve()
        }).catch(() => {
          delete reqId[req.onlyId]
        })
      }
    }).catch(() => {
      delete reqId[req.onlyId]
    })
  })
}

/**
 * 事件B
 * @param {Object} 响应
 * @param {string} 响应数据
 * @param {Function} 响应截取函数
 * @return {null}
 */
function handleResfunc(res, val, resfunc){
  var onlyId = res.onlyId
  if (!reqId[onlyId]) {
    return
  }
  if (!reqId[onlyId]['Adone']) { //检查A是否完成，若未完成就标记B准备就绪，若A以完成就直接执行B
    reqId[onlyId]['Bbegin'] = true
    reqId[onlyId]['resData'] = val
    return
  } else {
    let resData = val
    let extraData = reqId[onlyId]['extraData']
    resfunc(resData, extraData).then(() => {}).catch(err => {})
  }
}
/**
 * 生成伪id
 */
function getRequstId(){
  return new Date().getTime() + Math.random().toString(36).substr(2)
}
/**
 * 给这个请求上标记
 * @param {Object} req 请求
 * @param {Object} res 响应
 */
function markRequest(req, res){
  var onlyId = getRequstId()
  req.onlyId = onlyId
  res.onlyId = onlyId
  reqId[onlyId] = {
    Adone : false,
    Bbegin : false,
    resData : {},
    extraData: {}
  }
}
