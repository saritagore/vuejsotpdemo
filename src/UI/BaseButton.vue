<template>
    <button :class="mode">
        <slot></slot>
    </button>
</template>
<script>
export default{
    props:['mode']
}
</script>
<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #4caf50;
  border: 1px solid #4caf50;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

button:hover,
button:active {
  background-color: #4caf50;
  border-color: #4caf50;
}

.flat {
 padding: 0.5rem;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>