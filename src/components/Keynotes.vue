<template>
  <Tile bgcolor="bg-white" title="Keynotes" titleColor="text-wri-teal">
    <div class="sm:flex md:flex-wrap justify-center">
      <SpeakerCard
        v-for="person in this.keynotes"
        :key="person.id"
        class="sm:w-2/4"
        :image_path="person.image_path"
        :name="person.name"
        :talk_title="person.talkTitle"
      />
    </div>
  </Tile>
</template>

<script>
import Tile from '@/components/Tile.vue'
import SpeakerCard from '@/components/SpeakerCard.vue'

export default {
  name: 'keynotes',
  components: {
    Tile,
    SpeakerCard,
  },
  props: {
    keynotes: {
      type: Array,
      required: true,
    },
  },
  // data: function() {
  //   return {
  //     keynotes: [],
  //   }
  // },
  // methods: {
  //   fetchKeynotes: function() {
  //     this.keynotes = [
  //       {
  //         id: 1213,
  //         name: 'Toni',
  //         image_path: 'https://2019.werockitconf.com/img/speakers/DayniseJoseph.jpeg',
  //         job_title: 'title',
  //         company: 'Toyota Mazda',
  //         website: 'http://www.werockitconf.com',
  //         twitter: 'toniisgreat',
  //       },
  //       {
  //         id: 12321,
  //         name: 'Chris',
  //         image_path: 'https://2019.werockitconf.com/img/speakers/Katreena.jpg',
  //         job_title: 'title',
  //         company: 'University of Alabama In Tuscaloosa',
  //         website: 'http://www.werockitconf.com',
  //         twitter: 'chrisisalso',
  //       },
  //       {
  //         id: 12321,
  //         name: 'Chris',
  //         image_path: 'https://2019.werockitconf.com/img/speakers/Katreena.jpg',
  //         job_title: 'title',
  //         company: 'University of Alabama In Tuscaloosa',
  //         website: 'http://www.werockitconf.com',
  //         linkedin: 'fdsfds',
  //         twitter: 'chrisisalso',
  //       },
  //     ]
  //   },
  // },
  // mounted() {
  //   this.fetchKeynotes()
  // },
}
</script>
