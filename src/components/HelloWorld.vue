<template>
  <div class="hello">
    <h1>This is Players page</h1>
    <button class="btn" @click="playerRoute">Click</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    playerRoute(){
      this.$router.push('/players')
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
