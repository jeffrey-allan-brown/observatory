<template>
      <b-card-group deck>
        <b-card header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0"> {{ name }}</h6>
          </template>
          <b-card-text>Header and footers using slots.</b-card-text>
          <b-button href="#" variant="primary">Go somewhere</b-button>
          <template #footer>
            <em></em>
          </template>
        </b-card>
      </b-card-group>
</template>

<script>
export default {
  name: 'RequestCard',
  props: [ 'name' ]
}
</script>
