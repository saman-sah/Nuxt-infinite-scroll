<template>
  <h1 class="h1 text-red-600">Home page</h1>
</template>

<script setup>
const limit = 10;
const skip = 0;
const data = await $fetch('/api/user?limit='+limit+'&skip='+skip )
console.log(data.users);

// const element = document.documentElement
// const clientHeight = element.clientHeight
// const scrollHeight = element.scrollHeight
// const scrollTop = element.scrollTop

// if(scrollTop + clientHeight >= scrollHeight) {
//   // Call Api for more data
// }
</script>
