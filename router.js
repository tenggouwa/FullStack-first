const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
module.exports = (app) => {
  router.post('/user/login', bodyParser(), app.controller.user.login) // 登录
  router.post('/user/register', bodyParser(), app.controller.user.register) // 注册
  router.post( '/saveBlock', bodyParser(), app.controller.home.saveBlock )
  router.get( '/getBlock', app.controller.home.getBlock )
  router.post( '/delBlock', bodyParser(), app.controller.home.delBlock )
  router.post( '/updateBlock', bodyParser(), app.controller.home.updateBlock )
  router.get('/home', app.controller.home.home)
  router.get('/home/:id/:name', app.controller.home.homeParams)
  router.get('/user', app.controller.home.login)
  app.use(router.routes()).use(router.allowedMethods())
}