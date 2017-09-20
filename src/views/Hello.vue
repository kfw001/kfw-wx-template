<template>
  <div class="hello">
    <p>{{ msg }}</p>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
p {
  font-size: 1.6rem;
}
</style>