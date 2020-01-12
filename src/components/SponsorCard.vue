<template>
  <div class="flex flex-wrap justify-center">
    <img class="inline-block w-1/3" :src="imagePath()" alt="image" />
  </div>
</template>

<script>
export default {
  name: 'PersonCard',
  props: {
    image_path: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: '',
    },
    website: {
      type: String,
      default: '',
    },
  },
  methods: {
    imagePath: function() {
      if (this.image_path.startsWith('http')) {
        return this.image_path
      } else {
        return require('@/assets/' + this.image_path)
      }
    },
  },
}
</script>
