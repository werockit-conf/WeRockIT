<template>
  <div class="text-wri-blue">
    <NotFoundHeader></NotFoundHeader>
    <NotFoundMessage></NotFoundMessage>
    <Sponsors></Sponsors>
  </div>
</template>

<script>
import NotFoundHeader from './NotFound/NotFoundHeader.vue'
import NotFoundMessage from './NotFound/NotFoundMessage.vue'
export default {
  name: 'notfound',
  components: {
    NotFoundHeader,
    NotFoundMessage,
  },
}
</script>
