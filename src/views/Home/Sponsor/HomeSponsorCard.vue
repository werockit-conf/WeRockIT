<template>
  <div class="">
    <img :class="sponsorStyle" :src="imagePath()" :alt="logoName()" />
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
        return 'mx-auto h-24 md:h-20'
      } else if (this.level_name == 'Diamond') {
        return 'mx-auto h-16 pt-2'
      }
      return 'mx-auto'
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
