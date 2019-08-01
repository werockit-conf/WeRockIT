<template>
  <div :class="displayClasses">
    <nav ref="logo" class="flex items-center justify-between flex-wrap">
      <img alt="WeRockIT Conference" src="../assets/WeRockIT_logo.png" class="h-20 lg:h-24 mx-12 my-8" />
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
      <div :class="open ? 'block' : 'hidden'" class="w-full lg:w-auto order-first lg:order-last lg:block lg:flex-grow">
        <div
          :class="lgTextColor"
          class="bg-wri-dark-purple text-wri-teal px-24 py-8 lg:bg-transparent lg:flex lg:justify-around lg:text-xl font-medium font-montserrat"
        >
          <NavBarLink name="home">About</NavBarLink>
          <NavBarLink name="travel">Travel</NavBarLink>
          <!-- <NavBarLink name="speakers">Speakers</NavBarLink>
          <NavBarLink name="WorkInProgress">Schedule</NavBarLink>-->
          <NavBarLink name="sponsor">Sponsors</NavBarLink>
          <a
            href="https://2019.werockitconf.com"
            target="_blank"
            class="uppercase block lg:inline-block py-2 mr-4 border-b lg:border-0 border-blue-200"
            >Past Events</a
          >
          <a
            href="https://www.papercall.io/werockitconf2020"
            target="_blank"
            class="uppercase block lg:inline-block py-2 mr-4 border-b lg:border-0 border-blue-200"
            >2020 CFP</a
          >
          <!-- <NavBarLink name="WorkInProgress">Tickets</NavBarLink>-->
        </div>
      </div>
    </nav>
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
      textColor: 'text-white',
      fixedStyles: 'fixed top-0 left-0 right-0',
      stickyStyles: 'sticky top-0 left-0 right-0',
    }
  },
  computed: {
    displayClasses() {
      let styles = this.open ? this.stickyStyles : this.fixedStyles
      return [this.bgcolor, styles].join(' ')
    },
    lgTextColor() {
      return 'lg:' + this.textColor
    },
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
    updateScroll() {
      let scrolled = window.scrollY > this.navbarHeight
      this.bgcolor = scrolled ? 'bg-white' : 'bg-transparent'
      this.textColor = scrolled ? 'text-black' : 'text-white'
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
