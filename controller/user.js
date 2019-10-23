const miBack = require('../middleware/mi-back')
const mongoose = require("mongoose");
const User = mongoose.model('User')
const myreg = /^1[3|4|5|7|8][0-9]\d{8,11}$/
module.exports = {
  login: async(ctx, next) => {
    try {
      const { phoneNumber, password } = ctx.request.body
      if (!phoneNumber || !password) {
        ctx.body = miBack(1, null, '请输入手机号或者密码')
        return false
      }
      if (phoneNumber && password && phoneNumber.length === 11 && myreg.test(phoneNumber)) {
          const user = await User.findOne({
            phoneNumber
          })
          if (user.password === password) {
            ctx.body = miBack(0, null)
          } else {
            ctx.body = miBack(1, null, '账号或密码错误')
          }
      } else {
        ctx.body = miBack(1, null, '请输正确的入手机号或者密码')
        return false
      }
    } catch (err) {
      ctx.body = miBack(1, null, '系统异常')
    }
  },
  register: async(ctx, next) => {
    try {
      const { phoneNumber, password } = ctx.request.body
      if (phoneNumber && password) {
        const user = await User.findOne({
          phoneNumber
        })
        if (!user) {
          if (phoneNumber.length === 11 && myreg.test(phoneNumber)) {
            let user = new User({
              phoneNumber,
              password
            })
            user = user.save()
            ctx.body = miBack(0, null)
          } else {
            ctx.body = miBack(1, null, '请输入正确的手机号码')
          }
        } else {
          ctx.body = miBack(1, null, '您的手机已经注册')
        }
      } else {
        ctx.body = miBack(1, null, '请输入手机号或者密码')
      }
    } catch (err) {
      ctx.body = miBack(1, null, '系统异常')
    }
  }
  
}