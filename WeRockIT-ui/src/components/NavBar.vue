<template>
  <div class="navbar container mx-auto text-wri-teal">
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'speakers' }">Speakers</router-link> |
    <router-link :to="{ name: 'wip' }">Schedule</router-link> |
    <router-link :to="{ name: 'wip' }">Sponsors</router-link> |
    <router-link :to="{ name: 'venue' }">Venue/Travel</router-link> |
    <router-link :to="{ name: 'tickets' }">Tickets</router-link>
  </div>
</template>

<style scoped>
</style>
