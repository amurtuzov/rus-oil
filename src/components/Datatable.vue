<template>
  <div class="datatable_wrapper">
    <table cellpadding="0" class="datatable">
      <tr>
        <td><datepicker :disabled="saved" input-class="datepicker" v-model="date" :format="'dd MM yyyy'" :language="ru" placeholder="Выберите дату"></datepicker></td>
        <td><textinput v-bind:inputValue="firstInput" v-bind:updateValue="updateFirstInput"></textinput></td>
        <td><textinput v-bind:inputValue="secondInput" v-bind:updateValue="updateSecondInput"></textinput></td>
        <td><computedinput></computedinput></td>
        <td><fileloader></fileloader></td>
      </tr>
    </table>
    <p v-show="saved" class="success_save">Успешно!</p>
    <button class="save_button" @click="save">Сохранить</button>
  </div>
</template>

<style>
  @import '../scss/datatable.scss'
</style>

<script>
import Datepicker from 'vuejs-datepicker';
import {ru} from 'vuejs-datepicker/dist/locale'
import Textinput from './Textinput.vue';
import Computedinput from './Computedinput.vue';
import Fileloader from './Fileloader.vue';

export default {
  name: 'datatable',
  data () {
    return {
      ru: ru,
    }
  },
  components: {
    Datepicker,
    Textinput,
    Computedinput,
    Fileloader,
  },

  methods: {
    updateFirstInput (value) {
        this.$store.commit('updateFirstInput', value)
    },
    updateSecondInput (value) {
      this.$store.commit('updateSecondInput', value)
    },
    save() {
      this.$store.dispatch('makeJson');
    }

  },

  computed: {

    date: {
      get () {
        return this.$store.state.date;
      },
      set (value) {
        this.$store.commit('updateDate', value)
      }
    },

    firstInput () {
      return this.$store.getters.firstInput;
    },

    secondInput () {
      return this.$store.getters.secondInput;
    },

    saved () {
      return this.$store.getters.saved;
    }

  }
}
</script>
