<template>
  <common-flex direction="column" align="center" class="pages-argue w100">
    <div class="pages-argue-title">Vue篇</div>
    <div v-for="i of list">
      <h3 class="pages-argue-company">{{ i.company }} {{i.time}}</h3>
      <div class="pages-argue-container w1000">
        <div class="pages-argue-container-subject" v-for="(j, index) of i.subject">
          <p>{{ index + 1 }}：{{ j }}</p>
        </div>
        <div class="pages-argue-container-total" v-for="k of i.total">
          <p>{{ k }}</p>
        </div>
      </div>
    </div>
  </common-flex>
</template>

<script setup>
import CommonFlex from "@comp/common/flex.vue";

const list = [
  {
    company: '上市公司',
    time: '8月29号',
    subject: [
        'href和src区别',
        '操作某一dom以及该dom的子节点',
        '移动端适配方案有多少种',
        '解决1px在某些手机上看起来像2px的兼容问题',
        'js的this指向',
        'vue的mvvm模式执行机制',
        '小程序不同页面传值方式',
        '用Echarts时做过哪些性能优化',
    ],
    total: [
        '面试：主要是问项目方面遇到的问题以及解决方案，亮点以及职业规划，为实现自己的职业规划做了哪些努力。',
        '由于之前用flutter写过一个未上线的项目，本来以往的面试自我介绍时我不会提及flutter，这次我顺口提了，这个总监说公司也在用flutter，而且是纯用，我心想这个公司应该稳了'
    ]
  },
  {
    company: '上市公司-复试',
    time: '9月1号',
    total: [
        `hr谈及我2年经验，又说前端这个职位工资普遍相对低，问了我上一家公司待遇后，就开始压工资，
        我说出了我的目标，不要看我才两年经验，得看技术匹配，她说加个微信，她再向上反馈一下，再通知我，等我出了公司门，
        她发微信说问下周一入职可以吗，接受了，不过感觉这hr谈薪资就压得特别低，感觉被压了`
    ]
  },
  {
    company: '游戏公司-第一轮',
    time: '8月26日',
    subject: [
        '移动端布局做过哪些方案，横屏的兼容性怎么做处理',
        '瀑布流做过吗，纯用css怎么实现',
        '实现深拷贝的方式有哪些，分别有什么缺陷',
        '防抖节流做过吗',
        '性能优化有做过哪些，分别从构建过程、首页响应时间(白屏时间)、用户交互体验三个方面做解说',
        'keep-alive里面组件的生命周期',
        'vue子孙组件互相传值有哪些方式',
    ]
  },
  {
    company: '游戏公司-第二轮',
    time: '8月26日',
    subject: [
      '聊了20分钟公司以及问了一些问题，业务爱好，为什么选择他们公司等等',
      '项目经理聊了公司业务发展，以及这个岗位的任务，离职原因，对技术和业务怎么看，以及对我的稳定性的讨论',
    ],
    total: ['回来微信告诉我通过了，不过算上我公司就俩前端，目前没去']
  },
  {
    company: '智能家居公司',
    time: '8月26日',
    subject: [
      '持续集成',
      '前后端实时通信',
      '怎么实现一个类似低代码平台的编辑器',
    ],
    total: [
        '其他的跟八股文一样，问的挺多，小公司就是那种要你什么都会，一人顶三人',
        '我问了公司前端团队。说才开始招，准备做智能家居的业务，要实现多平台，给用户一个类似低代码平台的界面供其使用，桌面端electro，以及后台管理，说就招俩人，结果当然没过'
    ]
  },
  {
    company: '交友的公司',
    time: '8月23日',
    subject: [
      '大文件上传',
      'const 一个对象后，能用另一个对象直接替换吗',
      'generator里面返回的是什么，会阻塞js吗？',
      'async await执行机制，是谁的语法糖',
      'for of 怎么获取索引',
      '小程序setData里面很多属性修改为什么很慢？',
      '响应式原理，vue3为什么比2快很多为什么',
      '代码部署到生产环境清楚吗，你之前项目有配置CDN吗，前端页面怎么配置缓存的',
      'seo优化有哪些',
      'http和https区别，什么是对称加密，https一定安全吗',
      '说说mvvm的模式',
      '说说mvvm的模式',
      '对加班怎么看',
      '职业规划'
    ],
    total: [
      '结果：没过，我说加班看任务繁忙程度吧，如果排期内任务做完了而且白天专注度很高的话，我原则上不加班'
    ]
  },
]
</script>

<style lang="scss">
.pages-argue {
  padding: 20px 0;
  &-title {
    @include nFont(24 #222 600)
  }
  &-company {
    margin-top: 25px;
    //@include nFont(18 #333 600)
  }
  &-container {
    margin-top: 20px;
    padding: 24px;
    border-radius: 10px;
    background-color: #F6F6F6;
    &-subject {
      margin-bottom: 24px;
      //@include nFont(16 #888 600)
    }
    &-total {
      //@include nFont(16 #666 600 26)
      line-height: 30px;
    }
  }

}
</style>