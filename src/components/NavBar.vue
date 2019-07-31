<template>
  <div>
    <div :class="bgcolor" class="fixed top-0 left-0 right-0">
      <nav ref="logo" class="flex items-center justify-between flex-wrap">
        <img alt="WeRockIT Conference" src="../assets/WeRockIT_logo.png" class="h-24 mx-12 my-8" />
        <div class="block lg:hidden mx-12 my-8">
          <button
            @click="toggle"
            class="border-wri-teal flex items-center px-3 py-2 rounded bg-wri-dark-purple text-wri-teal hover:text-black"
          >
            <svg
              height="32px"
              id="Layer_1"
              class="svg-fill"
              version="1.1"
              viewBox="0 0 32 32"
              width="32px"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
              />
            </svg>
          </button>
        </div>
        <div
          :class="open ? 'block' : 'hidden'"
          class="w-full lg:w-auto order-first lg:order-last lg:block lg:flex-grow"
        >
          <div
            class="bg-wri-dark-purple text-wri-teal px-24 py-8 lg:bg-transparent lg:text-black lg:flex lg:justify-around"
          >
            <NavBarLink name="home">About</NavBarLink>
            <NavBarLink name="WorkInProgress">Attend</NavBarLink>
            <NavBarLink name="speakers">Speakers</NavBarLink>
            <NavBarLink name="WorkInProgress">Schedule</NavBarLink>
            <NavBarLink name="WorkInProgress">Sponsors</NavBarLink>
            <NavBarLink name="WorkInProgress">Tickets</NavBarLink>
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

<style>
.svg-fill {
  stroke: #5ecec6;
  fill: #5ecec6;
}
</style>
