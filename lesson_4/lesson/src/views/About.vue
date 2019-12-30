<template>
  <div>
    <AboutPage />
  </div>
</template>

<script>
export default {
  name: 'About',
  components: {
    AboutPage: () => import('@/components/AboutPage.vue')
  },
  metaInfo: {
    title: 'About',
    titleTemplate: null
  }
}
</script>
