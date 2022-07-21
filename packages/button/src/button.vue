<template>
  <div>
    <button>{{ value }}</button>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      required: false
    }
  }
}
</script>
