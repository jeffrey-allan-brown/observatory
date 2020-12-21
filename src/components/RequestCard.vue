<template>
  <div>
  <b-card
    img-alt="Image"
    img-top
    tag="request"
    :title="name"
    :subTitle="subtitle"
    style=""
    class="shadow-sm col px-1"
  >
    <b-button href="#" variant="dark" size="lg" class="mt-3">Use this API</b-button>
  </b-card>
</div>
</template>

<script>
export default {
  name: 'RequestCard',
  props: [ 'name', 'subtitle' ]
}
</script>
