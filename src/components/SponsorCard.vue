<template>
  <div class="flex flex-wrap justify-center">
    <img class="inline-block" :class="sponsorStyle" :src="imagePath()" :alt="logoName()" />
  </div>
</template>

<script>
export default {
  name: 'SponsorCard',
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
    level_name: {
      type: String,
      default: '',
    },
  },
  computed: {
    sponsorStyle: function() {
      if (this.level_name == 'Platinum') {
        return 'max-w-lg h-24'
      } else if (this.level_name == 'Diamond') {
        return 'max-w-xs h-20'
      }
      return 'max-w-md'
    },
  },
  methods: {
    logoName: function() {
      return this.name + ' Logo'
    },
    imagePath: function() {
      if (this.image_path == '') {
        return ''
      } else if (this.image_path.startsWith('http')) {
        return this.image_path
      } else {
        return require('@/assets/' + this.image_path)
      }
    },
  },
}
</script>
