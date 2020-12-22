<template>
  <div>
  <b-card
    :img-alt="name"
    :img-src="thumbnail"
    img-top
    tag="request"
    :title="name"
    :subTitle="subtitle"
    style=""
    class="shadow-sm border col py-3"
  >
    <b-button href="#" variant="dark" size="lg" class="mt-3 stretched-link">Use this API</b-button>
  </b-card>
</div>
</template>

<script>
export default {
  name: 'RequestCard',
  props: [ 'name', 'subtitle', 'thumbnail' ]
}
</script>
