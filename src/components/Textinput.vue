<template>
  <div class="textInput_wrapper">
    <span class="textInput_shower" v-show="!editing" @click="edit">{{inputValue == '' ? 'Введите значение' : inputValue}}</span>
    <input class="textInput" :disabled="saved" v-show="editing" @blur="save" v-model="input" type="text">
  </div>
</template>

<script>
  export default {
    name: 'textinput',
    data() {
      return {
        editing: false,
      }
    },
    props: {
      inputValue: String,
      updateValue: Function,
    },
    methods: {
      edit: function() {
        this.editing = !this.editing;
      },
      save: function() {
        this.editing = !this.editing;
      }
    },
    computed: {

      input: {
        get () {
          return this.inputValue;
        },
        set (value) {
          this.updateValue(value);
        }
      },

      saved () {
        return this.$store.getters.saved;
      }

    }
  }
</script>

<style>
  @import '../scss/textinput.scss'
</style>