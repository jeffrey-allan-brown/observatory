<template>

  <div>
    <Navigation></Navigation>
    <b-container fluid class="px-0">
      <b-row>
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">

              <li class="nav-item py-1">
                <a class="nav-link active font-weight-bold" href="#">
                  <span data-feather="home"></span>
                  Dashboard <span class="sr-only">(current)</span>
                </a>
              </li>

              <li class="nav-item py-1">
                <a class="nav-link font-weight-bold" href="#">
                  <span data-feather="box"></span>
                  Astronomy Picture of the Day
                </a>
              </li>

              <li class="nav-item py-1">
                <a class="nav-link font-weight-bold" href="#">
                  <span data-feather="radio"></span>
                  Asteroids - NEOS
                </a>
              </li>

              <li class="nav-item py-1">
                <a class="nav-link font-weight-bold" href="#">
                  <span data-feather="sunrise"></span>
                  DONKI
                </a>
              </li>

              <li class="nav-item py-1">
                <a class="nav-link font-weight-bold" href="#">
                  <span data-feather="globe"></span>
                  Earth Observation Data
                </a>
              </li>
              
              <li class="nav-item py-1">
                <a class="nav-link font-weight-bold" href="#">
                  <span data-feather="codesandbox"></span>
                  Mars Rover Photos
                </a>
              </li>

            </ul>
          </div>
        </nav>
        <b-col>
          <router-view/>
        </b-col>
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
        { id: 1, name: 'Astronomy Picture of the Day', subtitle: 'As the name implies, this API will return the Astronomy Picture of the Day for a given day.', thumbnail: 'https://picsum.photos/600/300/?image=14' },
        { id: 2, name: 'Asteroids - Near Earth Objects ', subtitle: 'This API returns detailed information on objects orbiting Earth on a given day.', thumbnail: 'https://picsum.photos/600/300/?image=15'  },
        { id: 3, name: 'Database Of Notifications, Knowledge, Information', subtitle: 'The Space Weather Database Of Notifications, Knowledge, Information (DONKI) is a comprehensive on-line tool for space weather forecasters, scientists, and the general space science community.', thumbnail: 'https://picsum.photos/600/300/?image=17'  },
        { id: 4, name: 'Earth', subtitle: 'Landsat imagery is provided to the public as a joint project between NASA and USGS. ', thumbnail: 'https://picsum.photos/600/300/?image=16'  },
        { id: 5, name: 'Mars Rover Photos', subtitle: 'This API is designed to collect image data gathered by NASA\'s Curiosity, Opportunity, and Spirit rovers on Mars and make it more easily available to other developers, educators, and citizen scientists. ', thumbnail: 'https://picsum.photos/600/300/?image=18'  },
      ]
    }
  },
  components: {
    'Navigation': () => import('./Navigation'),
    'Footer': () => import('./Footer'),
    // 'RequestCard': () => import('../components/RequestCard'),
  }
}
</script>
