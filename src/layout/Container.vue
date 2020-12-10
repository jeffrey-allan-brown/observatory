<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <Navigation></Navigation>
        </div>
        <div class="col-xl-1 col-lg-2 col-md-3">
        </div>
        <div class="col-xl-11 col-lg-10 col-md-9">
          <div class="col-md-3 mt-5">
            <RequestCard
              v-for="type in RequestTypes"
              v-bind:name="type.name"
              :key="type.id"
              class="mb-3"
            >
            </RequestCard>
          </div>
        </div>
      </div>
  </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'Container',
  data: function () {
    return {
      RequestTypes: [
        { id: 1, name: 'APOD' },
        { id: 2, name: 'Asteroids' }
      ]
    }
  },
  components: {
    'Navigation': () => import('./Navigation'),
    'Footer': () => import('./Footer'),
    'RequestCard': () => import('../components/RequestCard'),
  }
}
</script>
