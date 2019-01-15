<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs"
    >
       <div class="iconfont header-back-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed"></div>
header
  </div>
</template>

<script>
export default{
  name: 'DetailHeader'
}
</script>

<style lang="stylus" scoped>
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    text-align: center
    border-radius: .4rem
    background: rgba(0, 0, 0, .8)
    .header-back-icon
      color: #fff
      font-size: .4rem
</style>
