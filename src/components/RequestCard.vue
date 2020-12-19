<template>
  <div>
  <b-card
    img-alt="Image"
    img-top
    tag="request"
    :title="name"
    :subtitle="subtitle"
    style=""
    class="shadow-sm col px-5"
  >

  <b-card-text>
      Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
      content.
    </b-card-text>

    <b-card-text>A second paragraph of text in the card.</b-card-text>

    <b-button href="#" variant="danger">Trigger {{ name }} Request</b-button>
  </b-card>
</div>
</template>

<script>
export default {
  name: 'RequestCard',
  props: [ 'name', 'subtitle' ]
}
</script>
