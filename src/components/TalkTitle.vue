<template>
  <div class="text-sm">
    <span v-if="this.talk_tag != ''" :class="tagColor" class="rounded-full p-1 text-xs">{{ talk_tag }}</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['talk_tag'],
  computed: {
    tagColor() {
      if (this.talk_tag == 'iot') {
        return 'bg-pink-200'
      } else if (this.talk_tag == 'devops') {
        return 'bg-blue-200'
      } else if (this.talk_tag == 'development') {
        return 'bg-orange-200'
      } else if (this.talk_tag == 'career') {
        return 'bg-teal-200'
      } else if (this.talk_tag == 'data science') {
        return 'bg-purple-200'
      }

      return 'bg-transparent'
    },
  },
}
</script>
