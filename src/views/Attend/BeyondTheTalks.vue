<template>
  <tile bgcolor="bg-white" title="Beyond The Talks" titleColor="text-wri-dark-blue">
    <div class="justify-center flex flex-wrap xl:hidden">
      <AttendSquareImage image_path="images/attend/mothers_room.jpg" header="Mothers Room" class="attend_block">
        <p class="text-base">
          A private mothers room equipped with a refrigerator will be available throughout the event
        </p>
      </AttendSquareImage>
      <AttendSquareImage image_path="images/attend/quiet_room.jpg" header="Quiet Room" class="attend_block">
        <p class="text-base">
          WeRockIT provides a quiet room to work, read, think, or have much needed recovery time.
        </p>
      </AttendSquareImage>
      <AttendSquareImage image_path="images/attend/speed_mentorship.jpg" header="Speed Mentorship" class="attend_block">
        <p class="text-base">
          Pair off with several experienced professionals to gain insight, advice, and knowledge. Preregistration
          required.
        </p>
      </AttendSquareImage>
      <AttendSquareImage image_path="images/attend/workshops.jpg" header="Workshops" class="attend_block">
        <p class="text-base">Learn a new skill. WeRockIT will offer beginner to intermediate level workshops</p>
      </AttendSquareImage>
      <AttendSquareImage image_path="images/attend/social_room.jpg" header="Social Lounge" class="attend_block">
      </AttendSquareImage>
      <AttendSquareImage image_path="images/attend/social_level.jpg" header="Social Level" class="attend_block">
        <p class="text-base">Establish your level of preferred social interaction with color coded lanyards</p>
      </AttendSquareImage>
    </div>
    <div class="">
      <div class="justify-center xl:flex xl:flex-wrap hidden">
        <AttendSquareImage image_path="images/attend/mothers_room.jpg" header="Mothers Room" class="attend_block">
          <p class="text-base">
            A private mothers room equipped with a refrigerator will be available throughout the event
          </p>
        </AttendSquareImage>
        <AttendSquareImage image_path="images/attend/quiet_room.jpg" header="Quiet Room" class="attend_block">
          <p class="text-base">
            WeRockIT provides a quiet room to work, read, think, or have much needed recovery time.
          </p>
        </AttendSquareImage>
        <AttendSquareImage
          image_path="images/attend/speed_mentorship.jpg"
          header="Speed Mentorship"
          class="attend_block"
        >
          <p class="text-base">
            Pair off with several experienced professionals to gain insight, advice, and knowledge. Preregistration
            required.
          </p>
        </AttendSquareImage>
      </div>
      <div class="justify-center xl:flex xl:flex-wrap hidden">
        <AttendSquareImage image_path="images/attend/workshops.jpg" header="Workshops" class="attend_block">
          <p class="text-base">Learn a new skill. WeRockIT will offer beginner to intermediate level workshops</p>
        </AttendSquareImage>
        <AttendSquareImage image_path="images/attend/social_room.jpg" header="Social Lounge" class="attend_block">
        </AttendSquareImage>
        <AttendSquareImage image_path="images/attend/social_level.jpg" header="Social Level" class="attend_block">
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
import AttendSquareImage from './AttendSquareImage.vue'
import Tile from '@/components/Tile.vue'

export default {
  name: 'suggested-hotels',
  components: {
    AttendSquareImage,
    Tile,
  },
}
</script>
