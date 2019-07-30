<template>
  <router-link
    class="uppercase font-montserrat font-bold block mt-4 md:inline-block md:mt-0 mr-4"
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
