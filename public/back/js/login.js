/**
 * Created by hsq on 2018/6/25.
 */
$(function () {

  //使用表单校验插件
  $("#form").bootstrapValidator({

    //配置图标
    feedbackIcons: {
      //校验成功
      valid: 'glyphicon glyphicon-ok',//校验成功字体图标
      invalid: 'glyphicon glyphicon-remove',//校验失败
      validating: 'glyphicon glyphicon-refresh'//校验中
    },

    //指定校验字段
    fields: {
      username: {
        validators: {
          //  不能为空
          notEmpty: {
            message: '用户名不能为空'
          },
          //  长度校验
          stringLength: {
            min: 2,
            max: 6,
            message:'用户名长度必须在 2-6位'
          },
          callback:{
            message: "用户名不存在"
          }
        }
      },
      password: {
        validators: {
          //  不能为空
          notEmpty: {
            message: '密码不能为空'
          },
          //  长度校验
          stringLength: {
            min: 6,
            max: 12,
            message:'密码长度必须6-12位'
          },
          callback: {
            message: "密码错误"
          }
        }
      }
    }

  });

  /**
   * 使用submit按钮，进行提交，表单校验插件，会在提交时，进行校验
   * （1）如果校验成功，会默认提交这次请求，会进行跳转，我们需要阻止这次提交，通过ajax提交
   * 2.如果校验失败，会提示用户，输入有误
   * 需要注册表单校验成功事件，在成功时间内，阻止默认的表单提交，通过ajax进行提交
   */
$('#form').on("success.form.bv", function(e){
  e.preventDefault();//阻止默认表单提交
  //通过ajax提交
  $.ajax({
    type:"post",
    url:"/employee/employeeLogin",
    data:$('#form').serialize(),
    dataType:"json",
    success:function (info) {
      console.log(info);
      if(info.success){
      //  如果登陆成功跳转到首页
        location.href = "index.html";
      }
      if (info.error === 1000) {
      // alert("用户名不存在");
       // 将username的校验状态，置成校验失败状态，提示用户名不存在
        $('#form').data("bootstrapValidator").updateStatus("username", "INVALID", "callback");
      }
      if (info.error === 1001) {
        // alert("密码错误");
        //将password的校验状态，置成校验失败状态，并提示密码错误
        //updateStatus 的参数
        $('#form').data("bootstrapValidator").updateStatus("password", "INVALID", "callback");
      }
    }

  });

})

//3.重置表单
  $('[type="reset"]').click(function () {
  //  调用实例的方法进行重置，resetForm里面可以传true 也可以不传
  $('#form').data("bottstrapValidator").resetForm();
  })

});