<template>
  <div class="about-page">
    <h1>About Us</h1>
    <p>Welcome to our About Page. Here you can learn more about us and our mission.</p>
    <p>Our team is dedicated to providing the best products and services to our customers.</p>
    <button @click="showMoreInfo">Learn More</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AboutPage',
  methods: {
    showMoreInfo() {
      alert('Here are some more details about us...');
    }
  }
}
</script>

<style scoped>
.about-page {
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 20px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>