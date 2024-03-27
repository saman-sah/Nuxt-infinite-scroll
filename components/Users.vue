<template>
 <div ref="el" class="flex flex-col gap-2 p-4 w-300px h-300px max-h-[300px] m-auto overflow-y-scroll bg-gray-500/5 rounded">
    <div v-for="item in userList.users" :key="item" class="h-15 bg-gray-500/5 rounded p-3">
      {{ item.name }}
    </div>
    <p v-show="fetchingData">
      Fetching more users...
    </p>
  </div>
</template>

<script setup>

import { useInfiniteScroll } from '@vueuse/core'

const el = ref(null)
const userToShow = 15
const fetchingData = ref(false)
const userList = ref(await $fetch('/api/user?limit='+userToShow+'&skip='+0 ))

const getUsersonScroll = async () => {
  fetchingData.value = true;
  await new Promise((res) => setTimeout(res, 1500))
  console.log('userList.users.value.length', userList.value.users.length);
  const newUsers = await $fetch('/api/user?limit='+userToShow+'&skip='+userList.value.users.length)
  fetchingData.value =- true
  userList.value.push(...newUsers.users)
}

useInfiniteScroll(
  el,
  async () => {
    await getUsersonScroll();
  },
  { distance:10 },
)

</script>
