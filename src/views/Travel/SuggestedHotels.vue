<template>
  <tile bgcolor="bg-white" title="Suggested Hotels" titleColor="text-wri-dark-blue">
    <div class="flex flex-wrap justify-center">
      <SquareImageBlockLink
        image_path="images/hotels/hyattplace.png"
        target_url="https://www.hyatt.com/en-US/hotel/alabama/hyatt-place-huntsville-research-park/hsvzh"
        header="Hyatt Place"
      >
        <p>Speakers</p>
      </SquareImageBlockLink>
      <SquareImageBlockLink
        image_path="westin.jpeg"
        target_url="https://www.marriott.com/hotels/travel/hsvwi-the-westin-huntsville/?program=spg"
        header="The Westin at Bridge Street"
      >
        <p>6800 Governors West<br />Huntsville, AL 35806</p>
      </SquareImageBlockLink>
      <SquareImageBlockLink
        image_path="element.jpg"
        target_url="http://www.elementhuntsville.com/"
        header="The Element at Bridge Street"
      >
        <p>6800 Governors West<br />Huntsville, AL 35806</p>
      </SquareImageBlockLink>
      <SquareImageBlockLink
        image_path="images/hotels/holidayinn.jpg"
        target_url="https://www.ihg.com/holidayinn/hotels/us/en/huntsville/hsvrp/hoteldetail"
        header="Holiday Inn"
      >
        <p>5903 University Drive <br />Huntsville, AL 35806</p>
      </SquareImageBlockLink>
    </div>
  </tile>
</template>

<script>
import SquareImageBlockLink from '@/components/SquareImageBlockLink.vue'
import Tile from '@/components/Tile.vue'

export default {
  name: 'suggested-hotels',
  components: {
    SquareImageBlockLink,
    Tile,
  },
}
</script>
