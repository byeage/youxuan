<template lang="pug">
  div.home
    div.content
      router-view.view
    TabBar.footer
</template>

<script>
// @ is an alias to /src
import TabBar from '@/components/TabBar.vue'
// import { Cell, Checklist } from 'minu-ui';
export default {
  name: 'home',
  components: {
    TabBar
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
.content {
  flex: 1;
  align-self: stretch;
}
.footer {
  align-self: stretch;
}

</style>
