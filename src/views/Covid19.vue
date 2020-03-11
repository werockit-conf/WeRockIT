<template>
  <div class="pt-64">
    <tile class="pb-16" bgcolor="bg-indigo-200" title="Conference Update for COVID-19" titleColor="text-wri-dark-blue">
      <div class="pt-8">
        As event organizers, we have come to the decision to reschedule WeRockIT Conf 2020 due to concerns about the
        spread of COVID-19 and its impact on domestic and international travel. Our new dates are tentatively in early
        November 2020. We are deeply sorry for any inconvenience this may cause.
      </div>
      <br />
      <div>
        All tickets purchased are still valid for the rescheduled event, the date of which we will announce in the
        coming weeks. If you purchased your ticket at the regular price, we will be issuing a partial refund so that you
        receive the early bird discount. Once we have announced the new dates, if for some reason you are unable to
        attend, we will work with you to refund your ticket.
      </div>
      <br />
      <div>
        Our venue and Diamond Sponsor, ADTRAN, made the decision late last week to elevate precautions concerning
        COVID-19. As a result, they are postponing all public events in the Mark C. Smith Conference Center until
        further notice, including WeRockIT Conf 2020.
      </div>
      <br />
      <div>
        We’re grateful for the continued support of ADTRAN and we agree with their assessment of the situation. We feel
        strongly that WeRockIT will be a better success if all speakers, volunteers, organizers, and attendees can fully
        participate. This includes everyone who must travel from or through affected areas around the United States.
      </div>
      <br />
      <div>
        Your support for the mission of WeRockIT Conf has continued to inspire us to create a community we can all be
        proud of. Thank you for making WeRockIT Conf a platform for inclusion and excellence in tech, and for everything
        that you do to make the WeRockIT community a welcoming resource for all.
      </div>
      <br />
      <div>
        If you have questions or if we can support you in any way during this time, please reach out to
        contact@werockitconf.com.
      </div>
    </tile>
  </div>
</template>

<script>
import Tile from '@/components/Tile.vue'

export default {
  name: 'covid19-update',
  components: {
    Tile,
  },
}
</script>
