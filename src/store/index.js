import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		date: '',
		firstInputValue: '',
		secondInputValue: '',
		computedInput: '',
		uploadedFile: '',
		saved: false,
		json: '',

	},

  mutations: {
    updateDate(state, inputValue) {
      state.date = inputValue
    },
    updateFirstInput(state, inputValue) {
      state.firstInputValue = inputValue;
    },
    updateSecondInput(state, inputValue) {
      state.secondInputValue = inputValue;
    },
    updateComputedInput(state, value) {
      state.computedInput = value;
    },
    saveFile(state, value) {
      state.uploadedFile = value;
    },
    saved(state, value) {
      state.saved = value;
    },
    saveJson(state, value) {
      state.json = value;
    }

  },


  actions: {

    makeJson(context) {
      if(context.state.date !== '' && context.state.firstInputValue !== '' && context.state.secondInputValue !== '' && context.state.computedInput !== '' && context.state.uploadedFile !== '') {
        let data = {};
        data.date = context.state.date;
        data.firstField = context.state.firstInputValue;
        data.secondField = context.state.secondInputValue;
        data.thirdField = context.state.computedInput;

        function blobToBase64(blob, callback) {
          let reader = new FileReader();
          reader.onload = function() {
            let dataUrl = reader.result;
            let base64 = dataUrl.split(',')[1];
            callback(base64);
          };
          reader.readAsDataURL(blob);
        };

        blobToBase64(context.state.uploadedFile, function(base64) {
          data.uploadedFile = base64;
          let json = JSON.stringify(data);
          context.commit('saveJson', json);
        })
        context.commit('saved', true)
      }
    }

  },

  getters: {

    firstInput(state) {
      return state.firstInputValue;
    },
    secondInput(state) {
      return state.secondInputValue;
    },
    saved(state) {
      return state.saved;
    }

  }

})
