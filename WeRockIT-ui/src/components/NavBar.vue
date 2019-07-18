<template>
  <div class="fixed top-0 left-0 right-0">
    <div class="text-wri-black px-24 py-12 flex justify-between items-center">
      <img alt="WeRockIT Conference" src="../assets/WeRockIT_black.png" class="h-40" />
      <router-link class="text-2xl uppercase font-bold" :to="{ name: 'about' }">About</router-link>
      <router-link class="text-2xl uppercase font-bold" :to="{ name: 'WorkInProgress' }">Attend</router-link>
      <router-link class="text-2xl uppercase font-bold" :to="{ name: 'speakers' }">Speakers</router-link>
      <router-link class="text-2xl uppercase font-bold" :to="{ name: 'WorkInProgress' }">Schedule</router-link>
      <router-link class="text-2xl uppercase font-bold" :to="{ name: 'WorkInProgress' }">Sponsor</router-link>
      <router-link class="text-2xl uppercase font-bold" :to="{ name: 'WorkInProgress' }">Tickets</router-link>
    </div>
  </div>
</template>
