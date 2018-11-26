<template lang="pug">
  div.mine
    MyAccount
    MyOrder
    MyNav
</template>
<script>
import MyOrder from '@/components/mine/MyOrder'
import MyAccount from '@/components/mine/MyAccount'
import MyNav from '@/components/mine/MyNav'
export default {
  name: 'Mine',
  components: {
    MyOrder,
    MyAccount,
    MyNav
  }
}
</script>

<style lang="scss" scoped>
  .mine {

  }
</style>
