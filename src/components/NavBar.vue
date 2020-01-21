<template>
  <div :class="displayClasses" class="z-50">
    <nav ref="logo" class="flex items-center justify-between flex-wrap lg:flex-no-wrap">
      <div class="mx-auto inline float-left">
        <NavBarLogo name="home">
          <img alt="WeRockIT Conference" :src="logoPath" class="h-16 sm:float-left lg:mx-12" />
        </NavBarLogo>
      </div>
      <div class="block lg:hidden mx-auto my-4 inline">
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
          class="text-wri-teal px-24 py-8 lg:py-5 sm:bg-wri-dark-purple lg:bg-transparent lg:flex lg:justify-around lg:text-xl font-medium font-montserrat"
        >
          <NavBarLink name="about" hash="#about">About</NavBarLink>
          <NavBarLink name="travel">Travel</NavBarLink>
          <NavBarLink v-if="showSpeakerPage" name="speakers">Speakers</NavBarLink>
          <!-- <NavBarLink name="WorkInProgress">Schedule</NavBarLink>-->
          <NavBarLink name="sponsor">Sponsors</NavBarLink>
          <NavBarLink name="team">Team</NavBarLink>
          <a
            v-if="showTicketSales"
            href="https://www.tickettailor.com/events/werockitconf/268601"
            target="_blank"
            class="uppercase block lg:inline-block py-2 mr-4 border-b lg:border-0 border-blue-200"
            >Tickets</a
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import NavBarLink from './NavBarLink.vue'
import NavBarLogo from './NavBarLogo.vue'

export default {
  components: { NavBarLink, NavBarLogo },
  data: function() {
    return {
      open: false,
      bgcolor: 'bg-transparent',
      textColor: 'text-white',
      fixedStyles: 'fixed top-0 left-0 right-0',
      stickyStyles: 'sticky top-0 left-0 right-0',
      logoAsset: 'WeRockIT_white_logo.png',
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
    showTicketSales() {
      return process.env.VUE_APP_UNLOCK_TICKET_SALES == 'TRUE'
    },
    showSpeakerPage() {
      return process.env.VUE_APP_UNLOCK_SPEAKERS == 'TRUE'
    },
    logoPath() {
      return require('../assets/' + this.logoAsset)
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
      this.logoAsset = scrolled ? 'WeRockIT_black_logo.png' : 'WeRockIT_white_logo.png'
    },
  },
  watch: {
    $route() {
      if (this.open) {
        this.toggle()
      }
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
