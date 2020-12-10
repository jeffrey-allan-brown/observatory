<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <Navigation></Navigation>
        </div>
        <div class="col-xl-1 col-lg-2 col-md-3">
        </div>
            <RequestCard
              v-for="type in RequestTypes"
              v-bind:name="type.name"
              :key="type.id"
              class="col-md-3 mt-3"
            >
            </RequestCard>
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
