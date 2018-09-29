let validationRules = {}
/*
* validation rule for staff module
* */
validationRules.validateStaffId = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入帐号'))
  } else if (!/^[0-9a-zA-Z]{5,}$/.test(value)) {
    callback(new Error('帐号不能少于5位字符！'))
  } else {
    callback()
  }
}
validationRules.validatePassword = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else if(!/^[0-9a-zA-Z]{6,20}$/.test(value)){
    callback(new Error('密码为6-20位的字母或数字'))
  } else {
    callback()
  }
}
validationRules.validateName = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入姓名'))
  } else if (!/^[\u4e00-\u9fa5]{2,}$/.test(value)) {
    callback(new Error('姓名至少为2个汉字'))
  } else {
    callback()
  }
}
validationRules.validatePhone = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入手机号码'))
  } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(value)) {
    callback(new Error('请输入正确的11位手机号码'))
  } else {
    callback()
  }
}
validationRules.validatePhoneTel = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入手机号码'))
  } else if (!/(^(\d{3,4}-)?\d{7,8})$|([1][3,4,5,7,8][0-9]{9})$/.test(value)) {
    callback(new Error('请输入正确的11位手机号码'))
  } else {
    callback()
  }
}
validationRules.validateEmail = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入邮箱'))
  } else if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
    callback(new Error('请输入正确的邮箱'))
  } else {
    callback()
  }
}
validationRules.validateSelAddress = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入地址'))
  } else {
    callback()
  }
}
validationRules.validateAddress = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入地址'))
  } else {
    callback()
  }
}
validationRules.validateFactor = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入收揽点名称'))
  } else {
    callback()
  }
}
validationRules.validateRole = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请选择角色'))
  } else {
    callback()
  }
}

/*
* validation rule for fee setting module
* */
validationRules.validateProvinceCode = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请选择省'))
  } else {
    callback()
  }
}
validationRules.validateCityCode = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请选择市'))
  } else {
    callback()
  }
}
validationRules.validateVehicleType = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请选择类型'))
  } else {
    callback()
  }
}
validationRules.validateStartKm = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入起步里程'))
  }
  else if (!/^([1-9]\d{0,4}|0)(\.\d{1})?$/.test(value)) {
      callback(new Error('起步里程最多为四位整数加一位小数！'))
  } else {
    callback()
  }
}
validationRules.validateStartPrice = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入起步价'))
  }
  else if (!/^([1-9]\d{0,5}|0)(\.\d{1})?$/.test(value)) {
    callback(new Error('起步价最多为五位整数加一位小数！'))
  } else {
    callback()
  }
}
validationRules.validateUnitPrice = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入单价'))
  } else if (!/^([1-9]\d*|0)(\.\d{1})?$/.test(value)) {
    callback(new Error('请输入数字且最多一位小数！'))
  } else {
    callback()
  }
}
validationRules.validateDistanceRange = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入里程范围'))
  }
  else if (!/^([1-9]\d{0,4}|0)(\.\d{1})?$/.test(value)) {
      callback(new Error('起步价最多为四位整数加一位小数！'))
  } else {
    callback()
  }
}
validationRules.validateServiceRate = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入服务费率'))
  } else if (!/^0([.]{1}[0-9]{1,3}){0,1}$/.test(value)) {
    callback(new Error('请输入0~1之间的数字，最多三位小数'))
  } else {
    callback()
  }
}
validationRules.validateServiceFee = (rule, value, callback) => {
  if (value === '') {
    return
  }
 else if (!/^0([.]{1}[0-9]{1,2}){0,1}$/.test(value)) {
    callback(new Error('请输入0~1之间的数字，最多两位小数'))
  } else {
    callback()
  }
}
validationRules.validateIdCardNum = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入身份证号'))
  } else if (!/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(value)) {
    callback(new Error('请输入正确的身份证号'))
  } else {
    callback()
  }
}
validationRules.validatePlateNo = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入车牌号'))
  } else if (!/^[0-9A-Z]{6}$/.test(value)) {
    callback(new Error('请输入正确的车牌号'))
  } else {
    callback()
  }
}
validationRules.validatePlateNos = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请选择检索出来的车牌号！'))
  } else {
    callback()
  }
}

validationRules.validateDriverPassword = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else if (!/^[0-9a-zA-Z]{8,16}$/.test(value) || !/[a-zA-Z]/.test(value) || !/[0-9]/.test(value)) {
    callback(new Error('密码由8-16位字母及数字组成'))
  } else {
    callback()
  }
}

validationRules.validateMenuName = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入菜单名称'))
  }  else {
    callback()
  }
}
validationRules.validateMenuCode = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入菜单编码'))
  } else if ( !/^[0-9]*$/.test(value)) {
    callback(new Error('编码只能由数字组成'))
  } else {
    callback()
  }
}
validationRules.validateMenuRoute = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入菜单路由'))
  }  else {
    callback()
  }
}
validationRules.validateMenuOrderNum = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入菜单顺序'))
  }else if ( !/^[0-9]*$/.test(value)) {
    callback(new Error('顺序只能由数字组成'))
  }  else {
    callback()
  }
}
validationRules.validateMenuIcon = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('请输入菜单图标'))
    }  else {
      callback()
    }
}
validationRules.validateRoleName = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入角色名称'))
  }  else {
    callback()
  }
}
validationRules.validateRoleCode = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入角色编码'))
  }else if ( !/^[0-9]*$/.test(value)) {
    callback(new Error('编码只能由数字组成'))
  }  else {
    callback()
  }
}
validationRules.validateScore = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入固定评分'))
  }else if ( !/^[0-9]{1,2}([.]{1}[0-9]{1,2})?$/.test(value)) {
    callback(new Error('固定评分最大为100，最小为0'))
  }  else {
    callback()
  }
}
validationRules.validateAnnouncementTitle = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入公告标题'))
  }  else {
    callback()
  }
}
validationRules.validateComment = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请填写审核意见'))
  } else {
    callback()
  }
}
validationRules.validateIdCardExpireDate = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请选择身份证过期日期'))
  } else {
    callback()
  }
}
validationRules.validateExpireDate = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请选择驾照过期日期'))
  } else {
    callback()
  }
}
validationRules.validateCarUseCharacter = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入车辆使用性质'))
  } else {
    callback()
  }
}
validationRules.validateCarType = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入车辆类型'))
  } else {
    callback()
  }
}
validationRules.validateCarOwner = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入车辆所有人'))
  } else {
    callback()
  }
}
validationRules.validateCarAddress = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入所有人住址'))
  } else {
    callback()
  }
}
validationRules.validateCarModel = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入车辆品牌型号'))
  } else {
    callback()
  }
}
validationRules.validateCarVin = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入车辆识别码'))
  } else {
    callback()
  }
}
validationRules.validateCarEngineNo = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入发动机号码'))
  } else {
    callback()
  }
}
validationRules.validateCarRegisterDate = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请选择车辆注册日期'))
  } else {
    callback()
  }
}
validationRules.validateIssueDate = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请选择行驶证发证日期'))
  } else {
    callback()
  }
}
validationRules.validateDlFirstIssue = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请选择初次领取驾照日期'))
  } else {
    callback()
  }
}
validationRules.validateReward = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入奖励金额'))
  } else if ( /^0$/.test(value)) {
    callback(new Error('奖励金额不能为0'))
  } else if ( !/^[0-9]{0,5}([.]{1}[0-9]{1})?$/.test(value)) {
    callback(new Error('奖励金额最大为5位整数加1位小数'))
  } else {
    callback()
  }
}
validationRules.validateRewardComment = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入奖励说明'))
  }else {
    callback()
  }
}
validationRules.validateOnline = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入上线路线数'))
  }else if ( !/^[0-9]*$/.test(value)) {
    callback(new Error('路线数只能由数字组成'))
  }  else {
    callback()
  }
}
validationRules.validateCouponName = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入优惠券名称'))
  } else {
    callback()
  }
}
validationRules.validateCouponDesc = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入优惠券描述'))
  } else {
    callback()
  }
}
validationRules.validateCouponAmount = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入金额'))
  } else if ( !/^[1-9][0-9]*$/.test(value)) {
    callback(new Error('金额必须为正整数'))
  } else {
    callback()
  }
}
validationRules.validateCouponQuantity = (rule, value, callback) => {
  value = value.toString()
  if (value === '') {
    callback(new Error('请输入发放总数量'))
  } else if ( !/^[1-9][0-9]*$/.test(value) && value !== '-1') {
    callback(new Error('发放总数量必须为正整数或-1'))
  } else {
    callback()
  }
}
validationRules.validateExporedDays = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入有效天数'))
  }else if ( !/^[1-9][0-9]*$/.test(value)) {
    callback(new Error('有效天数必须为正整数'))
  }  else {
    callback()
  }
}
validationRules.validateQuantityPerOne = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入单个用户发放数量'))
  } else if ( !/^[1-9][0-9]*$/.test(value)) {
    callback(new Error('单个用户发放数量必须为正整数'))
  } else {
    callback()
  }
}
validationRules.validateMiniPayAmt = (rule, value, callback) => {
  value = value.toString()
  if (value === '') {
    callback(new Error('请输入最低消费金额'))
  } else if ( !/^[1-9][0-9]*$/.test(value) && value !== '-1') {
    callback(new Error('最低消费金额必须为正整数或-1'))
  } else {
    callback()
  }
}
validationRules.validateTrainAddress = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入培训地址'))
  } else {
    callback()
  }
}
validationRules.validateConfigName = (rule, value, callback) => {
  value = value.toString()
  if (value === '') {
    callback(new Error('请输入配置名称'))
  } else {
    callback()
  }
}
validationRules.validateConfigValue = (rule, value, callback) => {
  value = value.toString()
  if (value === '') {
    callback(new Error('请输入配置值'))
  } else {
    callback()
  }
}
validationRules.validateConfigDesc = (rule, value, callback) => {
  value = value.toString()
  if (value === '') {
    callback(new Error('请输入配置描述'))
  } else {
    callback()
  }
}
validationRules.validateConfigIdentifier = (rule, value, callback) => {
  value = value.toString()
  if (value === '') {
    callback(new Error('请输入配置参数'))
  } else {
    callback()
  }
}
validationRules.cityName = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请选择城市'))
  } else {
    callback()
  }
}
validationRules.validateCreditCode = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入社会统一信用代码'))
  } else {
    callback()
  }
}
validationRules.validateOrderCode = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入顺序编码'))
  }
  else if ( !/^[0-9]*$/.test(value)) {
    callback(new Error('顺序编码只能由数字组成'))
  }else {
    callback()
  }
}
validationRules.validateFirstLetter = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入目的地首字母'))
  } else if ( !/^[a-zA-Z]$/.test(value)) {
    callback(new Error('目的地首字母只能由字母组成最多一位'))
  } else {
    callback()
  }
}
validationRules.validatePriceWeight = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入重量单价'))
  } else if (!/^([1-9]\d{0,4}|0)(\.\d{1})?$/.test(value)) {
    callback(new Error('重量单价最大为四位整数加一位小数！'))
  }
  else {
    callback()
  }
}
validationRules.validatePriceVolume = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入体积单价'))
  } else if (!/^([1-9]\d{0,4}|0)(\.\d{1})?$/.test(value)) {
    callback(new Error('体积单价最大为四位整数加一位小数！'))
  }else {
    callback()
  }
}
validationRules.validateShuttleTime = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入时效'))
  } else {
    callback()
  }
}
validationRules.validateDepartureTime = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请选择发车时间'))
  } else {
    callback()
  }
}
validationRules.validateContact = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入联系人'))
  } else {
    callback()
  }
}
validationRules.validateCompanyIntroduction = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入公司介绍'))
  } else {
    callback()
  }
}
validationRules.validateContactPhone = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入联系人手机号码'))
  } else {
    callback()
  }
}
validationRules.VerificationCode = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('验证码不能为空'))
  } else if(!/^\d{6}$/.test(value)){
    callback(new Error('请输入6位验证码'))
  } else {
    callback()
  }
}
export default validationRules
