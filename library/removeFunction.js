const tencentcloud = require('tencentcloud-sdk-nodejs')
const Abstract = require('./abstract')
const models = tencentcloud.scf.v20180416.Models
const util = require('util')

class RemoveFunction extends Abstract {
  async remove(funcName, namespace = 'default') {
    const delFuncRequest = new models.DeleteFunctionRequest()
    delFuncRequest.FunctionName = funcName
    delFuncRequest.Namespace = namespace

    const handler = util.promisify(this.scfClient.DeleteFunction.bind(this.scfClient))
    try {
      await handler(delFuncRequest)
    } catch (e) {
      throw e
    }
  }
}

module.exports = RemoveFunction
