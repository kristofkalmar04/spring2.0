<template>
  <div class="mainContainer">
      <InputField />
      <ItemsTable :data="allTasks" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import InputField from './components/InputField.vue';
import ItemsTable from './components/ItemsTable.vue';
import { mapActions, mapGetters, mapState } from 'vuex';

@Options({
  components: {
        InputField,
        ItemsTable,
  },
  computed: mapGetters('task', ['allTasks']),
  methods: {
    ...mapActions('task', ['fetchTasks'])
  },
  created() {
    this.$store.dispatch('task/fetchTasks');
  },
  data() {
      return {
        ...mapState({ tasks: (state: any) => state.tasks }),
      }
  },
  mounted() {
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app, body, html {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin: 0;
    padding:0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
}

.mainContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px;
    box-sizing: border-box;
}
</style>
