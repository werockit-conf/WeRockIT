<template>
  <tile bgcolor="bg-white" title="Beyond The Talks" titleColor="text-wri-dark-blue">
    <div class="justify-center">
      <div class="">
        <AttendSquareImage image_path="images/attend/mothers_room.png" header="Mothers Room" :hover_enabled="false">
          <p class="text-base">
            A private mothers room equipped with a refrigerator will be available throughout the event
          </p>
        </AttendSquareImage>
        <AttendSquareImage image_path="images/attend/quiet_room.png" header="Quiet Room" :hover_enabled="false">
          <p class="text-base">
            WeRockIT provides a quiet room to work, read, think, or have much needed recovery time.
          </p>
        </AttendSquareImage>
        <AttendSquareImage
          image_path="images/attend/speed_mentorship.png"
          header="Speed Mentorship"
          :hover_enabled="false"
        >
          <p class="text-base">
            Pair off with several experienced professionals to gain insight, advice, and knowledge. Preregistration
            required.
          </p>
        </AttendSquareImage>
        <AttendSquareImage image_path="images/attend/workshops.png" header="Workshops" :hover_enabled="false">
          <p class="text-base">Learn a new skill. WeRockIT will offer beginner to intermediate level workshops</p>
        </AttendSquareImage>
        <AttendSquareImage image_path="images/attend/social_room.png" header="Social Lounge" :hover_enabled="false">
        </AttendSquareImage>
        <AttendSquareImage image_path="images/attend/social_level.jpg" header="Social Level" :hover_enabled="false">
          <p class="text-base">Establish your level of preferred social interaction with color coded lanyards</p>
        </AttendSquareImage>
      </div>
    </div>
  </tile>
</template>

<style scoped>
.attend_block {
  @apply m-6;
}
</style>

<script>
import SquareImageBlock from '@/components/SquareImageBlock.vue'
import Tile from '@/components/Tile.vue'

export default {
  name: 'suggested-hotels',
  components: {
    SquareImageBlock,
    Tile,
  },
}
</script>
