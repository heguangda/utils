const utils = require('util')
const qs = require('querystring')

function getPrcessArg(){
  let arg = process.argv.slice(2)
  let argstr = ''
  for (let i in arg) {
    argstr += arg[i] + '&'
  }
  return qs.parse(argstr)
}

exports.getPrcessArg = getPrcessArg