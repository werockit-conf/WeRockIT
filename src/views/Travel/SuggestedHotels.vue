<template>
  <div class="bg-white p-30">
    <div class="text-6xl text-wri-dark-blue font-thin text-center">Suggested Hotels</div>
    <div class="flex flex-wrap text-5xl text-white justify-center">
      <div class="bg-wri-dark-blue suggested_hotel_box bg-westin-image">
        <div class="font-roboto-slab text-lg font-semibold">
          <a href="https://www.marriott.com/hotels/travel/hsvwi-the-westin-huntsville/?program=spg" target="Westin">
            The Westin at Bridge Street
          </a>
        </div>
        <p class="font-montserrat text-base p-3">
          6800 Governors West<br />
          Huntsville, AL 35806<br />
        </p>
      </div>
      <div class="bg-wri-dark-blue suggested_hotel_box bg-element-image">
        <div class="font-roboto-slab text-lg font-semibold">
          <a href="http://www.elementhuntsville.com/" target="Element">The Element at Bridge Street</a>
        </div>
        <p class="font-montserrat text-base p-3">
          6810 Governors West<br />
          Huntsville, AL 35806<br />
        </p>
      </div>
      <div class="bg-wri-dark-blue suggested_hotel_box bg-holiday-inn-image">
        <div class="font-roboto-slab text-lg font-semibold">
          <a href="https://www.ihg.com/holidayinn/hotels/us/en/huntsville/hsvrp/hoteldetail" target="Holiday Inn">
            Holiday Inn
          </a>
        </div>
        <p class="font-montserrat text-base p-3">
          5903 University Drive <br />
          Huntsville, AL 35806 <br />
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.bg-element-image {
  background-image: url('https://cache.marriott.com/marriottassets/marriott/HSVEL/hsvel-exterior-5276-hor-feat.jpg');
  @apply bg-cover;
  @apply bg-center;
}

.bg-westin-image {
  background-image: url('https://tdr.aaa.com/tdr-images/images/property_photo/accommodation/166103H1.jpg');
  @apply bg-cover;
  @apply bg-scroll;
}

.bg-holiday-inn-image {
  background-image: url('http://d1060ja7433lis.cloudfront.net/SzhRc6L1MM/jqg_1364937754.jpg');
  @apply bg-cover;
  @apply bg-scroll;
}

.suggested_hotel_box {
  @apply inline-block;
  @apply h-64;
  @apply w-64;
  @apply m-6;
  @apply p-5;
  @apply text-center;
  @apply justify-center;
  @apply bg-black;
  filter: brightness(0.5);
}
</style>
