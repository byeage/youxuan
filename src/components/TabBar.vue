<template lang="pug">
  div.tab-bar
    router-link.nav.index(tag="div", active-class="active", :to="{name: 'index'}") 首页
    router-link.nav.rank(tag="div", active-class="active", :to="{name: 'rank'}") 排行榜
    router-link.nav.rebate(tag="div", active-class="active", :to="{name: 'rebate'}") 购物返利
    router-link.nav.special(tag="div", active-class="active", :to="{name: 'special'}") 专辑购物
    router-link.nav.mine(tag="div", active-class="active", :to="{name: 'mine'}") 我的
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .tab-bar {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    height: 1rem;
    background: #ccc;
    .nav {
      flex: 1;
      text-align: center;
    }
  }
</style>
