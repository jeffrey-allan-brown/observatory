<template>
  <Navigation></Navigation>
</template>

<script>
export default {
  name: 'Container',
  components: {
    'Navigation': () => import('../components/Navigation')
  }
  
}
</script>
