<template>
  <tile bgcolor="bg-white" title="Suggested Hotels" titleColor="text-wri-dark-blue">
    <div class="flex flex-wrap justify-center">
      <SquareImageBlock
        :image="'https://tdr.aaa.com/tdr-images/images/property_photo/accommodation/166103H1.jpg'"
        :target_url="'https://www.marriott.com/hotels/travel/hsvwi-the-westin-huntsville/?program=spg'"
        :header="'The Westin at Bridge Street'"
        :subtitle="'6800 Governors West<br />Huntsville, AL 35806<br />'"
      >
      </SquareImageBlock>
      <SquareImageBlock
        :image="'https://cache.marriott.com/marriottassets/marriott/HSVEL/hsvel-exterior-5276-hor-feat.jpg'"
        :target_url="'http://www.elementhuntsville.com/'"
        :header="'The Element at Bridge Street'"
        :subtitle="'6810 Governors West<br />Huntsville, AL 35806<br />'"
      >
      </SquareImageBlock>
      <SquareImageBlock
        :image="'http://d1060ja7433lis.cloudfront.net/SzhRc6L1MM/jqg_1364937754.jpg'"
        :target_url="'https://www.ihg.com/holidayinn/hotels/us/en/huntsville/hsvrp/hoteldetail'"
        :header="'Holiday Inn'"
        :subtitle="'5903 University Drive <br />Huntsville, AL 35806 <br />'"
      >
      </SquareImageBlock>
    </div>
  </tile>
</template>

<script>
import SquareImageBlock from '@/components/SquareImageBlock.vue'
import Tile from '@/components/Tile.vue'

export default {
  name: 'suggested-hotels',
  components: {
    SquareImageBlock,
    Tile,
  },
}
</script>
