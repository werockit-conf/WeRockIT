<template>
  <div id="app">
    <div class="container mx-auto">
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
      <router-link to="/speakers">Speakers</router-link> | <router-link to="/wip">Schedule</router-link> |
      <router-link to="/wip">Sponsors</router-link> | <router-link to="/venue">Venue/Travel</router-link> |
      <router-link to="/wip">Tickets</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.text-wri-teal {
  color: #5ecec6;
}

.bg-wri-blue {
  background-color: #05377b;
}
</style>
