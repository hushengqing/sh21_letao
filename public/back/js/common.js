/*
实现进度条功能（给ajax请求加）注意需要给所有的ajax都加
发送ajax开启进度条，ajax结束，关闭进度条

 */
//开启进度条
// NProgress.start();
// setInterval(function () {
//   //关闭进度条
//   NProgress.done();
// }, 500);

//1.注册全局事件，jq的全局事件需要给document注册
$(document).ajaxStart(function () {
    //开启进度条
  NProgress.start();
});
//在ajax请求结束的时候触发
$(document).ajaxStop(function () {
//  关闭进度条
//  所有的ajax只要结束，延迟500毫秒结束进度条
  setInterval(function () {
    NProgress.done();
  }, 500);
})

/*
ajax 全局事件
.ajaxComplete() 每个ajax完成时调用
.ajaxSuccess()              每个ajax成功时调用
 .ajaxError()    每个ajax发送失败调用
      Send()   每个ajax发送前调用
      Start()    第一个ajax发送前调用
      Stop()   所有的ajax请求都完成调用
 */

//公共功能
// 1.左则二级菜单切换显示
// slideToggle
// 2.左则整个侧边栏显示隐藏功能
// 给左边的盒子加上一个类 -180px
// toggleClass("类名")
// 改padding
// 3.点击头部退出按钮，显示退出模态框


// 3.点击头部退出按钮，显示退出模态框
// 4.点击模态框中的退出按钮，需要进行退出操作（ajax）
//  发送ajax请求进行退出操作，让后台习奥会当前用户的登录状态
// $.ajax({
//   type:
//   url
//   dataType:
//   success: function (info) {
//
// }
// })

// 5.如果当前用户没有登录，需要拦截到登录页面
// 前端不知道用户是否登录了，但是后台知道，想知道，问后台接口




















