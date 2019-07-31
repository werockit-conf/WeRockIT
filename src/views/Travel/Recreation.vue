<template>
  <Tile bgcolor="bg-white" title="Recreation" titleColor="text-wri-dark-blue">
    <div class="p-6 md:flex md:justify-center">
      <div class="md:flex-shrink-0 md:w-1/2 md:max-w-xl">
        <img src="@/assets/nightlife.jpg" />
      </div>
      <div class="md:w-1/2 md:ml-6 md:max-w-xl">
        <ul>
          <li>
            <a target="_blank" href="https://campus805.com/">Campus No. 805</a>
            <p>
              Campus No. 805 is Huntsville's premier local craft brewery center, entertainment, and event venue. It is
              home to the Lone Goose Saloon, Civil Axe Throwing, Spirited Art, Straight to Ale Brewing, Stone Wood Fire
              Pizza, and more!
            </p>
          </li>
          <li>
            <a target="_blank" href="http://hsvbg.org/">Huntsville Botanical Garden</a>
            <p>
              The Huntsville Botanical Garden is a beautiful 120-acre site with stunning floral collections, inviting
              woodland paths, broad grassy meadows, aquatic areas, demonstration vegetable and herb gardens and a Nature
              Center.
            </p>
          </li>
          <li>
            <a target="_blank" href="http://www.lowemill.net/">Lowe Mill</a>
            <p>
              Lowe Mill ARTS & Entertainment is the largest privately owned arts facility in the United States. With a
              focus on visual arts, this huge historic factory building has been redeveloped into 148 working studios
              for over 200 artists and makers, 6 galleries, a theatre, and performance venues.
            </p>
          </li>
          <li>
            <a target="_blank" href="https://rocketcenter.com/">Space and Rocket Center</a>
            <p>
              The world's largest space attraction features dozens of interactive exhibits surrounding Apollo, Mercury
              and Space Shuttle spacecraft. Rockets developed in Huntsville range from the Army boosters that put
              America's first satellite and astronauts in orbit to NASA's Saturn V moon rocket and the Space Shuttle.
            </p>
          </li>

          <li>
            <a target="_blank" href="https://www.starsandstrikes.com/locations/huntsville/">Stars and Strikes</a>
            <p>
              Stars and Strikes offers 24 bowling lanes, a 7,000 square foot arcade and prize store, a two-story laser
              tag arena, bumper cars, and Escapology escape rooms.
            </p>
          </li>
          <li>
            <a target="_blank" href="http://www.flyhuntsville.com/hsv/sunset-landing-golf-course/#.XT76xOhKhEZ"
              >Sunset Landing Golf Course</a
            >
            <p>
              Sunset Landing Golf Course offers 6,803 yards of native grass fairways and bentgrass greens. A par 72
              course with a slope of 71.9 and rating of 118 from the black and 66.9 and 108 respectively from the
              whites, Sunset Landing is ideal for seasoned golfers and beginners alike.
            </p>
          </li>
          <li>
            <a target="_blank" href="https://topgolf.com/us/huntsville/">Topgolf </a>
            <p>
              Topgolf features fun and competitive golf games, climate-controlled hitting bays for year-round comfort, a
              chef-inspired food and drink menu, private spaces for groups of any size, HDTVs to watch the big game and
              amazing music.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </Tile>
</template>

<script>
import Tile from '@/components/Tile.vue'

export default {
  components: { Tile },
}
</script>
