<template>
  <div>
    <b-breadcrumb class="mt-4">
      <b-breadcrumb-item href="#home">
        <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
        Home
      </b-breadcrumb-item>
      <b-breadcrumb-item active href="#foo">Observatory Dashboard</b-breadcrumb-item>
    </b-breadcrumb>
    <b-jumbotron header="Observatory" lead="Interactive Front End for the Celestial Bodies Package" class="py-2">
    </b-jumbotron>
    <b-card-group>

      <div class="col-md-4 mb-5">
        <b-card no-body class="overflow-hidden">
          <b-row>
            <b-col md="4">
              <b-card-img src="https://picsum.photos/400/400/?image=18" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="8">
              <b-card-body class="py-1 px-1" title="Astronomy Picture of the Day">
                <b-card-text>
                  As the name implies, this API will return the Astronomy Picture of the Day for a given day.
                </b-card-text>
                <b-button href="#" variant="dark">Use This API</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>


      <div class="col-md-4 mb-5">
        <b-card no-body class="overflow-hidden">
          <b-row>
            <b-col md="4">
              <b-card-img src="https://picsum.photos/400/400/?image=17" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="8">
              <b-card-body class="py-1 px-1" title="Asteroids - Near Earth Objects">
                <b-card-text>
                  This API returns detailed information on objects orbiting Earth on a given day.
                </b-card-text>
                <b-button href="#" variant="dark">Use This API</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>

      <div class="col-md-4 mb-5">
        <b-card no-body class="overflow-hidden">
          <b-row>
            <b-col md="4">
              <b-card-img src="https://picsum.photos/400/400/?image=15" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="8">
              <b-card-body class="py-1 px-1" title="Database Of Notifications, Knowledge, Information">
                <b-card-text>
                  The Database Of Notifications, Knowledge, Information (DONKI) is a tool for space weather forecasters, scientists.
                </b-card-text>
                <b-button href="#" variant="dark">Use This API</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>

      <div class="col-md-4 mb-5">
        <b-card no-body class="overflow-hidden">
          <b-row>
            <b-col md="4">
              <b-card-img src="https://picsum.photos/400/400/?image=14" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="8">
              <b-card-body class="py-1 px-1" title="Earth">
                <b-card-text>
                  Landsat imagery is provided to the public as a joint project between NASA and USGS. 
                </b-card-text>
                <b-button href="#" variant="dark">Use This API</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>

      <div class="col-md-4 mb-5">
        <b-card no-body class="overflow-hidden">
          <b-row>
            <b-col md="4">
              <b-card-img src="https://picsum.photos/400/400/?image=13" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="8">
              <b-card-body class="py-1 px-1" title="Mars Rover Photos">
                <b-card-text>
                  This API is designed to collect image data gathered by NASA\'s Curiosity, Opportunity, and Spirit rovers on Mars and make it more easily available to other developers, educators, and citizen scientists. 
                </b-card-text>
                <b-button href="#" variant="dark">Use This API</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </b-card-group>

  </div>
</template>

<script>
export default {
  name: 'MainDashboard',
  props: [ '' ]
}
</script>
