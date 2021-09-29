<template>
<div class="h-screen w-full flex overflow-hidden antialiased text-gray-800 bg-white">
  <nav aria-label="side bar" aria-orientation="vertical" class="flex-none flex flex-col items-center text-center bg-primary text-gray-400 border-r">
    <div class="h-16 flex items-center w-full">
      <img class="h-6 w-6 mx-auto" src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/leaves.png" />
    </div>
    <ul>
      <li>
        <a title="Home" href="#home" class="h-16 px-6 flex items-center text-white bg-gray-700 w-full">
          <i class="mx-auto">
            <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z" />
            </svg>
          </i>
        </a>
      </li>
    </ul>
  </nav>

  <div class="flex-1 flex flex-col">
    <nav aria-label="top bar" class="flex-none flex justify-between bg-white h-16">

    </nav>

    <header aria-label="page caption" class="flex-none flex h-16 bg-gray-100 border-t px-4 items-center">
      <h1 id="page-caption" class="font-semibold text-lg">Home</h1>
    </header>

    <!-- main content -->
    <main class="flex-grow flex min-h-0 border-t">
      <section class="flex flex-col p-4 w-full max-w-sm flex-none bg-gray-100 min-h-0 overflow-auto">
        <div class="py-12 px-12 bg-white rounded-2xl shadow-xl">
          <div>
            <h1 class="text-3xl font-bold text-center mb-4">APOD Config</h1>
          </div>
          <div class="space-y-4">
            <div class="relative pt-4">
              <label for="name" class="text-base leading-7 text-blueGray-500">Date</label>
              <input type="date" id="date" name="date" v-model="mydate" class="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
            </div>
          </div>
            <div class="text-center mt-6">
            </div>
          </div>
      </section>

      <!-- section content -->
      <section aria-label="main content" class="flex min-h-0 flex-col flex-auto border-l">



      </section>
    </main>
  </div>
</div>
</template>
<script>
import { apod } from 'celestial-bodies';

export default {
  name: 'InfoSidebar',
  data: () => ({
		mydate: '2017-07-04',
    payload: {
      asteroid_id: 3471590,
      key: 'DEMO_KEY',
      type: 'browse'
    },
    result: null
  }),
  components: { 
		
  },
  methods: {

  },
  computed: {

  },
	props: [
		
	],
  beforeMount() {
    apod()

  }
}
</script>