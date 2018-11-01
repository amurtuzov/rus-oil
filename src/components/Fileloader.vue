<template>
  <div>
    <input :disabled="saved" id="loader" type="file" class="fileloader" @input="change"/>
    <label for="loader" class="choicer">Выберите файл</label>
  </div>
</template>

<script>

export default {
  name: 'fileloader',
  data () {
    return {
      input: '',
    }
  },

  methods: {
    change: function (e) {
      if (e.target.value != '') {
        e.target.nextElementSibling.textContent = ('Выбран файл: ' + e.target.files[0].name);
        this.$store.commit('saveFile', e.target.files[0])
      }
      else {
        e.target.nextElementSibling.textContent = 'Выберите файл';
      }
    }
  },
  computed: {
    saved () {
      return this.$store.getters.saved;
    }
  }

}
</script>

<style lang="scss">
  @import '../scss/fileloader.scss'
</style>