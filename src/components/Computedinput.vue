<template>
  <div>
  <input class="computedinput" type="number" disabled v-model="computedValue">
  </div>
</template>

<script>

  export default {
    name: 'computedinput',
    data() {
      return {
        value: '',
        formula: 'return Fld.AliasFld1 - Fld.AliasFld2',
      }
    },

    methods: {
      computeValue() {
        let Fld = new Object({AliasFld1: this.$store.state.firstInputValue, AliasFld2: this.$store.state.secondInputValue});
        let expression = this.formula;
        var result = new Function('Fld', expression);
        return result(Fld);
      }
    },
    watch: {
      value: function (newValue, oldValue) {
        this.$store.commit('updateComputedInput', this.value);
      }
    },

    computed: {

      computedValue: {
        get () {
          if(this.$store.state.firstInputValue !== '' && this.$store.state.secondInputValue !== '') {
            this.value = parseFloat(this.computeValue().toFixed(2));
            return this.value
          }
        },
      }
    }
  }

</script>

<style>
  @import '../scss/computedinput.scss'
</style>