<template>
  <div>
    <div class="home pt-64 bg-wri-image pb-24">
      <div class="mx-auto text-wri-teal text-6xl">
        <div class="text-center">
          <h1 class="uppercase">WeRockIT 2020</h1>
          <h2 class="uppercase text-4xl">DevOps | Development | Data Science | IOT</h2>
          <h3 class="uppercase">May 3-4 2019</h3>
          <h3 class="uppercase">Huntsville, AL</h3>
        </div>
      </div>
    </div>
    <div class="container mx-auto bg-wri-blue p-20 text-center">
      <div class="text-3xl pb-12 text-white">
        Lorem ipsum dolor sit amet, consectetur adipisc- ing elit. Proin mattis dui convallis molestie plac- erat.
        Pellentesque tellus ante, volutpat sed plac- erat gravida, ullamcorper eu turpis. Aliquam erat volutpat.
      </div>
      <!-- <div class="inline mx-auto p-2 bg-wri-teal rounded-full">Learn more</div> -->
    </div>
    <div class="mx-auto bg-white p-20 text-center">
      <div class="text-6xl text-wri-teal">Tracks</div>
      <div class="flex flex-wrap justify-center text-wri-teal text-4xl uppercase">
        <div class="flex-shrink-0 bg-wri-dark-blue h-48 w-1/3 m-6 flex justify-center items-center">
          <div>
            <div>DEVOPS</div>
            <div>Cloud, Agile, CI/CD</div>
          </div>
        </div>
        <div class="flex-shrink-0 bg-wri-dark-blue h-48 w-1/3 m-6 flex justify-center items-center">
          <div>
            <div>IOT</div>
            <div>Embedded, Wearables</div>
          </div>
        </div>
        <div class="flex-shrink-0 bg-wri-dark-blue h-48 w-1/3 m-6 flex justify-center items-center">
          <div>
            <div>Development</div>
            <div>Web, Backend, UX</div>
          </div>
        </div>
        <div class="flex-shrink-0 bg-wri-dark-blue h-48 w-1/3 m-6 flex justify-center items-center">Data Science</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-wri-image {
  background-image: url('../assets/werockit-web-background.jpg');
  @apply bg-cover bg-scroll;
}
</style>
