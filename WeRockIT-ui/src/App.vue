<template>
  <div id="app" class="bg-wri-blue">
    <router-view />
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.text-wri-black {
  color: #191716;
}

.text-wri-teal {
  color: #5ecec6;
}

.bg-wri-blue {
  background-color: #05377b;
}

.bg-wri-teal {
  background-color: #5ecec6;
}
</style>
