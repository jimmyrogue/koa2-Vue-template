<template>
  <div class="container">
    <form class="form create" method="post">
      <div>
        <label>用户名 {{user.name}}：</label>
        <input placeholder="请输入用户名" type="text" name="name">
      </div>
      <div>
        <label>密码：{{user.pass}}</label>
        <input placeholder="请输入密码" class="password" type="password" name="password">
      </div>
      <div>
        <label>重复密码：</label>
        <input placeholder="请确认密码" class="repeatpass" type="password" name="repeatpass">
      </div>
      <div>
        <label>上传头像：</label>
        <input type="file" name="avator" id="avator">
        <input type="hidden" id="avatorVal">
        <img class="preview" alt="预览头像">
      </div>
      <div class="submit" @click="hello">注册</div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    const _this = this;
    return {
      user: {
        name: "jimmy",
        pass: "123456"
      }
    };
  },
  methods: {
    hello() {
      this.$api.test("login/pid:32", null, r => {
        console.log(r);
      });
    //   alert("hello world");
    }
  }
};
</script>
<style>
/* @import '../less/base.less';

	.example {
		color: red;
	} */
</style>