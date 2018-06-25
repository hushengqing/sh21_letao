/**
 * Created by hsq on 2018/6/25.
 */
$(function () {

  //使用表单校验插件
  $("#form").bootstrapValidator({
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
            min: 6,
            max: 30,
            message:'用户名长度必须在6到30之间'
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
          }
        }
      }
    }
  });
});