<template>
  <div>
  <b-card
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="request"
    style="max-width: 30rem;"
    class="shadow-lg col-md-3 mb-2"
  >
    <h1>{{ name }}</h1>
    <b-card-text>
      
    </b-card-text>

    <b-button href="#" variant="dark">Trigger {{ name }} Request</b-button>
  </b-card>
</div>
</template>

<script>
export default {
  name: 'RequestCard',
  props: [ 'name' ]
}
</script>
