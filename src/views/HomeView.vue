<template>
  <div class="home-page">
    <h1>Welcome to My Vue Homepage</h1>
    <p>This is a simple Vue homepage example.</p>
    <button @click="showMessage">Click Me!</button>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    showMessage() {
      alert('Hello from Vue!');
    }
  }
}
</script>

<style scoped>
.home-page {
  text-align: center;
  margin-top: 50px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>