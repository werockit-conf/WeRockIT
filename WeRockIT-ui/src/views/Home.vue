<template>
  <div>
    <NavBar />
    <div class="home">
      <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
      <header class="masthead masthead-background">
        <div class="container h-100">
          <div class="row h-100">
            <div class="col-md-12 my-auto mx-auto">
              <div class="text-center">
                <!--<img src="img/WeRockIT_black.png" alt="weRockIT Logo" class="img-responsive img-fluid"/>-->
                <!--<h1 class="display-1">WeRockIT Conf 2019</h1>-->
                <h1 class="display-1">WeRockIT Conf 2020</h1>
                <h2>Developers Conference</h2>
                <hr />
                <h5>
                  Cloud Computing | Big Data | Web Development | Cybersecurity |
                  Embedded Systems
                </h5>
                <hr />
                <h3>May 3-4, 2019</h3>
                <h3>Huntsville, AL</h3>
                <br />
                <a
                  href="#mailingList"
                  class="btn btn-outline btn-xl js-scroll-trigger"
                  >Stay in the Loop</a
                >
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "home",
  components: { NavBar }
};
</script>
