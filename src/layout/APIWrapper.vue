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
          <b-jumbotron header="Observatory" lead="Interactive Front End for the Celestial Bodies Package" class="py-2">
          </b-jumbotron>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="px-5">
      <b-row>

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
        { id: 1, name: 'Astronomy Picture of the Day', subtitle: 'As the name implies, this API will return the Astronomy Picture of the Day for a given day.', thumbnail: 'https://picsum.photos/600/300/?image=25' },
        { id: 2, name: 'Asteroids - Near Earth Objects ', subtitle: 'This API returns detailed information on objects orbiting Earth on a given day.', thumbnail: 'https://picsum.photos/600/300/?image=35'  },
        { id: 3, name: 'Database Of Notifications, Knowledge, Information', subtitle: 'The Space Weather Database Of Notifications, Knowledge, Information (DONKI) is a comprehensive on-line tool for space weather forecasters, scientists, and the general space science community.', thumbnail: 'https://picsum.photos/600/300/?image=28'  },
        { id: 4, name: 'Earth', subtitle: 'Landsat imagery is provided to the public as a joint project between NASA and USGS. ', thumbnail: 'https://picsum.photos/600/300/?image=1'  },
        { id: 5, name: 'Mars Rover Photos', subtitle: 'This API is designed to collect image data gathered by NASA\'s Curiosity, Opportunity, and Spirit rovers on Mars and make it more easily available to other developers, educators, and citizen scientists. ', thumbnail: 'https://picsum.photos/600/300/?image=20'  },
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
