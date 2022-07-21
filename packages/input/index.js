import Input from './src/input'
// 添加install方法，让组件可以使用Vue.use()进行安装使用
Input.install = Vue => {
  Vue.component(Input.name, Input)
}

export default Input
