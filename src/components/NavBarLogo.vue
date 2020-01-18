<template>
  <router-link :to="{ name: this.name }">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: ['name'],
}
</script>
