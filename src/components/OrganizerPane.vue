<template>
  <div class="border border-black">
    <div>{{ organizer.name }}</div>
    <SquareImageBlock :target_url="organizer.headshot_url"></SquareImageBlock>
  </div>
</template>

<script>
import SquareImageBlock from '@/components/SquareImageBlock.vue'

export default {
  name: 'OrganizerPane',
  props: ['organizer'],
  components: { SquareImageBlock },
}
</script>
