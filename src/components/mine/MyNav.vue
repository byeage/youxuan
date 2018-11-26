<template lang="pug">
  nav.my-nav
    router-link.nav(tag="div", :to={name: 'publish'}) 发布商品
    router-link.nav(tag="div", :to={name: 'publish'}) 浏览足迹
    router-link.nav(tag="div", :to={name: 'publish'}) 新手学堂
    router-link.nav(tag="div", :to={name: 'publish'}) 我的抽奖
    div.nav 分享给好友
    router-link.nav(tag="div", :to={name: 'publish'}) 推广海报
    router-link.nav(tag="div", :to={name: 'publish'}) 收入排行榜
    div.nav 联系客服

</template>
<script>
export default {
  name: 'MyNav'
}
</script>

<style lang="scss" scoped>
  .my-nav {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    border-top: 1px solid #f4f4f4;
    .nav {
      width: 25%;
      text-align: center;
      padding: 0.3rem 0;
      border-left: 1px solid #f4f4f4;
      border-left: 1px solid #f4f4f4;
      border-bottom: 1px solid #f4f4f4;
    }

    .nav:nth-child(4n + 1) {
      border-left: none;
    }
    .nav:nth-child(4n + 1) {
      border-left: none;
    }
  }
</style>
