<template>
  <div class="hello">
    <div class="header">
       <h1>Welcome to Your Vue.js OTP App</h1>
    </div>
    <router-link to="/login">
      <base-button><span class="btn-title">Login Here</span></base-button>
    </router-link>
  </div>
</template>

<script>

export default {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header{
  padding: 5px;
  margin-bottom:20px;
}
.btn-title{
  font-size: 30px;
}
</style>
