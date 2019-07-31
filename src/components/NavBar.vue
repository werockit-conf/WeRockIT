<template>
  <div>
    <div :class="bgcolor" class="fixed top-0 left-0 right-0">
      <nav ref="logo" class="flex items-center justify-between flex-wrap text-wri-black px-24 py-12">
        <img alt="WeRockIT Conference" src="../assets/WeRockIT_logo.png" class="h-24 pr-4" />
        <div class="block lg:hidden">
          <button
            @click="toggle"
            class="flex items-center px-3 py-2 border rounded text-gray-700 border-black hover:text-black"
          >
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div :class="open ? 'block' : 'hidden'" class="w-full lg:w-auto lg:block flex-grow">
          <div
            class="text-sm md:text-xl flex-grow md:flex md:items-center md:justify-around bg-wri-teal md:bg-transparent"
          >
            <NavBarLink name="home">About</NavBarLink>
            <!-- <NavBarLink name="WorkInProgress">Attend</NavBarLink>
            <NavBarLink name="speakers">Speakers</NavBarLink>
            <NavBarLink name="WorkInProgress">Schedule</NavBarLink> -->
            <NavBarLink name="sponsor">Sponsors</NavBarLink>
            <!-- <NavBarLink name="WorkInProgress">Tickets</NavBarLink>--> -->
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import NavBarLink from './NavBarLink.vue'

export default {
  components: { NavBarLink },
  data: function() {
    return {
      open: false,
      bgcolor: 'bg-transparent',
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
    updateScroll() {
      this.bgcolor = window.scrollY < this.navbarHeight ? 'bg-transparent' : 'bg-white'
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
    this.navbarHeight = this.$refs.logo.offsetHeight
  },
}
</script>
