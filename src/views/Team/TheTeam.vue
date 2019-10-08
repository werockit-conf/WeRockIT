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
          image_path: 'westin.jpeg',
          name: 'Marcia Ensley',
          job_title: 'Software Developer III - Genomics',
          company: 'Center for Computation Genomics and Data Science at UAB',
          linkedin: 'https://www.linkedin.com/in/angeunoantonison/',
          website: 'kittenware.horncats.net',
        },
        {
          id: 3,
          image_path: 'westin.jpeg',
          name: 'Valerie Davis',
          job_title: 'Software Developer III - Genomics',
          company: 'Center for Computation Genomics and Data Science at UAB',
          linkedin: 'https://www.linkedin.com/in/angeunoantonison/',
        },
        {
          id: 4,
          image_path: 'westin.jpeg',
          name: 'May Chen',
          job_title: 'Software Developer III - Genomics',
          company: 'Center for Computation Genomics and Data Science at UAB',
          linkedin: 'https://www.linkedin.com/in/angeunoantonison/',
        },
        {
          id: 5,
          image_path: 'westin.jpeg',
          name: 'Marissa Jones',
          job_title: 'Software Developer III - Genomics',
          company: 'Center for Computation Genomics and Data Science at UAB',
          linkedin: 'https://www.linkedin.com/in/angeunoantonison/',
        },
        {
          id: 6,
          image_path: 'westin.jpeg',
          name: 'Raelyn Bangel',
          job_title: 'Software Developer III - Genomics',
          company: 'Center for Computation Genomics and Data Science at UAB',
          linkedin: 'https://www.linkedin.com/in/angeunoantonison/',
        },
        {
          id: 7,
          image_path: 'westin.jpeg',
          name: 'Lacey Reinoehl',
          job_title: 'Software Developer III - Genomics',
          company: 'Center for Computation Genomics and Data Science at UAB',
          linkedin: 'https://www.linkedin.com/in/angeunoantonison/',
        },
      ],
    }
  },
}
</script>
