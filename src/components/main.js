import Vue from 'vue'
// import ElementUI from 'element-ui'
// import mycomponent from './mycomponent'
import Input from '../../packages/input'

// Vue.use(ElementUI)
Vue.use(Input)
new Vue({
  el: '#app',
  render (h) {
    return h('hq-input', {
      props: { value: '12345@qq.com', type: 'email' },
      attrs: { placeholder: '请输入用户邮箱' },
      on: {
        input: evt => {
          console.log(evt)
        }
      }
    })
  }
})
