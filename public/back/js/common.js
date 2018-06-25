//刚进入页面就发送ajax请求，判断是否登录，通过地址栏是否有login.html文件判断
if (location.href.indexOf("login.html") === -1) {//等于-1 表示用户并没有退出，需要发送请求，退出
  $.ajax({
    type: "get",
    url: "/employee/checkRootLogin",
    dataType:"json",
    success:function (info) {
      console.log(info);
      if (info.error === 400 ) {
        location.href = "login.html";
      }
     if (info.success) {
       console.log("当前用户已登录");
     }
    }
  })
  
}


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

// 公共功能
$(function () {
  $('.lt_aside .category').click(function () {
  $('.lt_aside .child').stop().slideToggle();
  })
  
//  侧边栏隐藏显示功能
  $('.topbar .icon_menu').click(function () {
    $('.lt_aside').toggleClass('hideMenu');
    $('.topbar').toggleClass('hideMenu');
    $('.lt_main').toggleClass('hideMenu');
  });
  
  //模态框
  $('.topbar .icon_logout').click(function() {
    // 显示模态框
    console.log(1);
    console.log($('#logoutModel'));
    $('#logoutModal').modal("show");
  });
//退出功能
  $('#logoutBtn').click(function () {
    //发送ajax请求，让后台销毁当前用户的登录状态
    $.ajax({
      url: "/employee/employeeLogout",
      type: 'get',
      dataType: "json",
      success:function (info) {
        console.log(info);
        if (info.success) {
          //跳转到登录页面
          location.href = "login.html";
        }
      }
    })
  });
});

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
//模态框,点击退出按钮，显示退出模态框



// 5.如果当前用户没有登录，需要拦截到登录页面
// 前端不知道用户是否登录了，但是后台知道，想知道，问后台接口




















