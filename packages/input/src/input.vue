<template>
  <!-- 参考： <el-input v-model="user.username"></el-input> -->
  <!-- <el-input :value="user.username" @input="user.username = $event"></el-input> -->
  <div>
    <input v-bind="$attrs" @input="onInput" :value="value" :type="type" />
  </div>
</template>
<script>
export default {
  name: 'hq-input',
  inheritAttrs: false, // 便于给目标标记设置传递非prop属性
  props: {
    value: {
      type: String,
      require: true
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    onInput (evt) {
      this.$emit('input', evt.target.value)
    }
  }
}
</script>
