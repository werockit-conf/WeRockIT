<template>
  <a :href="target_url" target="_blank">
    <SquareImageBlock :image_path="image_path" :header="header">
      <slot></slot>
    </SquareImageBlock>
  </a>
</template>

<script>
import SquareImageBlock from '@/components/SquareImageBlock.vue'

export default {
  name: 'SquareImageBlockLink',
  components: {
    SquareImageBlock,
  },
  props: ['image_path', 'target_url', 'header'],
  data: function() {
    return {
      hover: false,
    }
  },
}
</script>
