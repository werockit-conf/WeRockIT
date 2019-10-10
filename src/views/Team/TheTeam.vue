<template>
  <Tile bgcolor="bg-white" title="" titleColor="text-wri-dark-blue">
    <div class="flex flex-wrap">
      <PersonCard
        v-for="person in team" :key="person.id"
        class="w-1/4"
        :image_path="person.image_path"
        :name="person.name"
        :job_title="person.job_title"
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
  name: 'the-team',
  components: {
    Tile,
    PersonCard,
  },
  data() {
    return {
      team: [
        {
          id: 1,
          image_path: 'team/angelina.jpg',
          name: 'Angelina Uno-Antonison',
          job_title: 'Software Developer III - Genomics',
          company: 'Center for Computation Genomics and Data Science at UAB',
          linkedin: 'https://www.linkedin.com/in/angeunoantonison/',
          website: 'kittenware.horncats.net',
          twitter: 'https://twitter.com/SeriousHorncat',
        },
        {
          id: 2,
          image_path: 'team/marcia.jpg',
          name: 'Marcia Ensley',
          job_title: 'Software Engineer',
          company: 'Northrop Grumman',
          linkedin: 'https://www.linkedin.com/in/mdensley/',
        },
        {
          id: 3,
          image_path: 'team/val.jpg',
          name: 'Valerie Davis',
          job_title: 'Systems Engineer',
          company: 'IERUS Technologies, Inc',
          linkedin: 'https://www.linkedin.com/in/vcdavis1003/',
        },
        {
          id: 4,
          image_path: 'team/may.jpg',
          name: 'May Chen',
          job_title: 'Software Development Engineer',
          company: 'ADTRAN, Inc.',
          linkedin: 'https://www.linkedin.com/in/maychen36/',
        },
        {
          id: 5,
          image_path: 'team/marissa.jpg',
          name: 'Marissa Jones'         
        },
        {
          id: 6,
          image_path: '',
          name: 'Raelyn Bangel',
          job_title: 'Software Consultant',
          company: 'Test Double, LLC',
          linkedin: 'https://www.linkedin.com/in/raelyn-bangel',
        },
        {
          id: 7,
          image_path: 'team/lacy.jpg',
          name: 'Lacey Reinoehl',
          job_title: 'Head of Product',
          company: 'Lojix',
          linkedin: 'https://www.linkedin.com/in/lacey-reinoehl/',
        },
      ],
    }
  },
}
</script>
