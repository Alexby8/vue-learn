<template>
  <div class="home">
    <input type="text" v-model="projectTitle" class="form-control">

    <br>

    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    projectTitle: {
      get(){
        return this.$store.state.projectTitle
      },
      set(value){
        this.$store.commit('changeTitle', value)
      }
    }
  }
}
</script>
