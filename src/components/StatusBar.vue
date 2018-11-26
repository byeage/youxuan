<template lang="pug">
  div.status-bar
    div.left
      slot(name="left")
        button.fa.fa-angle-double-right
    div.center
      slot(name="center")
        h3 h3
    div.right
      slot(name="right")
        button.menu menu
</template>
<script>
export default {
  name: 'StatusBar'
}
</script>

<style lang="scss" scoped>
.status-bar{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  height: 1rem;
  background: #f55;
}

.center {
  flex: 1;
  align-self: stretch;
  text-align: center;
}
.left,
.right {
  width: 1rem;
  background-color: aquamarine;
  align-self: stretch;
}
</style>

