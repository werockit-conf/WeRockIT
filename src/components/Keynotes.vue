<template>
  <Tile bgcolor="bg-white" title="Keynotes" titleColor="text-wri-teal">
    <div class="sm:flex sm:flex-col md:flex-no-wrap md:flex-row md:flex-wrap justify-center">
      <PersonCard
        v-for="person in this.keynotes"
        :key="person.id"
        class="sm:w-2/4"
        :image_path="person.image_path"
        :name="person.name"
        :job_title="person.job_title"
        :secondary_title="person.secondary_title"
        :company="person.company"
        :linkedin="person.linkedin"
        :website="person.website"
        :twitter="person.twitter"
      />
    </div>
  </Tile>
</template>

<script>
import Tile from '@/components/Tile.vue'
import PersonCard from '@/components/PersonCard.vue'

export default {
  name: 'keynotes',
  components: {
    Tile,
    PersonCard,
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
