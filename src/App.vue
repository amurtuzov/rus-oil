<template>
  <div id="app">
    <Datatable/>
  </div>

</template>


<script>
import Datatable from './components/Datatable.vue'


export default {
  name: 'app',
  data () {
    return {
    }
  },
    components: {
    Datatable,
  },
}
</script>

<style lang="scss">
  @import './scss/app.scss'
</style>
