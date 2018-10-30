<template>
  <div>
    <table>
      <tr>
        <td v-for="tableCell in $store.state.tableData">{{tableCell.text}}</td>
      </tr>
    </table>
    <button>Сохранить</button>
  </div>
</template>

<style lang="scss">

</style>

<script>

export default {
  name: 'main',
  data () {
    return {
    	value: '',
    	filter: ''
    }
  },
    components: {
  },


  mounted() {
  	console.log(this.$store.state.toDos);
  	console.log(this.$store.state.test);
  	this.$store.dispatch('getData');
  },

  methods: {
  	add: function(value) {
  		if(value !== '') {
  			this.$store.commit('addTodo', {name: value, done: false});
  		}
  	},
  	del: function(index) {
  		this.$store.commit('deleteTodo', index);
  		console.log(index);
  	},
  	done: function (index) {
  		this.$store.commit('markAsdone', index);
  	},
  	sortDone: function() {
  		this.$store.commit('sortDone');
  	},
  	sortUndone: function() {
  		this.$store.commit('sortUndone');
  	},
  	// showAll: function() {
  	// 	this.filter = '';
  	// },
  	filterDone: function() {
  		this.filter = 'done';
  	},
  	filterUndone: function() {
  		this.filter = 'undone';
  	}
  	// filterDone: function () {
  	// 	this.$store.commit('filterDone');
  	// }
  },
  computed: {
  	todos () {
  		if(this.filter == '') {
    		return this.$store.getters.allTodos;
    	};
    	if(this.filter == 'done') {
    		return this.$store.getters.doneTodos;
    	};
    	if(this.filter == 'undone') {
    		return this.$store.getters.undoneTodos;
    	};
    }
  }
}
</script>
