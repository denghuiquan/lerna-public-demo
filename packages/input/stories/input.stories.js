import HqInput from '../index'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'HQ/Input',
  component: HqInput,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    // 定制组件的参数配置面板
    value: {
      name: 'value',
      type: 'string',
      control: 'text'
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'number', 'password', 'email', 'color']
    },
    onInput: { action: 'inputed' }
  }
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  // methods: {
  //   onInput ($event) {
  //     console.log($event)
  //     this.$emit('input', $event)
  //   }
  // },
  props: Object.keys(argTypes),
  components: { HqInput },
  template: '<hq-input @input="onInput" v-bind="$props" />'
})

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  type: 'text',
  value: '文本',
  placeholder: '请输入文本'
}

export const Number = Template.bind({})
Number.args = {
  type: 'number',
  value: '2',
  placeholder: '请输入数字'
}

export const Password = Template.bind({})
Password.args = {
  type: 'password',
  value: 'aaabbbccc',
  placeholder: '请输入密码'
}

export const Email = Template.bind({})
Email.args = {
  type: 'email',
  value: 'aaabbb@ccc.ddd',
  placeholder: '请输入邮箱'
}

export const Color = Template.bind({})
Color.args = {
  type: 'color',
  value: '#55cc55',
  placeholder: '请输入颜色值'
}
