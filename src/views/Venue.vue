<template>
  <div class="container mx-auto">
    <div class="text-center">
      <h1>Venue</h1>
      <h3>Join us at the heard of the Tenessee Valley</h3>
    </div>
    <div class="md:flex">
      <div class="mt-4 md:mt-0 md:ml-6">
        <h1>ADTRAN Mark C. Smith Conference Center</h1>
        <p>ADTRAN East Tower, 965 Explorer Blvd NW, Huntsville, AL 35806</p>
        <p>
          Located in the heart ofCummings Research Park, and I-565 exit 14, the ADTRAN Mark C. Smith Conference Center
          resides in ADTRAN's East Tower.
        </p>
      </div>
      <div class="md:flex-shrink-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.2094366587976!2d-86.68024833318321!3d34.72511487762157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88626eb4e37cfe87%3A0x9e7bf278c380cf9d!2sAdtran+East+Tower!5e0!3m2!1sen!2sus!4v1550022773662"
          width="600"
          height="450"
          frameborder="0"
          style="border:0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div>
      <h1>Suggested Hotels</h1>
      <ul>
        <li>
          <a href="https://www.marriott.com/hotels/travel/hsvwi-the-westin-huntsville/?program=spg" target="Westin">
            The Westin at Bridge Street
          </a>
          <br />
          6800 Governors West<br />
          Huntsville, AL 35806<br />
        </li>
        <li>
          <a href="http://www.elementhuntsville.com/" target="Element">The Element at Bridge Street</a><br />
          6810 Governors West<br />
          Huntsville, AL 35806<br />
        </li>
        <li>
          <a href="https://www.ihg.com/holidayinn/hotels/us/en/huntsville/hsvrp/hoteldetail" target="Holiday Inn">
            Holiday Inn
          </a>
          <br />
          5903 University Drive <br />
          Huntsville, AL 35806 <br />
        </li>
      </ul>
    </div>
    <div>
      <h2>Venue Parking</h2>
      <p>
        Parking for the conference is free. It is recommended to park on the south side of the ADTRAN East Tower to have
        direct access to the Mark C. Smith Conference Center entrance.
      </p>
      <h2>Handicap Accessability</h2>
      <p>
        A handicap accessilbe entrance is available. Volutneers will be staffed at the entrance in order to help escort
        handicap attendees.
      </p>
      <img src="../assets/mark-c-smith-conference-poi.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'venue',
}
</script>

<style scoped>
h1 {
  @apply .text-3xl;
}
h2 {
  @apply .text-2xl;
}
</style>
