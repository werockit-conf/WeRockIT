import { globalStore } from '@/components/store.js'
const axios = require('axios')

export default {
  buildImagePath(name) {
    return 'images/speakers/' + name + '.jpg'
  },
  getImageUrl(imageList) {
    if (imageList) {
      var image = imageList[0]

      if (image) {
        return image.url
      }
    }
    return ''
  },
  team() {
    let team = []

    axios.get('https://werockdata.werockitconf.workers.dev/boardmembers').then(response => {
      team = response.data.records.map(record => {
        var id = record.id
        var name = record.fields.Name
        var headshotList = record.fields.Headshot
        var jobTitle = record.fields.JobTitle
        var companyName = record.fields.CompanyName
        var linkedIn = record.fields.LinkedIn
        var website = record.fields.Website
        var twitter = record.fields.Twitter

        var headshotUrl = this.getImageUrl(headshotList)

        return {
          id: id,
          name: name,
          image_path: headshotUrl,
          job_title: jobTitle,
          company: companyName,
          linkedin: linkedIn,
          website: website,
          twitter: twitter,
        }
      })
      globalStore.state.team = team
    })
  },
  sponsors() {
    let sponsors = []

    axios.get('https://werockdata.werockitconf.workers.dev/sponsors').then(response => {
      sponsors = response.data.records.map(record => {
        var id = record.id
        var name = record.fields.Name
        var level = record.fields.SponsorshipLevel
        var url = record.fields.Url
        var logoList = record.fields.LogoImage

        var logoUrl = this.getImageUrl(logoList)

        return {
          id: id,
          name: name,
          image_path: logoUrl,
          level: level,
          website: url,
        }
      })

      let consolidate = {}
      sponsors.forEach(sponsor => {
        var level = sponsor.level
        if (!consolidate[level]) {
          consolidate[level] = []
        }
        consolidate[level].unshift(sponsor)
      })

      globalStore.state.sponsors = consolidate
    })
  },
  speakers(justKeynotes = false) {
    let endpoint = 'Speakers'
    let speakers = []

    if (justKeynotes) {
      endpoint = 'Keynotes'
    }

    let url = 'https://werockdata.werockitconf.workers.dev/' + endpoint

    axios.get(url).then(response => {
      speakers = response.data.records.map(record => {
        var id = record.id
        var name = record.fields.Name
        var talkTitle = record.fields.TalkTitle
        var jobTitle = record.fields.JobTitle
        var secondaryTitle = record.fields.SecondaryTitle
        var companyName = record.fields.CompanyName
        var linkedIn = record.fields.LinkedIn
        var website = record.fields.Website
        var twitter = record.fields.Twitter
        var isKeynote = record.fieldsIsKeynote
        var talkTag = record.fields.Tags
        var biography = record.fields.Bio

        var anchorName = name.replace(/\s/g, '').replace(/\./g, '')

        return {
          id: id,
          name: name,
          image_path: this.buildImagePath(anchorName),
          job_title: jobTitle,
          secondary_title: secondaryTitle,
          company: companyName,
          linkedin: linkedIn,
          website: website,
          twitter: twitter,
          isKeynote: isKeynote,
          talkTag: talkTag,
          talkTitle: talkTitle,
          biography: biography,
          anchorName: anchorName,
        }
      })

      if (justKeynotes) {
        globalStore.state.keynotes = speakers
      } else {
        globalStore.state.speakers = speakers
      }
    })
  },
}
