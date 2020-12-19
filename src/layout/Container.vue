<template>

  <div>
    <Navigation></Navigation>
    <b-container fluid class="px-5">
      <b-row>
        <b-col>
          <b-breadcrumb class="mt-4">
            <b-breadcrumb-item href="#home">
              <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
              Home
            </b-breadcrumb-item>
            <b-breadcrumb-item active href="#foo">Observatory Dashboard</b-breadcrumb-item>
          </b-breadcrumb>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="px-5">
      <b-row>
        <b-col>
          <b-jumbotron header="Observatory" lead="Interactive Front End for the Celestial Bodies Package">
            </b-jumbotron>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="px-5">
      <b-row>
        <RequestCard
            v-for="type in RequestTypes"
            :name="type.name"
            :subtitle="type.subtitle"
            :key="type.id"
            class="col-md-4 p-2"
            >
            </RequestCard>
      </b-row>
    </b-container>
    <Footer></Footer>
  </div>

</template>

<script>
export default {
  name: 'Container',
  data: function () {
    return {
      RequestTypes: [
        { id: 1, name: 'APOD', subtitle: 'Subtitle' },
        { id: 2, name: 'Asteroids', subtitle: 'Subtitle'  },
        { id: 3, name: 'DONKI', subtitle: 'Subtitle'  },
        { id: 4, name: 'Earth', subtitle: 'Subtitle'  },
        { id: 5, name: 'Mars Rover', subtitle: 'Subtitle'  },
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
