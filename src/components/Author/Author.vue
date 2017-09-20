<template>
  <div class="container" style="height:100vh">
    <div class="userinfo">
      <img class="userinfo-avatar" :src="userInfo.avatarUrl">
      <span class="userinfo-nickname">欢迎 {{ userInfo.nickName }}</span>
    </div>
    <div class="usermotto">
      <span class="user-motto">{{ motto }}</span>
    </div>
    </div>
</template>

<script>
  export default {
    name: "author",
    data() {
      return {
        userInfo: {
            avatarUrl: '',
            nickName: ''
        },
        motto: '加载中，请稍候…'
      }
    },
    mounted() {
      // 存入 auth
      window.localStorage.setItem('auth', this.$route.params.auth);
      this.apiForAuth();
      // 过渡页跳转至上一次访问页面
      setTimeout( () => {
          this.$router.replace( localStorage.getItem('backpath') != null ? { name: localStorage.getItem('backpath') } : { name: 'index' } )
      }, 1500);
    },
    methods: {
      // 显示用户资料信息
      async apiForAuth() {
        const res = await this.$http.post('apiForAuth', {
          auth: localStorage.auth,
          appid: 'TEST'
        })
        this.userInfo.avatarUrl = res.param.headimgurl;
        this.userInfo.nickName = res.param.nickname;
        window.localStorage.setItem('headimgurl', res.param.headimgurl);
        window.localStorage.setItem('nickname', res.param.nickname);
      }
    }
  }
</script>

<style lang="scss" scoped>
.container{
  background: white;
  .userinfo{
    width: 100%;
    text-align: center;
    padding: 10rem 0;
    .userinfo-avatar{
      width: 7.5rem;
      height: 7.5rem;
      border-radius: 50%;
    }
    .userinfo-nickname{
      margin-top: 1rem;
      font-size: 1.6rem;
      display: inherit;
    }
  }
  .usermotto{
    position: fixed;
    bottom: 5rem;
    width: 100%;
    text-align: center;
    span{
      font-size: 1.6rem;
      display: inherit;
    }
  }
}
</style>