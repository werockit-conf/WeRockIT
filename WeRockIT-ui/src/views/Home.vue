<template>
  <div>
    <NavBar></NavBar>
    <div class="home">
      <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
      <header class="masthead masthead-background">
        <div class="container h-100 text-wri-teal">
          <div class="row h-100">
            <div class="col-md-12 my-auto mx-auto">
              <div class="text-center">
                <!--<img src="img/WeRockIT_black.png" alt="weRockIT Logo" class="img-responsive img-fluid"/>-->
                <!--<h1 class="display-1">WeRockIT Conf 2019</h1>-->
                <h1 class="uppercase">WeRockIT 2020</h1>
                <h2 class="uppercase">
                  DevOps | Development | Data Science | IOT
                </h2>
                <hr />
                <h3 class="uppercase">May 3-4 2019</h3>
                <h3 class="uppercase">Huntsville, AL</h3>
                <br />
                <a href="#mailingList" class="">Stay in the Loop</a>
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
