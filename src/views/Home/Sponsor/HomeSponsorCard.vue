<template>
  <div class="">
    <img :class="maxSponsorWidth" :src="imagePath()" :alt="logoName()" />
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
    maxSponsorWidth: function() {
      console.log(this.level_name)
      if (this.level_name == 'Platinum') {
        return ''
      } else if (this.level_name == 'Diamond') {
        return 'h-16'
      }
      return ''
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
