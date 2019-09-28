<template>
  <div class="container mx-auto">
    <div class="text-center">
      <h1>Our Organizers</h1>
      <ul>
        <li v-for="organizer in sortedOrganizers" v-bind:key="organizer.name">
          <OrganizerPane :organizer="organizer"></OrganizerPane>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import OrganizerPane from '@/components/OrganizerPane.vue'
import WeRockData from '@/components/werockdata.js'

export default {
  name: 'organizers',
  data: function() {
    return {
      organizers: [],
    }
  },
  computed: {
    sortedOrganizers: function() {
      this.sortOrganizers()
      return this.organizers
    },
  },
  methods: {
    sortOrganizers: function() {
      this.organizers.sort(function(a, b) {
        return a.name > b.name ? 1 : -1
      })
    },
    loadOrganizers: function() {
      let base = WeRockData.organizers()
      let organizers = this.organizers

      base('BoardMembers')
        .select({
          view: 'Grid view',
        })
        .eachPage(
          function page(records, fetchNextPage) {
            records.forEach(function(record) {
              var name = record.get('Name')
              var headshot_list = record.get('Headshot')

              var headshot_url = ''
              if (headshot_list) {
                var headshot = headshot_list[0]

                if (headshot) {
                  headshot_url = headshot.url
                }
              }

              organizers.unshift({ name: name, headshot_url: headshot_url })
            })

            fetchNextPage()
          },
          function done(err) {
            if (err) {
              console.error(err)
              return
            }
          }
        )

      this.organizers = organizers
    },
  },
  mounted() {
    this.loadOrganizers()
  },
  components: {
    OrganizerPane,
  },
}
</script>
