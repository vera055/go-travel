<template>
  <div>
    <div class="title">猜你喜欢</div>
    <ul>
      <router-link
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>

</template>

<script>
export default{
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}

</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background-color #eee
    text-indent: .2rem
  ul
    margin-left: .24rem
    .item
      overflow: hidden
      display: flex
      padding: .2rem 0
      height: 2.2rem
      .item-img
        width: 2rem
        height: 2rem
        pddding: .1rem
      .item-info
        flex: 1
        padding: .1rem
        overflow: hidden
        .item-title
          line-height: .44rem
          font-size: .32rem
        .item-desc
          line-height: .4rem
          font-size: .24rem
          color: #f55
          ellipsis()
        .item-button
          line-height: .4rem
          margin-top: .2rem
          background-color: #ff9300
          padding: 0 .15rem
          border-radius: .06rem
          color: #fff
</style>
