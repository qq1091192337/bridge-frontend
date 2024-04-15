<template>
  <!-- 添加一个 div 用作容器 -->
  <div id="grecaptcha"></div>
</template>
<script>
export default {
  data() {
    return {
      sitekey: "6LfSPMglAAAAALV_3KxQ_DYtShqfu7ogQYFQHgQj"
    };
  },
  methods: {
    submit: function(token) {
      console.log(token);
    },
    verify() {
      const sitekey = this.sitekey;
      return new Promise((resolve, reject) => {
        window.grecaptcha.ready(function() {
          window.grecaptcha.execute(sitekey, {action: 'submit'}).then(function(token) {
            resolve(token); // 使用 resolve 改变 Promise 的状态
          }).catch(function(error) {
            reject(error); // 使用 reject 改变 Promise 的状态
          });
        });
      });
    }
  },
  mounted() {
  }
};
</script>