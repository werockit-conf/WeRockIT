<template>
  <tile bgcolor="bg-white" title="Beyond The Talks" titleColor="text-wri-dark-blue">
    <center>
      <div class="max-w-4xl">
        <div class="justify-center flex flex-wrap">
          <SquareImageBlock
            v-for="ammenity in amenities"
            class="w-1/3"
            :key="ammenity.id"
            :image_path="ammenity.image_path"
            :header="ammenity.header"
            :hover_enabled="false"
          >
            <p class="text-base">
              {{ ammenity.content }}
            </p>
          </SquareImageBlock>
        </div>
      </div>
      <div class="py-20">
        <a
          v-if="showTicketSales"
          href="https://www.tickettailor.com/events/werockitconf/268601"
          target="_blank"
          class="uppercase font-bold mt-4 font-montserrat inline p-2 px-6 bg-wri-teal rounded-full hover:bg-blue-300  lg:text-2xl md:text-xl sm:text-xl"
          >Get Tickets</a
        >
      </div>
    </center>
  </tile>
</template>

<script>
import SquareImageBlock from '@/components/SquareImageBlock.vue'
import Tile from '@/components/Tile.vue'

export default {
  name: 'suggested-hotels',
  components: {
    SquareImageBlock,
    Tile,
  },
  data: function() {
    return {
      amenities: [
        {
          id: 1,
          image_path: 'images/attend/social_level.jpg',
          header: 'Social Level',
          content: 'Establish your level of preferred social interaction with color coded lanyards.',
        },
        {
          id: 2,
          image_path: 'images/attend/workshops.jpg',
          header: 'Workshops',
          content: 'Learn a new skill. WeRockIT will offer beginner to intermediate level workshops.',
        },
        {
          id: 3,
          image_path: 'images/attend/social_room.jpg',
          header: 'Social Lounge',
          content:
            'Want to network and meet other industry professionals? Visit the Social Lounge hosted by local business Fiber Artwork!',
        },
        {
          id: 5,
          image_path: 'images/attend/mothers_room.jpg',
          header: 'Lactation Room',
          content: 'A private lacation room equipped with a refrigerator will be available throughout the event.',
        },
        {
          id: 6,
          image_path: 'images/attend/speed_mentorship.jpg',
          header: 'Speed Mentorship',
          content: 'Pair with experienced professionals to gain insight and knowledge. Preregistration required.',
        },
        {
          id: 7,
          image_path: 'images/attend/quiet_room.jpg',
          header: 'Quiet Room',
          content: 'WeRockIT provides a quiet room to work, read, think, or have much needed recovery time.',
        },
      ],
    }
  },
  computed: {
    showTicketSales() {
      return process.env.VUE_APP_UNLOCK_TICKET_SALES == 'TRUE'
    },
  },
}
</script>
