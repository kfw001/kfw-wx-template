<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        // 微信授权相关信息
        auth_config: {
          response_type: 'auth',
          appid: 'TEST',
          redirect_uri: `${window.location.protocol}//${window.location.host}${window.location.pathname}#/author/{auth}`,
          scope: 'snsapi_userinfo'
        }
      }
    },
    methods: {
      // 微信授权
      // 注意！ 不加路由判断，则会重定向死循环
      handleHaveToken() {
        if(window.localStorage.getItem('auth') === null && this.$route.matched[0].name !== 'Author') {
          // 存入访问路径，用作过度页面后跳转
          window.localStorage.setItem('backpath', this.$route.name);
          const {response_type, appid, redirect_uri, scope} = this.auth_config;
          window.location.href = `http://api.mp.kfw001.com/auth/wechat/web?appid=${appid}`+
                                `&response_type=${response_type}`+
                                `&scope=${scope}`+
                                `&redirect_uri=${encodeURIComponent(redirect_uri)}`;
        }
      }
    },
    mounted() {
      this.handleHaveToken();
    }
  }
</script>
<style lang="scss">
  // 插入混合以及变量
  @import "~scss_vars";
  // body reset
  body, html, div, span, p, a, ul, li {
    margin: 0;
    padding: 0;
  }

  input, button {
    border: 0;
    outline: none;
  }

  body, html {
    width: 100%;
    font-family: -apple-system-font, "Microsoft YaHei", sans-serif, "Helvetica Neue";
    // 处理自适应
    font-size: calc(100vw / #{375 / $rem});
    // 点击白框
    -webkit-tap-highlight-color: rgba(#fff, 0);
    // 全局背景
    // background-color: $bgColor;
    overflow-x: hidden;
    // color
    color: $color;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    // 取消链接下划线
    text-decoration: none;
    // 默认链接颜色
    // color: $primaryColor;

  }

  li {
    list-style: none;
  }

  img {
    // 图片放超出
    width: 100%;

  }
</style>
