export default {
  base() {
    const apikey = process.env.VUE_APP_AIRTABLE_API_KEY
    const baseId = process.env.VUE_APP_AIRTABLE_BASE_ID

    var Airtable = require('airtable')

    Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: apikey,
    })

    return Airtable.base(baseId)
  },

  team() {
    let base = this.base()
    let team = []

    base('BoardMembers')
      .select({
        view: 'Grid view',
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function(record) {
            var id = record.get('Id')
            var name = record.get('Name')
            var headshotList = record.get('Headshot')
            var jobTitle = record.get('JobTitle')
            var companyName = record.get('CompanyName')
            var linkedIn = record.get('LinkedIn')
            var website = record.get('Website')
            var twitter = record.get('Twitter')

            var headshotUrl = ''
            if (headshotList) {
              var headshot = headshotList[0]

              if (headshot) {
                headshotUrl = headshot.url
              }
            }

            team.unshift({
              id: id,
              name: name,
              image_path: headshotUrl,
              job_title: jobTitle,
              company: companyName,
              linkedin: linkedIn,
              website: website,
              twitter: twitter,
            })
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

    return team;
  }
}
