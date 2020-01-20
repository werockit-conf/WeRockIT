<template>
  <Tile title bgcolor="bg-wri-blue" id="about">
    <!-- <div class="container mx-auto bg-wri-blue p-20 text-center"> -->
    <div class="mx-auto text-center text-xl pb-12 text-white">
      <div>
        WeRockIT Conf is an annual two-day conference that features all disciplines of technology and shows how they all
        can interconnect. We'll highlight a wide range of speakers to educate and inspire our guests. Our mission is to
        showcase and grow diverse voices in technology.
      </div>
      <br />
      <div>
        This conference is being organized by a group of passionate developers who are dedicated to enriching the
        Huntsville, AL tech community. WeRockIT Conf will include a mix of panel discussions, keynotes, speakers, and
        hands-on workshops.
      </div>
      <br />
      <div>
        This year the topics will focus on: DevOps, IOT, Development, and Data Science. So, come join us on our mission!
      </div>
    </div>
    <div class="container mx-auto text-center">
      <router-link
        class="uppercase font-montserrat font-bold block mt-4 inline p-2 bg-wri-teal rounded-full hover:bg-blue-300 text-2xl"
        :to="{ name: 'codeofconduct' }"
      >
        Code Of Conduct
      </router-link>
    </div>
  </Tile>
</template>

<script>
import Tile from '@/components/Tile.vue'

export default {
  components: { Tile },
}
</script>
