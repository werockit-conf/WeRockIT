<template>
  <router-link
    class="uppercase font-montserrat block lg:inline-block py-2 mr-4 border-b lg:border-0 border-blue-200"
    :to="{ name: this.name }"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: ['name', 'description'],
}
</script>
