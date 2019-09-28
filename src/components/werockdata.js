export default {
  organizers() {
    var Airtable = require('airtable')
    var apikey = 'keyFo6GIKX272jJFa'

    Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: apikey,
    })

    return Airtable.base('appWUvbc2x2lZWkej')
  },
}
